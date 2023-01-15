import Button from "@ui/Button";
import Image from "next/image";
import { useCallback, useMemo } from "react";
import { HiHeart, HiOutlineHeart } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { Product } from "types/domain/product";
import { handleCart } from "@store/modules/cart/actions";
import { IReducersState } from "@store/modules/rootReducer";
import { checkFavoriteProduct } from "@store/modules/favorites/reducer";

type CardProps = {
  product: Product;
};

const Card = ({ product }: CardProps) => {
  const { price, id, name, image } = product;

  const { cart, favorite } = useSelector((state: IReducersState) => state);
  const { products: favoriteProducts } = favorite;
  const { products: cartsProducts } = cart;

  const isFavorite = useMemo(
    () => favoriteProducts.some((favoriteProduct) => favoriteProduct.id === id),
    [favoriteProducts, id]
  );

  const isInCart = useMemo(
    () => cartsProducts.some((cartProduct) => cartProduct.id === id),
    [cartsProducts, id]
  );

  const dispatch = useDispatch();

  const updateCart = useCallback(() => {
    dispatch(handleCart({ product, isInCart: true }));
  }, [dispatch, product]);

  const updateFavorite = useCallback(() => {
    dispatch(
      checkFavoriteProduct({
        product,
        isFavorite
      })
    );
  }, [dispatch, isFavorite, product]);

  const IconComponent = useMemo(() => {
    return isFavorite ? HiHeart : HiOutlineHeart;
  }, [isFavorite]);

  return (
    <div className="relative flex flex-col rounded-lg bg-white p-6 shadow-lg">
      <div className="absolute top-6 right-6 rounded-full bg-gray-100 p-1">
        <IconComponent
          size={24}
          className="cursor-pointer text-red-500"
          onClick={updateFavorite}
        />
      </div>

      <div className="flex justify-center">
        <Image
          alt={`${name}`}
          src={`/images/products/${image}.jpg`}
          width={200}
          height={200}
        />
      </div>

      <h3 className="mt-6 text-lg font-medium leading-tight text-gray-900">
        {name}
      </h3>

      <p className="mb-6 text-base font-normal text-green-500">{`$${price}`}</p>

      <div className="flex h-full flex-col justify-end">
        <Button
          title={isInCart ? "Remove from cart" : "Add to cart"}
          isOutlined={isInCart}
          isFullWidth
          onClick={updateCart}
        />
      </div>
    </div>
  );
};

export default Card;

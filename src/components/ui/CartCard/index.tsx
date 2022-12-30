import Button from "@ui/Button";
import Image from "next/image";
import { useCallback, useMemo } from "react";
import xboxImage from "../../../../public/xbox.jpg";
import { HiHeart, HiOutlineHeart } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { checkFavoriteProduct } from "@store/modules/favorites/actions";
import { IFavoriteState } from "@store/modules/favorites/types";
import { IReducersState } from "@store/modules/rootReducer";
import CartInfo from "./CartInfo";
import {
  handleItemQuantity,
  handleRemoveCart
} from "@store/modules/cart/actions";
import { ProductCart } from "@store/modules/cart/types";

type CartCardProps = {
  product: ProductCart;
};

const CartCard = ({ product }: CartCardProps) => {
  const { price, id, name, quantity } = product;

  const dispatch = useDispatch();

  const { products } = useSelector<IReducersState, IFavoriteState>(
    (state) => state.favorite
  );

  const isFavorite = useMemo(() => {
    return products.some((favoriteProduct) => favoriteProduct.id === id);
  }, [id, products]);

  const IconComponent = useMemo(() => {
    return isFavorite ? HiHeart : HiOutlineHeart;
  }, [isFavorite]);

  const updateFavorite = useCallback(() => {
    dispatch(
      checkFavoriteProduct({
        product,
        isFavorite
      })
    );
  }, [dispatch, isFavorite, product]);

  const handleRemoveProductCart = useCallback(() => {
    dispatch(handleRemoveCart({ productId: product.id }));
  }, [dispatch, product.id]);

  const handleUpdateQuantity = useCallback(
    (isMoreQuantity: boolean) => {
      dispatch(handleItemQuantity({ isMoreQuantity, productId: id }));
    },
    [dispatch, id]
  );

  return (
    <div className="relative rounded-lg bg-white p-6 shadow-lg">
      <div className="absolute top-6 right-6 rounded-full bg-gray-100 p-1">
        <IconComponent
          size={24}
          className="cursor-pointer text-red-500"
          onClick={updateFavorite}
        />
      </div>

      <div className="flex justify-center">
        <Image
          alt="Xbox console"
          src={xboxImage}
          width={200}
          height={200}
          priority
        />
      </div>

      <h3 className="mt-6 text-lg font-medium leading-tight text-gray-900">
        {name}
      </h3>

      <p className="mb-3 text-base font-normal text-green-500">{`$${price}`}</p>

      <CartInfo
        quantity={quantity}
        price={price}
        onUpdateQuantity={handleUpdateQuantity}
      />

      <div className="mt-4 flex">
        <Button
          title="Remove from cart"
          isOutlined
          isFullWidth
          onClick={handleRemoveProductCart}
        />
      </div>
    </div>
  );
};

export default CartCard;

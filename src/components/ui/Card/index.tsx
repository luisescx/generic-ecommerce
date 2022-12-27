import Button from "@ui/Button";
import Image from "next/image";
import { useCallback, useMemo, useState } from "react";
import xboxImage from "../../../../public/xbox.jpg";
import { HiHeart, HiOutlineHeart } from "react-icons/hi";

type CardProps = {
  title: string;
  price: number;
};

const Card = ({ price, title }: CardProps) => {
  const [isOnCart, setIsOnCart] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleCart = useCallback(() => {
    setIsOnCart(!isOnCart);
  }, [isOnCart]);

  const IconComponent = useMemo(() => {
    return isFavorite ? HiHeart : HiOutlineHeart;
  }, [isFavorite]);

  return (
    <div className="relative block rounded-lg bg-white p-6 shadow-lg">
      <div className="absolute top-6 right-6 rounded-full bg-gray-100 p-1">
        <IconComponent
          size={24}
          className="cursor-pointer text-red-500"
          onClick={() => setIsFavorite(!isFavorite)}
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
        {title}
      </h3>

      <p className="mb-6 text-base font-normal text-green-500">{`$${price}`}</p>

      <div className="flex w-full">
        <Button
          title={isOnCart ? "Remove from cart" : "Add to cart"}
          isOutlined={isOnCart}
          isFullWidth
          onClick={handleCart}
        />
      </div>
    </div>
  );
};

export default Card;

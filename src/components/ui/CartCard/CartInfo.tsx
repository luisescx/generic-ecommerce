import { cva } from "class-variance-authority";
import { useMemo } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

type CartInfoProps = {
  quantity: number;
  price: number;
  onUpdateQuantity: (isMoreQuantity: boolean) => void;
};

const cartInfoStyles = cva("cursor-pointer text-blue-500 hover:text-blue-700", {
  variants: {
    isDisabled: {
      true: "cursor-not-allowed text-slate-500 hover:text-slate-700"
    }
  },
  defaultVariants: {
    isDisabled: false
  }
});

const CartInfo = ({ quantity, price, onUpdateQuantity }: CartInfoProps) => {
  const total = useMemo(() => {
    return quantity * price;
  }, [quantity, price]);

  return (
    <div className="flex justify-between">
      <div>
        <p>Quantity</p>
        <div className="mt-1 flex items-center justify-center">
          <div>
            <AiOutlineLeft
              size={18}
              className={cartInfoStyles({ isDisabled: quantity <= 1 })}
              onClick={() => (quantity > 1 ? onUpdateQuantity(false) : null)}
            />
          </div>

          <p className="mx-2">{quantity}</p>

          <AiOutlineRight
            size={18}
            className="cursor-pointer text-blue-500 hover:text-blue-700"
            onClick={() => onUpdateQuantity(true)}
          />
        </div>
      </div>

      <div>
        <p>Total</p>
        <p className="mt-1 flex items-center text-base font-normal text-green-500">
          {`$${total}`}
        </p>
      </div>
    </div>
  );
};

export default CartInfo;

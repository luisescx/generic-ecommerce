import { removeAllItemsFromCart } from "@store/modules/cart/actions";
import Button from "@ui/Button";
import { useCallback } from "react";
import { useDispatch } from "react-redux";

type CartTotalCard = {
  totalValue: number;
  itemsTotalQuantity: number;
  productsTotalQuantity: number;
};

const CartTotalCard = ({
  itemsTotalQuantity,
  totalValue,
  productsTotalQuantity
}: CartTotalCard) => {
  const dispatch = useDispatch();

  const handleRemoveItemsFromCart = useCallback(() => {
    dispatch(removeAllItemsFromCart());
  }, [dispatch]);

  return (
    <div className="rounded-lg bg-white p-6 shadow-lg">
      <div className="h-full border-l-4 border-blue-600">
        <h4 className="mb-6 ml-2">Resume</h4>
      </div>

      <div className="cart-quantity">
        <p className="cart-quantity__title">Products Quantity</p>

        <p className="cart-quantity__value">{productsTotalQuantity}</p>
      </div>

      <div className="cart-quantity mt-1">
        <p className="cart-quantity__title">Items Quantity</p>

        <p className="cart-quantity__value">{itemsTotalQuantity}</p>
      </div>

      <div className="mt-4 items-center rounded-lg bg-emerald-100 p-2 text-center shadow-sm">
        <h6 className="text-sm font-medium  text-green-900">Total Value</h6>

        <p className="text-2xl font-bold text-green-900">{`$${totalValue.toFixed(
          2
        )}`}</p>
      </div>

      <div className="mt-4">
        <Button
          title="Remove all from cart"
          isFullWidth
          onClick={handleRemoveItemsFromCart}
        />
      </div>
    </div>
  );
};

export default CartTotalCard;

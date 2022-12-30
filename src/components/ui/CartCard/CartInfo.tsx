import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const CartInfo = () => (
  <div className="flex justify-between">
    <div>
      <p>Quantity</p>
      <div className="mt-1 flex items-center justify-center">
        <div>
          <AiOutlineLeft
            size={18}
            className="cursor-pointer text-blue-500 hover:text-blue-700"
            // onClick={updateFavorite}
          />
        </div>

        <p className="mx-2">1</p>

        <AiOutlineRight
          size={18}
          className="cursor-pointer text-blue-500 hover:text-blue-700"
          // onClick={updateFavorite}
        />
      </div>
    </div>

    <div>
      <p>Total</p>
      <p className="mt-1 flex items-center text-base font-normal text-green-500">
        $300
      </p>
    </div>
  </div>
);

export default CartInfo;

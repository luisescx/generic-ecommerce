import NavLink from "./NavLink";
import { BiCart, BiHeart } from "react-icons/bi";
import { useSelector } from "react-redux";
import { IReducersState } from "@store/modules/rootReducer";
import { ICartState } from "@store/modules/cart/types";

const Menu = () => {
  const { productsStorage } = useSelector<IReducersState, ICartState>(
    (state) => state.cart
  );

  return (
    <menu className="relative z-20 flex h-14 border-b border-gray-200">
      <div className="flex w-full justify-between">
        <nav className="flex h-full items-center">
          <NavLink href="/">Products</NavLink>
        </nav>

        <div className="flex">
          <NavLink href="/favorites">
            <BiHeart size={24} className="cursor-pointer" />
          </NavLink>

          <NavLink href="/cart" hasMarginLeft>
            <div className="relative flex">
              <BiCart size={24} className="cursor-pointer" />

              {!!productsStorage.length && (
                <span className="absolute bottom-3 -right-2 inline-block whitespace-nowrap rounded bg-blue-600 py-1 px-1 text-center align-baseline text-[12px] font-bold leading-none text-white">
                  {productsStorage.length}
                </span>
              )}
            </div>
          </NavLink>
        </div>
      </div>
    </menu>
  );
};

export default Menu;

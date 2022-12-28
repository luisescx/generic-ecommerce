import NavLink from "./NavLink";
import { BiCart, BiHeart } from "react-icons/bi";

const Menu = () => (
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
          <BiCart size={24} className="cursor-pointer" />
        </NavLink>
      </div>
    </div>
  </menu>
);

export default Menu;

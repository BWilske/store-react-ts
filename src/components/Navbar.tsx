import { NavLink } from "react-router-dom";
import { CartButton } from "./CartButton";

export function Navbar() {
  return (
    <div className="h-24 w-full px-16 bg-slate-200 shadow-lg flex justify-start items-center gap-8 text-3xl">
      <div className="w-12 h-8 border-slate-600 border-2 py-8 px-24 flex items-center justify-center rounded-md hover:bg-slate-500">
        <NavLink to="/"> Home</NavLink>
      </div>
      <div className="w-12 h-8 border-slate-600 border-2 py-8 px-24 flex items-center justify-center rounded-md hover:bg-slate-500">
        <NavLink to="/about"> About</NavLink>
      </div>
      <div className="mr-auto w-12 h-8 border-slate-600 border-2  py-8 px-24 flex items-center justify-center rounded-md hover:bg-slate-500">
        <NavLink to="/store"> Store</NavLink>
      </div>
      <CartButton></CartButton>
    </div>
  );
}

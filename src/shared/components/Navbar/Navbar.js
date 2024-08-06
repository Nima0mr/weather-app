import { memo } from "react";
import { ReactComponent as Hamburger } from "../../icons/hamburger-menu.svg";
import { useStore } from "../store";

const Navbar = memo(() => {
  //--------------------------------------------------------

  return (
    <>
        <header className="flex justify-between items-center px-4 mb-1">
          <h1 className="font-segoe font-semibold text-h1 text-white">
            {useStore((state) => state.city)}
          </h1>
          <Hamburger className="text-h2"></Hamburger>
        </header>
    </>
  );
});

export default Navbar;

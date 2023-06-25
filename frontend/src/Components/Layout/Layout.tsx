import { ROUTES } from "../../constants";
import { NavBar } from "../UI/NavBar/NavBar";
import { ShoppingCartIcon } from "../UI/ShoppingCartIcon/ShoppingCartIcon";
import { Outlet, useLocation } from "react-router-dom";

export const Layout = () => {
  const location = useLocation();

  return (
    <>
      <NavBar />
      <Outlet />
      {location.pathname === ROUTES.CART ? null : <ShoppingCartIcon />}
    </>
  );
};

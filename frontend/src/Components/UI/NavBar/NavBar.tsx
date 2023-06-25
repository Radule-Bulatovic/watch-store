import { Link } from "react-router-dom";
import { ROUTES } from "../../../constants";

export const NavBar = () => (
  <nav className="bg-neutral-800 text-white px-8 py-4">
    <ul className="flex gap-4">
      <li>
        <Link to={ROUTES.BRANDS}>Brands</Link>
      </li>
      <li>
        <Link to={ROUTES.WATCHES}>Watches</Link>
      </li>
    </ul>
  </nav>
);

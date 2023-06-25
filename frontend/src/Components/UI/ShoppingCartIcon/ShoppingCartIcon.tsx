import { AiOutlineShoppingCart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../constants";

export const ShoppingCartIcon = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(ROUTES.CART)}
      className="fixed right-16 bottom-16 border-2 border-black p-4 text-3xl rounded-full"
    >
      <AiOutlineShoppingCart />
    </button>
  );
};

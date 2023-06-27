import { AiOutlineShoppingCart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../constants";
import { useShoppingCartContext } from "../../../context/ShopingCartContext";

export const ShoppingCartIcon = () => {
  const navigate = useNavigate();
  const { totalItems } = useShoppingCartContext();

  return (
    <div className="fixed right-16 bottom-16">
      <button
        onClick={() => navigate(ROUTES.CART)}
        className="border-2 border-black p-4 text-3xl rounded-full relative"
      >
        <AiOutlineShoppingCart />
        <span className="absolute top-0 right-0 bg-[red] px-1 py-1 w-6 h-6 rounded-full text-xs text-white">
          {totalItems}
        </span>
      </button>
    </div>
  );
};

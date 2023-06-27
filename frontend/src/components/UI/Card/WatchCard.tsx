import { AiOutlineShoppingCart } from "react-icons/ai";
import { Card } from "./Card";
import { useShoppingCartContext } from "../../../context/ShopingCartContext";

export const WatchCard = (props: any) => {
  const { addItem } = useShoppingCartContext();
  return (
    <Card className="flex flex-col justify-center items-center w-60">
      <div className="h-96 flex justify-center items-center">
        <img src={`http://localhost:1337${props.item.photo.url}`} alt="" />
      </div>
      <div className="flex justify-between p-4 border-t-2 w-full">
        <span className="text-lg">
          <h1 className=" font-bold">{props.item.name}</h1>
          <p>{props.item.price} &euro;</p>
        </span>
        <button
          className="text-xl border-2 border-[white] p-2 rounded-xl"
          onClick={() => addItem(props.item)}
        >
          <AiOutlineShoppingCart />
        </button>
      </div>
    </Card>
  );
};

import { AiOutlineShoppingCart } from "react-icons/ai";
import { Card } from "./Card";

export const WatchCard = (props: any) => (
  <Card>
    <img src={`http://localhost:1337${props.item.photo.url}`} alt="" />
    <div className="flex justify-between p-4 border-t-2">
      <span className="text-lg">
        <h1 className=" font-bold">{props.item.name}</h1>
        <p>{props.item.price} &euro;</p>
      </span>
      <button className="text-xl border-2 border-[white] p-2 rounded-xl">
        <AiOutlineShoppingCart />
      </button>
    </div>
  </Card>
);

import { Link } from "react-router-dom";
import { Card } from "./Card";
import { ROUTES } from "../../../constants";

export const BrandCard = (props: any) => (
  <Card className="flex flex-col justify-center items-center p-10 gap-10">
    <img
      src={`http://localhost:1337${props.item.logo.url}`}
      className="w-80 h-80"
      alt=""
    />
    <p className="text-xl">Number of watches: {props.item.watches.length}</p>
    <Link
      className="border-2 border-black px-8 py-4 rounded-lg"
      to={ROUTES.BRAND(props.item.id)}
    >
      Explore
    </Link>
  </Card>
);

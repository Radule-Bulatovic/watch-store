import { useState, useEffect } from "react";
import { WatchCard } from "../../UI/Card/WatchCard";
import { Watch } from "../../../api";

export const Watches = () => {
  const [watches, setWatches] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await Watch.all();
      setWatches(JSON.parse(response.data).data);
    };
    getData();
  }, []);
  return (
    <div className="flex flex-col gap-4 justify-center items-center w-full mt-8">
      {watches.map((e) => (
        <WatchCard item={e} key={e.id} />
      ))}
    </div>
  );
};

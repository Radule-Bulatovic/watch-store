import { useState, useEffect } from "react";
import { WatchCard } from "../../UI/Card/WatchCard";
import { Watch } from "../../../api";
import { WatchT } from "../../../types";

export const Watches = () => {
  const [watches, setWatches] = useState<WatchT[]>([]);

  useEffect(() => {
    const getData = async () => {
      const response = await Watch.all();
      setWatches(response.data.data);
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

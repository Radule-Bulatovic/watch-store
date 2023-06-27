import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Brand as BrandApi } from "../../../api";
import { WatchCard } from "../../UI/Card/WatchCard";
import { BrandT } from "../../../types";

export const Brand = () => {
  const { id } = useParams();

  const [brand, setBrand] = useState<BrandT>();

  useEffect(() => {
    const getData = async () => {
      const response = await BrandApi.find(id as string);
      setBrand(response.data.data);
    };

    getData();
  }, [id]);

  return (
    <div className="flex flex-col items-center">
      {brand ? (
        <>
          <img
            src={`http://localhost:1337${brand.logo.url}`}
            className="w-80 h-80"
            alt=""
          />
          <div className="flex flex-col gap-4 justify-center items-center w-full mt-8">
            {brand?.watches
              ? brand.watches.map((watch) => (
                  <WatchCard item={watch} key={watch.id} />
                ))
              : null}
          </div>
        </>
      ) : (
        <h1>Brand by id {id} was not found!</h1>
      )}
    </div>
  );
};

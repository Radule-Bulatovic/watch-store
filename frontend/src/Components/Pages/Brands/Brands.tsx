import React, { useEffect, useState } from "react";
import { Brand } from "../../../api";
import { BrandCard } from "../../UI/Card/BrandCard";

type Props = {};

export const Brands = (props: Props) => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await Brand.all();
      setBrands(JSON.parse(response.data).data);
    };
    getData();
  }, []);
  return (
    <div className="flex flex-col gap-4 justify-center items-center w-full mt-8">
      {brands.map((e) => (
        <BrandCard item={e} key={e.id} />
      ))}
    </div>
  );
};

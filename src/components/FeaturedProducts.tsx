import React from "react";
import ProductCard, { ProductCardType } from "./ProductCard";
import ViewAll from "./ViewAll";

const FeaturedProducts = async () => {
  const data = await (await fetch("http://localhost:3000/api/products", {
    cache: "no-store",
  })).json();
  const filteredData:ProductCardType[] = data.filter((product:ProductCardType) => product.tags.includes("featured"));
  
  
  return (
    <div>
      <h1 className="text-4xl text-center font-bold my-7">Featured Products</h1>
      <div className="grid grid-cols-2 gap-2 sm:gap-6 md:grid-cols-4 px-4 flex-shrink-0 ">
        {filteredData.map((product: ProductCardType, index: number) => (
          <ProductCard data={product} key={index} />
        ))}
      </div>
      <div className="flex justify-center my-10 overflow-hidden h-20 items-center">
        <ViewAll/>
      </div>
    </div>
  );
};

export default FeaturedProducts;

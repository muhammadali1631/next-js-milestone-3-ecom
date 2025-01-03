import ProductCard, { ProductCardType } from '@/components/ProductCard';
import React from 'react'

const page = async() => {
    const data:ProductCardType[] = await (await fetch("https://next-js-milestone-3-ecom.vercel.app//api/products", {
        cache: "no-store",
      })).json();
  return (
    <div>
        <h1 className="text-4xl text-center font-bold my-7">Featured Products</h1>
      <div className="grid grid-cols-2 gap-2 sm:gap-6 md:grid-cols-4 px-4 flex-shrink-0 my-10">
        {data.map((product: ProductCardType, index: number) => (
          <ProductCard data={product} key={index} />
        ))}
      </div>
    </div>
  )
}

export default page
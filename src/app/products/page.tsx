import ProductCard from '@/components/ProductCard';
import React from 'react'

const page = async() => {
    const data = await (await fetch("http://localhost:3000/api/products", {
        cache: "no-store",
      })).json();
  return (
    <div>
        <h1 className="text-4xl text-center font-bold my-7">Featured Products</h1>
      <div className="grid grid-cols-2 gap-2 sm:gap-6 md:grid-cols-4 px-4 flex-shrink-0 my-10">
        {data.map((product: any, index: number) => (
          <ProductCard data={product} key={index} />
        ))}
      </div>
    </div>
  )
}

export default page
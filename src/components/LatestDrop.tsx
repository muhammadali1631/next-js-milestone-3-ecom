import React from 'react'
import ProductCard, { ProductCardType } from './ProductCard';
import ViewAll from './ViewAll';

const LatestDrop = async() => {
    const data = await (await fetch("http://localhost:3000/api/products", {
        cache: "no-store",
      })).json();
      const filteredData = data.filter((product:ProductCardType) => product.tags.includes("latest")).reverse();

  return (
    <div>
        <h2 className='text-center text-4xl font-bold my-10'>The Latest Drop</h2>
        <div className="flex space-x-4 justify-around overflow-x-scroll overflow-y-hidden p-4">
            {filteredData.map((product: ProductCardType, index: number) => (
                <ProductCard data={product} key={index} index={2}/>
            ))}
        </div>
        <div className='flex justify-center my-10 overflow-hidden h-20 items-center'>
            <ViewAll/>
        </div>
    </div>
  )
}

export default LatestDrop
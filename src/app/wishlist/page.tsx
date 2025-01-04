'use client'
import { ProductCardType } from '@/components/ProductCard'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { RiDeleteBin6Fill } from 'react-icons/ri'
const page = () => {
    const [data, setData] = useState<ProductCardType[]>([]);
      const [ids, setIds] = useState<number[]>([]);
      
    
      useEffect(() => {
        fetch("https://next-js-milestone-3-ecom.vercel.app/api/products")
          .then((response) => response.json())
          .then((data) => setData(data));
        const Ids = localStorage.getItem("wish");
        if (Ids) {
          setIds(JSON.parse(Ids));
        }
      }, []);
    
      const filteredData = data?.filter((product: ProductCardType) =>
        ids.includes(product.id)
      );
      const delWish = (id: number) => {
        const wishItems = ids.filter((faID: number) => id !== faID);
        setIds(wishItems);
        if (wishItems.length === 0) {
          localStorage.setItem("wish", JSON.stringify([]));
        }else{
            localStorage.setItem("wish", JSON.stringify(wishItems));
        }
    }
  return (
    <>
    <h2 className='text-center text-3xl font-bold my-10'>Your Wish List</h2>
    <div className='flex justify-center'>
    <div className="flex flex-col gap-6 border mb-10 rounded-xl ml-1  w-[700px]  sm:p-5 p-2">
          {filteredData.map((item, index) => (
            <div
              
              className={`flex gap-4 border-b-2 py-2 ${
                index === 2 ? "border-b-0 " : "border-b-2 "
              }`}
            >
            <Link key={index} href={`/products/${item.slug}`}>

              <Image
                src={item.images[item.colors[0]][0]}
                alt={"asdf"}
                className=" w-28 h-28  border rounded  object-cover"
              />
              </Link>
              <div className="w-[90%] flex flex-col justify-center">
                <div className="flex justify-between gap-2 items-center">
                  <Link href={`/products/${item.slug}`} className=" w-[80%]">
                    <h2 className="line-clamp-1">
                    {item.title}
                    </h2>
                  </Link>
                  <RiDeleteBin6Fill onClick={() => delWish(item.id)} className="text-red-600  text-2xl  cursor-pointer" />
                </div>

                <div className="flex justify-between items-center">
                  <p className="text-xl font-semibold">${item.price} </p>
                </div>
              </div>
            </div>
            
          ))}
        </div>
    </div>
    </>
  )
}

export default page
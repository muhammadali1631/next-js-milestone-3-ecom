"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { SlArrowRight } from "react-icons/sl";
import { FaArrowRight } from "react-icons/fa6";
import { ProductCardType } from "@/components/ProductCard";
import Link from "next/link";

const Page = () => {
  const [data, setData] = useState<ProductCardType[]>([]);
  const [ids, setIds] = useState<number[]>([]);
  

  useEffect(() => {
    fetch("https://next-js-milestone-3-ecom.vercel.app//api/products")
      .then((response) => response.json())
      .then((data) => setData(data));
    const Ids = localStorage.getItem("cart");
    if (Ids) {
      setIds(JSON.parse(Ids));
    }
  }, []);

  const filteredData = data?.filter((product: ProductCardType) =>
    ids.includes(product.id)
  );
  const delCart = (id: number) => {
    const cartItem = ids.filter((faID: number) => id !== faID);
    setIds(cartItem);
    if (cartItem.length === 0) {
      localStorage.setItem("cart", JSON.stringify([]));
    }else{
        localStorage.setItem("cart", JSON.stringify(cartItem));
    }
}
  return (
    <div className=" px-3 sm:px-16 ">
      <h1 className="flex  items-center gap-3  ml-1 mt-8 ">
        {" "}
        Home <SlArrowRight /> Cart{" "}
      </h1>
      <h1 className="text-4xl  ml-1 mt-10 font-bold mb-5">Your Cart</h1>

      <div className="flex justify-around flex-wrap gap-5 ">
        <div className="flex flex-col gap-6 border mb-10 rounded-xl ml-1  w-[700px]  sm:p-5 p-2">
          {filteredData.map((item, index) => (
            <Link key={index} href={`/products/${item.slug}`}>
            <div
              
              className={`flex gap-4 border-b-2 py-2 ${
                index === 2 ? "border-b-0 " : "border-b-2 "
              }`}
            >
              <Image
                src={item.images[item.colors[0]][0]}
                alt={"asdf"}
                className=" w-28 h-28  border rounded  object-cover"
              />
              <div className="w-[90%] flex flex-col justify-center">
                <div className="flex justify-between gap-2 items-center">
                    <h2 className="line-clamp-1 w-[80%]">
                    {item.title}
                    </h2>
                  <RiDeleteBin6Fill onClick={() => delCart(item.id)} className="text-red-600  text-2xl  cursor-pointer" />
                </div>

                <div className="flex justify-between items-center">
                  <p className="text-xl font-semibold">${item.price} </p>
                </div>
              </div>
            </div>
            </Link>
            
          ))}
        </div>

        <div className="  p-6 border ml-2  rounded-xl  flex flex-col h-[450px] w-[400px] ">
          <h2 className="text-xl font-semibold mb-9">Order Summary</h2>
          <div className="flex mb-5  justify-between ">
            <p>Subtotal</p>
            <p>${filteredData.reduce((sum, item) => sum + item.price, 0)}</p>
          </div>
          <div className="flex mb-5 justify-between ">
            <p>Discount </p>
            <p className=" text-red-600">-$20</p>
          </div>
          <div className="flex mb-5 justify-between ">
            <p>Delivery Fee</p>
            <p>$15</p>
          </div>
          <hr className="my-4" />
          <div className="flex mb-4 justify-between">
            <p className="font-bold">Total</p>
            <p className="font-bold">${filteredData.reduce((sum, item) => sum + item.price, 0) - 5}</p>
          </div>
          <div className="flex gap-2 sm:gap-4 mt-4">
            <input
              type="text"
              placeholder=" Add promo code"
              className="border border-gray-300 w-[150px] sm:w-[300px] px-2  rounded-3xl"
            />
            <button className="bg-black  text-white font-bold py-2 sm:px-6 px-3 rounded-3xl">
              Apply
            </button>
          </div>
          <button className="bg-black text-white font-bold py-2 flex justify-center items-center gap-2  rounded-3xl sm:mt-10 mt-2">
            Go to Checkout <FaArrowRight />{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;

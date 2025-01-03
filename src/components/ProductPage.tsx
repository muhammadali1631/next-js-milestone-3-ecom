'use client'
import { useState } from "react";
import { ProductCardType } from "./ProductCard";
import Image from "next/image";
import CartIcon from "./CartIcon";

const ProductPage = ({data}: {data: ProductCardType}) => {
    const [color, setColor] = useState(data.colors[0]);
  const [selectedImage, setSelectedImage] = useState(data.images[color][0]);

  

  return (
    <div className="flex flex-col md:flex-row">
  <div className="bg-white p-6 flex flex-col  lg:flex-row gap-4 md:gap-10 items-center ">
    <div className="flex space-x-4 lg:space-x-0 lg:flex-col lg:space-y-4 items-center ">
      {data.images[color].map((img, index) => (
        <div
          key={index}
          className={`overflow-hidden flex justify-center items-center bg-gray-100 w-16 h-16 md:w-20 md:h-20 object-contain rounded-md cursor-pointer ${
            selectedImage === img ? "ring-2 ring-blue-500" : ""
          }`}
        >
          <Image
            src={img}
            alt={`Thumbnail ${index + 1}`}
            className="mix-blend-multiply object-contain"
            onClick={() => setSelectedImage(img)}
          />
        </div>
      ))}
    </div>

    <div className=" bg-gray-100  w-[95vw] md:h-[450px] lg:w-[30vw] flex justify-center items-center rounded-md">
      <Image
        src={selectedImage}
        alt="Main Product"
        className="w-[450px] h-[450px] object-contain rounded-lg mix-blend-multiply"
      />
    </div>

    {/* Product Details */}
    <div className="flex flex-col mt-5 w-[95vw] md:mt-0 lg:w-[50vw]">
      <h1 className="text-2xl md:text-3xl font-semibold mb-3">{data.title}</h1>
      <h3>
        Price:{" "}
        <span className="text-lg md:text-xl text-red-500 font-bold">
          ${data.discountedPrice} -{" "}
          <span className="line-through">${data.price}</span>
        </span>
      </h3>

      {/* Color Options */}
      <div className="flex gap-2 md:gap-4 my-4">
        {data.colors.map((Color, index) => (
          <div
            key={index}
            className={`h-12 w-16 md:h-16 md:w-20 flex items-center p-2 rounded-md cursor-pointer ${
              Color === color && "border-2 border-blue-600"
            }`}
            onClick={() => {
              setColor(Color);
              setSelectedImage(data.images[Color][0]);
            }}
          >
            <Image
              src={data.images[Color][0]}
              alt=""
              className="h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Add to Cart */}
      <CartIcon id={data.id} add="addtocart" />

      {/* Description */}
      <p className="text-lg md:text-xl font-bold">{data.description}</p>
    </div>
  </div>
</div>

  );
};

export default ProductPage;

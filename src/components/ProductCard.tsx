"use client";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import CartIcon from "./CartIcon";
import WishIcon from "./WishIcon";
import Link from "next/link";
export interface ProductCardType {
  id: number;
  title: string;
  colors: string[];
  price: number;
  discountedPrice: number;
  images: { [key: string]: StaticImageData[] };
  tags: string[];
  slug: string;
  description: string;
}

const ProductCard = ({ data, index }: {data: ProductCardType, index?:number}) => {
  const [color, setColor] = useState(data.colors[0]);
  const [hoveredIndex, setHoveredIndex] = useState<number>(0);
  const [isHovered, setIsHovered] = useState(false)

  const cardVariants = {
    hidden: { opacity:  0, y: 50 }, 
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }, 
  };
  const iconVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2 }, // Stagger effect
    }),
  };

  const ref = React.useRef(null);

  return (
    <Link href={`/products/${data.slug}`}>
    <motion.div
      className={` ${index === 2 ? "flex-shrink-0 w-[48vw] md:w-[300px] md:max-w-xs mx-auto" : "max-w-xs mx-auto"}`}
      ref={ref}
      initial="hidden"
      whileInView='visible'
      viewport={{
        margin: '-50px',
      }}
      variants={cardVariants}
    >
      <div onMouseEnter={() => {setHoveredIndex(1);  setIsHovered(true);}}
          onMouseLeave={() => {setHoveredIndex(0);  setIsHovered(false);}} className="relative bg-gray-100 rounded-lg h-44 sm:h-80 flex items-center">
        <Image
          src={data.images[color][hoveredIndex]}
          alt="Formal Shoe"
          width={300}
          height={300}
          className="w-full h-full object-contain mix-blend-multiply"
          
        />
        <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute bottom-5 w-full flex justify-center gap-2"
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {[CartIcon, WishIcon].map((Icon, index) => (
              <motion.div key={index} variants={iconVariants} custom={index}>
                <Icon id={data.id}/>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      </div>

      <div className="flex gap-2 my-4">
        {data.colors.map((color: string, colorIndex: number) => (
          <button
            key={colorIndex}
            onClick={() => setColor(color)}
            className={`w-6 h-6 rounded-full border-2 border-gray-200`}
            style={{ backgroundColor: color }}
          ></button>
        ))}
      </div>

      <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
        {data.title}
      </h3>
      <div className="flex items-center space-x-2">
        <span className="text-xl font-bold text-gray-900">
          ${data.discountedPrice}
        </span>
        <span className="text-red-500 line-through">${data.price}</span>
      </div>

    </motion.div>
    </Link>
  );
};

export default ProductCard;

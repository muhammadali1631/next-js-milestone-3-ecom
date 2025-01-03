"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

import image1 from "@/images/s1.jpg";
import image2 from "@/images/s2.jpg";
import image3 from "@/images/s3.jpg";

const data = [
  {
    title: "ZEN VIVID 16",
    description: "Look for your inspiration here",
    mainImage: image1,
  },
  {
    title: "PLEATED HEEL",
    description: "Look for your inspiration here",
    mainImage: image2,
  },
  {
    title: "MEN'S SHOES",
    description: "Look for your inspiration here",
    mainImage: image3,
  },
];

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1, // Stagger each child animation
    },
  },
};

export default function Slider() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    if (data.length === 0) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [data]);

  const handleLineClick = (index: number) => {
    setFade(true);
    setTimeout(() => {
      setCurrentImageIndex(index);
      setFade(false);
    }, 300);
  };

  const handlePrevClick = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? data.length - 1 : prevIndex - 1
      );
      setFade(false);
    }, 300);
  };

  const handleNextClick = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === data.length - 1 ? 0 : prevIndex + 1
      );
      setFade(false);
    }, 300);
  };

  return (
    <div className="relative h-[300px] sm:h-[600px] w-full">
        <div
          className={`h-full transition-opacity duration-300 ${
            fade ? "opacity-0" : "opacity-100"
          }`}
        >
          <Image
            src={data[currentImageIndex]?.mainImage}
            alt={`Slide ${currentImageIndex + 1}`}
            className="h-full w-full object-cover"
          />
        </div>

      <motion.div
        key={currentImageIndex}
        className=" h-full absolute bottom-5 left-4 sm:left-32 z-20 flex flex-col space-y-2 sm:space-y-4 justify-center"
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={containerVariants}
      >
        <motion.h2 className="font-bold text-4xl md:text-5xl" variants={textVariants}>
          {data[currentImageIndex].title}
        </motion.h2>
        <motion.h2 className="text-xl mb-6" variants={textVariants}>
          {data[currentImageIndex].description}
        </motion.h2>
        <Link href={'/products'}>
        <motion.button
          className="w-[120px] bg-red-400 py-2 rounded-lg"
          variants={textVariants}
        >
          Shop Now
        </motion.button>
        </Link>
      </motion.div>

      
      <div className="hidden sm:block absolute top-1/2 left-5 transform -translate-y-1/2 z-20">
        <button onClick={handlePrevClick} className="text-7xl text-gray-700">
          <IoIosArrowBack />
        </button>
      </div>
      <div className="hidden sm:block absolute top-1/2 right-5 transform -translate-y-1/2 z-20">
        <button onClick={handleNextClick} className="text-7xl text-gray-700">
          <IoIosArrowForward />
        </button>
      </div>

      
      <div className="absolute bottom-5 w-full flex justify-center z-20">
        {data.map((_, index) => (
          <div
            key={index}
            onClick={() => handleLineClick(index)}
            className={`cursor-pointer h-[10px] rounded-full mx-1 ${
              currentImageIndex === index
                ? "bg-red-500 w-[40px]"
                : "bg-gray-400 w-[20px]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

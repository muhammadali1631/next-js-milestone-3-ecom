'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import React from 'react';
import image2 from '@/images/shoe-2.jpg';
import image1 from '@/images/shoe-1.jpg';
import Link from 'next/link';

const Discounted = () => {
  const containerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const containerVariantsRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="flex flex-col items-center gap-5 md:flex-row  justify-evenly overflow-x-hidden py-20">
      <Link href={'/products'} className='w-[90%] md:w-[45%] h-60'>
      <motion.div
        className="group relative w-full h-full  overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{
            margin: '-100px',
          }}
        variants={containerVariants}
      >
        <Image
          src={image1}
          alt="as"
          className="w-full h-full group-hover:scale-110 duration-300"
        />
        <div className="absolute h-full w-full z-10 top-0 flex flex-col gap-2 justify-center text-white pl-[10%]">
          <h3 className="text-2xl font-bold">Shoes</h3>
          <h2 className="text-3xl font-bold">25% off for men</h2>
        </div>
      </motion.div>
      </Link>
          <Link href={'/products'} className='w-[90%] md:w-[45%] h-60'>
      <motion.div
        className="group relative w-full h-full overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{
            margin: '-100px',
          }}
        variants={containerVariantsRight}
      >
        <Image
          src={image2}
          alt="as"
          className="w-full h-full group-hover:scale-110 duration-300"
        />
        <div className="absolute h-full w-full z-10 top-0 flex flex-col gap-2 justify-center text-white pl-[10%]">
          <h3 className="text-2xl font-bold">Shoes</h3>
          <h2 className="text-3xl font-bold">25% off for women</h2>
        </div>
      </motion.div>
          </Link>
    </div>
  );
};

export default Discounted;

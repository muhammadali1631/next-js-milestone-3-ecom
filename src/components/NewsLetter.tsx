import React from 'react';
import { IoMdArrowForward } from "react-icons/io";


const Newsletter = () => {
  return (
    <section className="bg-gray-100 h-[400px] justify-center flex flex-col items-center">
      <div className="text-center mb-8">
        <p className="text-gray-500 uppercase text-sm font-medium">News Letter</p>
        <h2 className="text-3xl font-bold">Subscribe To Our Newsletter</h2>
      </div>

      <div className="relative w-full max-w-md">
        <input
          type="email"
          placeholder="Enter your e-mail"
          className="w-full py-3 px-4 rounded-md shadow-sm border border-gray-300 text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
        <button
          className="absolute right-0 rounded-md top-1/2 transform -translate-y-1/2 bg-red-400 text-white  w-14 h-full flex items-center justify-center shadow-md hover:bg-red-500 transition duration-200"
          aria-label="Subscribe"
        >
          <IoMdArrowForward className='text-2xl'/>
        </button>
      </div>
    </section>
  );
};

export default Newsletter;

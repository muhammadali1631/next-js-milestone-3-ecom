'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { FaSearch, FaHeart, FaBars, FaTimes } from 'react-icons/fa';
import { AiOutlineShopping } from "react-icons/ai";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className="flex justify-between items-center p-4 bg-white md:px-20 ">
      <div className="text-3xl font-bold">
        <Link href="/">
          E-Com
        </Link>
      </div>

      <div className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <nav
        className='hidden md:flex gap-5 text-xl' 
      >
        <Link href="/" className=" block py-2 px-4 md:inline">
          Home
        </Link>
        <Link href="/about" className="block py-2 px-4 md:inline">
          About
        </Link>
        <Link href="/contact" className="block py-2 px-4 md:inline">
          Contact
        </Link>
        <Link href="/products" className="block py-2 px-4 md:inline">
          Product
        </Link>
      </nav>

      <div className="flex space-x-4 text-xl items-center">
        <FaSearch className='hidden md:flex' />
        <Link href={'/wishlist'}>
        <FaHeart />
        </Link>
        <Link href={'/cart'}>
        <AiOutlineShopping className='text-2xl' />
        </Link>
      </div>
      </div>
      <div>

      </div>
      {menuOpen && (
      <nav
        className='flex flex-col items-center md:hidden text-xl border-t-2' 
      >
        <Link href="/" className="  py-2 px-4 ">
          Home
        </Link>
        <Link href="/about" className=" py-2 px-4 ">
          About
        </Link>
        <Link href="/contact" className=" py-2 px-4 ">
          Contact
        </Link>
        <Link href="/products" className=" py-2 px-4 ">
          Product
        </Link>
      </nav>
      )}
    </header>
  );
};

export default Header;

'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'

const ViewAll = () => {
    const buttonVariant ={
        hidden: { opacity: 0, y: 50 }, 
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }, 
      }  
    
  return (
    <Link href={'/products'}>
        <motion.button  variants={buttonVariant} whileInView='visible' initial='hidden' className='py-2 px-4 font-bold bg-red-400 rounded-md text-white'>View All</motion.button>
    </Link>
  )
}

export default ViewAll
import React from 'react'
import { FaRegHeart } from "react-icons/fa6";


const WishIcon = ({id}: {id:number}) => {
    
  return (
   <div className='h-10 w-10 bg-white rounded-full flex justify-center items-center'>
        <FaRegHeart className="text-xl" />
    </div>
  )
}

export default WishIcon
"use client";
import React, { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa6";
import { FaHeartCircleCheck } from "react-icons/fa6";

const WishIcon = ({ id }: { id: number }) => {
  const [wishItems, setWishItems] = useState<number[]>([]);
  useEffect(() => {
    const Wish = localStorage.getItem("wish");
    if (Wish) {
      setWishItems(JSON.parse(Wish));
    }
  }, []);
  useEffect(() => {
    if (wishItems.length !== 0) {
      localStorage.setItem("wish", JSON.stringify(wishItems));
    }
  }, [wishItems]);

  const addWish = (id: number) => {
    setWishItems([...wishItems, id]);
  };

  const delWish = (id: number) => {
    const wish = wishItems.filter((faID: number) => id !== faID);
    setWishItems(wish);
    if (wish.length === 0) {
      localStorage.setItem("wish", JSON.stringify([]));
    }
  };

  return (
    <div className="h-10 w-10 bg-white rounded-full flex justify-center items-center">
      {wishItems.includes(id) ? (
        <FaHeartCircleCheck className="text-xl" onClick={() => delWish(id)} />
      ) : (
        <FaRegHeart className="text-xl" onClick={() => addWish(id)} />
      )}
    </div>
  );
};

export default WishIcon;

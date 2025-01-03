"use client";
import React, { useEffect, useState } from "react";
import { AiOutlineShopping } from "react-icons/ai";
import { TbShoppingBagCheck } from "react-icons/tb";

const CartIcon = ({ id, add }: { id: number; add?: string }) => {
  const [cart, setCart] = useState<number[]>([]);
  useEffect(() => {
    const Cart = localStorage.getItem("cart");
    if (Cart) {
      setCart(JSON.parse(Cart));
    }
  }, []);
  useEffect(() => {
    if (cart.length !== 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  const addCart = (id: number) => {
    setCart([...cart, id]);
  };

   const delCart = (id: number) => {
    let cartItem = cart.filter((faID: number) => id !== faID);
    setCart(cartItem);
    if (cartItem.length === 0) {
      localStorage.setItem("cart", JSON.stringify([]));
    }
  };
  return (
    <div>
      {add ? (
        <button
          type="button"
          className="focus:outline-none  text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-bold rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-400 dark:hover:bg-red-700 dark:focus:ring-red-900"
          onClick={() => addCart(id)}
        >
          Add to cart
        </button>
      ) : (
        <div className="p-2 bg-white rounded-full ">
          {cart.includes(id) ? (
            <TbShoppingBagCheck
              onClick={() => delCart(id)}
              className="text-2xl"
            />
          ) : (
            <AiOutlineShopping
              onClick={() => addCart(id)}
              className="text-2xl"
            />
          )}
        </div>
      )}
    </div>
  );
};

export default CartIcon;

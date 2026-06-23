"use client";

import { useAppSelector } from "@/store/Hooks";
import { ArrowLeft, ShoppingBag } from "lucide-react";
import Link from "next/link";

const Cart = () => {
  const items = useAppSelector((state) => state.cart.items);

  if (!items.length) {
    return (
      <div className="flex flex-col items-center gap-4 py-16">
        <div className="h-24 w-24 rounded-full bg-athens-gray flex items-center justify-center">
          <ShoppingBag className="h-12 w-12 text-pale-sky" />
        </div>
        <h1 className="text-2xl font-bold">Your cart is empty</h1>
        <p className="text-pale-sky">
          Looks like you haven&apos;t added anything to your cart
        </p>
        <Link
          href={"/"}
          className="bg-red-500 text-white text-sm font-medium py-2.5 px-4 rounded-md flex gap-2 mt-2 items-center "
        >
          <ArrowLeft className="h-4 w-4" />
          Continue Shopping
        </Link>
      </div>
    );
  }
  return <div>Cart</div>;
};

export default Cart;

"use client";

import QuantityButton from "@/components/QuantityButton";
import { removeFromCart } from "@/store/cartSlice";
import { useAppSelector } from "@/store/Hooks";
import { ArrowLeft, ShoppingBag, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

const Cart = () => {
  const items = useAppSelector((state) => state.cart.items);
  const router = useRouter();
  const dispatch = useDispatch();

  const subtotal = items.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0,
  );

  const taxRate = subtotal * 0.08;

  const handleRemove = (productId: string, quantity: number) => {
    dispatch(removeFromCart({ productId, quantity }));
  };

  if (!items.length) {
    return (
      <div className="flex flex-col items-center gap-4 py-16 px-4 text-center">
        <div className="h-24 w-24 rounded-full bg-athens-gray flex items-center justify-center">
          <ShoppingBag className="h-12 w-12 text-pale-sky" />
        </div>

        <h1 className="text-xl sm:text-2xl font-bold">Your cart is empty</h1>

        <p className="text-pale-sky text-sm sm:text-base">
          Looks like you haven&apos;t added anything to your cart
        </p>

        <Link
          href={"/"}
          className="bg-red-500 text-white text-sm font-medium py-2.5 px-4 rounded-md flex gap-2 mt-2 items-center"
        >
          <ArrowLeft className="h-4 w-4" />
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="py-6 px-3 sm:px-4 md:px-8 lg:px-20">
      <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
        Shopping Cart
      </h1>

      <p className="text-pale-sky mt-2 text-sm sm:text-base">
        {items.length} items in your cart
      </p>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* LEFT SIDE */}
        <div className="lg:col-span-2">
          <div className="rounded-lg border p-3 sm:p-6 flex flex-col gap-4">
            {items.map(({ product, quantity }) => (
              <div
                key={product.id}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 pb-6 border-b last:border-b-0 last:pb-0"
              >
                <div
                  className="h-20 w-20 sm:h-24 sm:w-24 rounded-lg overflow-hidden cursor-pointer shrink-0"
                  onClick={() => router.push(`/product/${product.id}`)}
                >
                  <Image
                    src={product.image}
                    width={96}
                    height={96}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex flex-col gap-2 flex-1 min-w-0">
                  <h3 className="font-medium leading-tight break-words text-sm sm:text-base">
                    {product.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-pale-sky">
                    {product.price} each
                  </p>

                  <div className="w-[90px] ">
                    <QuantityButton product={product} />
                  </div>
                </div>

                <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-between w-full sm:w-auto gap-2 sm:gap-0">
                  <p className="text-right font-semibold text-sm sm:text-base">
                    ${(product.price * quantity).toLocaleString()}
                  </p>

                  <button
                    className="flex items-center gap-1 sm:gap-2 text-red-500 cursor-pointer text-xs sm:text-sm hover:opacity-80"
                    onClick={() => handleRemove(product.id, quantity)}
                  >
                    <Trash2 className="h-4 w-4" />
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <Link
            href={"/"}
            className="flex items-center mt-6 gap-2 font-medium text-sm hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            Continue Shopping
          </Link>
        </div>

        <div className="rounded-lg border shadow-sm sticky p-6 flex flex-col gap-4 top-24 h-fit">
          <h1 className="text-xl sm:text-2xl font-semibold">Order Summary</h1>

          <div className="flex flex-col gap-3 mt-2 text-sm sm:text-base">
            <div className="flex justify-between">
              <span className="text-pale-sky">Subtotal</span>
              <span className="font-medium">{subtotal.toLocaleString()}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-pale-sky">Tax (8%)</span>
              <span className="font-medium">{taxRate.toLocaleString()}</span>
            </div>

            <div className="h-px w-full bg-athens-gray"></div>

            <div className="flex justify-between text-lg font-bold">
              <span>Total</span>
              <span>${(subtotal + taxRate).toLocaleString()}</span>
            </div>

            <button className="bg-red-500 text-white rounded-lg font-medium text-sm py-3 mt-2 cursor-pointer hover:opacity-90">
              Proceed to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

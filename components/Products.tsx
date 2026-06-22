"use client";

import { addToCart } from "@/store/cartSlice";
import { IProduct } from "@/types/product";
import { PRODUCTS } from "@/utils/products";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useDispatch } from "react-redux";

const Products = () => {
  const dispatch = useDispatch();

  const hanldeAddToCart = (
    e: React.MouseEvent<HTMLButtonElement>,
    product: IProduct,
  ) => {
    e.stopPropagation();
    dispatch(addToCart({ product }));
  };
  return (
    <div className="py-6 px-20">
      <div className="grid grid-cols-4 gap-6 w-full">
        {PRODUCTS.map((product) => (
          <div
            key={product.id}
            className="rounded-lg shadow-sm border border-athens-gray overflow-hidden flex flex-col cursor-pointer"
          >
            <div className="aspect-square">
              <Image
                src={product.image}
                width={200}
                height={200}
                alt={product.name}
                className="object-cover h-full w-full"
              />
            </div>
            <div className="p-4 flex flex-col grow justify-between">
              <div className="flex flex-col gap-1.5">
                <p className="text-pale-sky text-xs font-medium uppercase tracking-wide">
                  {product.category}
                </p>
                <h3 className="font-medium leading-tight text-base">
                  {product.name}
                </h3>
              </div>

              <div className="flex justify-between items-center mt-4">
                <p className="mt-2 text-lg font-semibold text-shark">
                  ${product.price}
                </p>

                <button
                  className="font-medium text-sm px-3 border border-athens-gray py-2 cursor-pointer rounded-md
                flex items-center justify-center gap-2 shadow-xs"
                  onClick={(e) => hanldeAddToCart(e, product)}
                >
                  <ShoppingCart className="h-4 w-4" />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;

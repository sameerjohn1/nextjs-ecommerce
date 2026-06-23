"use client";

import { addToCart } from "@/store/cartSlice";
import { useAppSelector } from "@/store/Hooks";
import { IProduct } from "@/types/product";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import QuantityButton from "./QuantityButton";
import { useRouter } from "next/navigation";

const Products = () => {
  const { items, products } = useAppSelector((state) => state.cart);
  const dispatch = useDispatch();
  const router = useRouter();

  const hanldeAddToCart = (
    e: React.MouseEvent<HTMLButtonElement>,
    product: IProduct,
  ) => {
    e.stopPropagation();
    dispatch(addToCart({ product }));
  };

  return (
    <div className="py-6 px-3 sm:px-4 md:px-8 lg:px-20">
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-  gap-4 sm:gap-6 w-full">
        {products.map((product) => (
          <div
            key={product.id}
            className=" rounded-lg shadow-sm border border-athens-gray overflow-hidden flex flex-col cursor-pointer"
            onClick={() => router.push(`/product/${product.id}`)}
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

            <div className="p-3 sm:p-4 flex flex-col grow justify-between">
              <div className="flex flex-col gap-1.5">
                <p className="text-pale-sky text-xs font-medium uppercase tracking-wide">
                  {product.category}
                </p>
                <h3 className="font-medium leading-tight text-base">
                  {product.name}
                </h3>
              </div>

              <div className="flex justify-between items-center mt-4">
                <p className="text-lg font-semibold text-shark">
                  ${product.price}
                </p>

                {items.some((item) => item.product.id === product.id) ? (
                  <QuantityButton product={product} />
                ) : (
                  <button
                    className="font-medium text-sm px-3 border border-athens-gray py-2 cursor-pointer rounded-md
                    flex items-center justify-center gap-2 shadow-xs"
                    onClick={(e) => hanldeAddToCart(e, product)}
                  >
                    <ShoppingCart className="h-4 w-4" />
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {products.length === 0 ? (
        <div className="flex flex-col gap-4 items-center py-8">
          <p className="text-lg font-medium ">No Products Found</p>
          <p className="text-pale-sky">
            Try adjusting your search to find what you&apos;re looking for
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default Products;

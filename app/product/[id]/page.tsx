"use client";

import { findProductById } from "@/utils/products";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

function ProductDetails() {
  const { id } = useParams();

  console.log(id, "id");

  const product = findProductById(id as string);
  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center gap-2 mt-16">
        <h1 className="text-2xl">Product not found</h1>
        <p className="text-pale-sky">
          The product you&apos;re looing for doesn&apos;t exist.
        </p>
        <Link
          href={"/"}
          className="text-sm font-medium py-2 px-4 rounded-md bg-red-500 text-white mt-6"
        >
          Back to Products
        </Link>
      </div>
    );
  }
  return (
    <div className="py-6 px-5 sm:px-6 md:px-10 lg:px-20 ">
      <Link href="/" className="flex items-center  gap-2 font-medium text-sm">
        <ArrowLeft className="h-4 w-4" />
        Back
      </Link>

      <div className="flex md:flex-row flex-col gap-8 mt-6 w-full h-full">
        <div className="aspect-square overflow-hidden rounded-2xl flex-1 h-146">
          <Image
            src={product.image}
            width={400}
            height={400}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex gap-2 flex-col flex-1">
          <p className="text-sm font-medium uppercase tracking-wider text-red-500">
            {product.category}
          </p>
          <h1 className="text-4xl font-bold tracking-tight ">{product.name}</h1>
          <p className="mt-4 text-3xl font-bold text-shark">${product.price}</p>
          <p className="mt-6 leading-relaxed text-pale-sky">
            {product.description}
          </p>

          <div className="flex gap-4 mt-6"></div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;

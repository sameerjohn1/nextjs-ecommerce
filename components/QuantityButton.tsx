"use client";

import { addToCart, removeFromCart } from "@/store/cartSlice";
import { useAppSelector } from "@/store/Hooks";
import { IProduct } from "@/types/product";
import { Minus, Plus } from "lucide-react";
import { useDispatch } from "react-redux";

const QuantityButton = ({ product }: { product: IProduct }) => {
  const dispatch = useDispatch();

  const items = useAppSelector((state) => state.cart.items);

  const selectedItems = items.find((item) => item.product.id === product.id);

  const handleMinusButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    dispatch(removeFromCart({ productId: product.id }));
  };

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    dispatch(addToCart({ product }));
  };

  return (
    <div className="flex items-center justify-center border rounded-md gap-2">
      <button
        className="font-medium text-xs rounded-md w-9 h-9 cursor-pointer flex justify-center items-center hover:bg-red-500
      hover:text-white rounded-r-none
      "
        onClick={handleMinusButton}
      >
        <Minus className="h-4 w-4" />
      </button>
      <span>{selectedItems?.quantity}</span>
      <button
        className="font-medium text-xs rounded-md w-9 h-9 cursor-pointer flex justify-center items-center hover:bg-red-500
      hover:text-white rounded-l-none
      "
        onClick={handleAddToCart}
      >
        <Plus className="h-4 w-4" />
      </button>
    </div>
  );
};

export default QuantityButton;

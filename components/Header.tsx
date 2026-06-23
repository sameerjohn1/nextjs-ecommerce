"use client";

import { useEffect, useState } from "react";
import { Badge } from "@/shared/ui/Badge";
import { filterProduct } from "@/store/cartSlice";
import { useAppSelector } from "@/store/Hooks";
import { Package, Search, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useDispatch } from "react-redux";

const Header = () => {
  const pathname = usePathname();
  const showSearchbar = pathname === "/";
  const items = useAppSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalQuantity = items.reduce((acc, curr) => curr.quantity + acc, 0);

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => dispatch(filterProduct(searchTerm)), 500);

    return () => {
      clearTimeout(timer);
    };
  }, [searchTerm, dispatch]);

  return (
    <header
      className="sticky top-0 z-10 backdrop-blur w-full flex items-center justify-between
      py-4 px-4 sm:px-6 md:px-10 lg:px-20
      border-b border-athens-gray gap-4"
    >
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2 flex-shrink-0">
        <Package className="text-red-500" />
        <span className="text-sm sm:text-base font-medium">Teckstack</span>
      </Link>

      {/* Right Section */}
      <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
        {/* Search Bar */}
        {showSearchbar && (
          <div className="relative w-full sm:w-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-santas-gray" />
            <input
              placeholder="Search Products..."
              className="outline-none  w-48 sm:w-60 md:w-80 border border-athens-gray py-2 pl-8 rounded-md text-sm"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        )}

        {/* Cart */}
        <Link href="/cart" className="relative flex-shrink-0">
          <ShoppingCart className="h-5 w-5" />
          {totalQuantity > 0 ? (
            <Badge className="bg-red-500 h-5 w-5 text-white text-xs flex items-center justify-center absolute -top-2 -right-2">
              {totalQuantity}
            </Badge>
          ) : null}
        </Link>
      </div>
    </header>
  );
};

export default Header;

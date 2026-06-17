"use client";

import { Badge } from "@/shared/ui/Badge";
import { Package, Search, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const showSearchbar = pathname === "/";
  return (
    <header className="sticky top-0 z-10 backdrop-blur w-full flex justify-between py-6 px-20 border-b border-athens-gray ">
      <Link href="/" className="flex gap-2">
        <Package className="text-red-500" />
        <span>Teckstack</span>
      </Link>

      <div className="flex gap-4 items-center">
        {showSearchbar ? (
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-santas-gray" />
            <input
              placeholder="Search Products..."
              className="outline-none w-80 border border-athens-gray py-2 pl-8 rounded-md text-sm"
            />
          </div>
        ) : null}

        <Link href="/cart" className="relative">
          <ShoppingCart className="h-5 w-5 " />
          <Badge className="bg-red-500 h-5 w-5 text-white text-center text-xs absolute -top-3.5 -right-4">
            5
          </Badge>
        </Link>
      </div>
    </header>
  );
};

export default Header;

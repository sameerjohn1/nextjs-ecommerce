import { Package } from "lucide-react";
import Link from "next/link";

const header = () => {
  return (
    <header className="sticky top-0 z-10 backdrop-blur w-full flex justify-between py-6 px-20 border-b border-athens-gray ">
      <Link href="/" className="flex gap-2">
        <Package className="text-red-500" />
        <span>Teckstack</span>
      </Link>
    </header>
  );
};

export default header;

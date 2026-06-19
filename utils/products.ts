import { IProduct } from "@/types/product";

const PRODUCTS: IProduct[] = [
{
  id: "1",
  name: "Wireless Noise-Cancelling Headphones",
  description:
    "Experience immersive sound with premium noise cancellation for music and travel.",
  price: 299.99,
  image:
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=60",
  category: "audio",
},
  {
    id: "2",
    name: "Smart Watch Series X",
    description:
      "Track your fitness, heart rate, and notifications with style and precision.",
    price: 199.99,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=60",
    category: "wearables",
  },
  {
    id: "3",
    name: "Mechanical Keyboard",
    description:
      "High-performance mechanical keyboard for gaming and productivity.",
    price: 129.99,
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=60",
    category: "accessories",
  },
  {
    id: "4",
    name: "Gaming Mouse RGB",
    description:
      "Ergonomic gaming mouse with customizable RGB lighting and high DPI sensor.",
    price: 59.99,
    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=800&q=60",
    category: "gaming",
  },
  {
    id: "5",
    name: "4K Action Camera",
    description:
      "Capture your adventures in ultra HD with waterproof durability.",
    price: 249.99,
    image:
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=800&q=60",
    category: "camera",
  },
{
  id: "6",
  name: "Portable Bluetooth Speaker",
  description:
    "Compact speaker with deep bass and long battery life.",
  price: 89.99,
  image:
    "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=800&q=60",
  category: "audio",
},
  {
    id: "7",
    name: "Smartphone Pro Max",
    description:
      "Flagship smartphone with powerful performance and stunning display.",
    price: 999.99,
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=60",
    category: "mobile",
  },
  {
    id: "8",
    name: "Laptop Ultra Slim",
    description:
      "Lightweight ultra-slim laptop perfect for work and development.",
    price: 1199.99,
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=60",
    category: "laptop",
  },
];

const findProductById = (id: string)=>{
    return PRODUCTS.find((product)=>product.id===id)
}

export { PRODUCTS, findProductById }
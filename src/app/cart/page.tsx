'use client'
import { SetStateAction, useState } from "react";
import ShoppingCart from "./ShoppingCart";
import CardDetails from "./CardDetailsComponent";
import RecommendedProducts from "./Carousel";

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  discountPrice?: number;
};

export default function Home() {
  const [total, setTotal] = useState(0);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // This function will be passed down to ShoppingCart to update the total
  const updateTotal = (newTotal: SetStateAction<number>) => {
    setTotal(newTotal);
  };

  // This function will be passed down to RecommendedProducts to add items to the cart
  const addItemToCart = (item: CartItem) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <ShoppingCart cartItems={cartItems} updateTotal={updateTotal} />
        <RecommendedProducts addItemToCart={addItemToCart} />
      </div>
      <div className="h-full">
        <CardDetails total={total} />
      </div>
    </div>
  );
}
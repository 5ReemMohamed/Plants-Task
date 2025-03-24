"use client";
import React, { useEffect, useState } from "react";

interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const updateCartInStorage = (updatedCart: CartItem[]) => {
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const decreaseQuantity = (id: number) => {
    let updatedCart = [...cart];
    const itemIndex = updatedCart.findIndex((item) => item.id === id);

    if (itemIndex !== -1) {
      if (updatedCart[itemIndex].quantity > 1) {
        updatedCart[itemIndex].quantity -= 1;
      } else {
        updatedCart = updatedCart.filter((item) => item.id !== id);
      }
    }

    updateCartInStorage(updatedCart);
  };

  const increaseQuantity = (id: number) => {
    let updatedCart = [...cart];
    const itemIndex = updatedCart.findIndex((item) => item.id === id);

    if (itemIndex !== -1) {
      updatedCart[itemIndex].quantity += 1;
    }

    updateCartInStorage(updatedCart);
  };

  const clearCart = () => {
    updateCartInStorage([]);
  };

  return (
    <div className="max-w-5xl mx-auto p-5">
      <div className="flex justify-between my-8">
        <h2 className="text-3xl font-bold mb-4">Shopping Cart</h2>

        {cart.length > 0 && (
          <button
            onClick={clearCart}
            className="bg-red-500 text-white px-4 py-2 rounded mb-4 cursor-pointer"
          >
            Clear Cart
          </button>
        )}
      </div>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {cart.map((item) => (
            <div key={item.id} className="card group overflow-hidden shadow-lg rounded-lg bg-white">
              <div className="w-full h-[480px] overflow-hidden">
                <img 
                  src={item.image} 
                  className="w-full h-full object-cover group-hover:scale-[1.1] transition-all duration-500" 
                  alt={item.title} 
                  loading="lazy"
                />
              </div>
              <div className="py-4 px-4">
                <h2 className="text-xl font-semibold mt-2">{item.title}</h2>
                <p className="text-[#224229] font-bold">Price: ${item.price}</p>
                <p className="text-sm text-gray-500 font-bold">Quantity: {item.quantity}</p>

                <div className="flex gap-3 mt-4">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded cursor-pointer"
                  >
                    -
                  </button>
                  <span className="font-bold">{item.quantity}</span>
                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="bg-[#224229] text-white px-3 py-1 rounded cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

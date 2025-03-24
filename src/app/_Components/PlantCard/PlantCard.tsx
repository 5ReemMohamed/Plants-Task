"use client";
import React, { useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { Plants } from "@/app/Interfaces/Plants";

interface PlantProps {
  plant: Plants;
}

export default function PlantCard({ plant }: PlantProps) {
  const [cart, setCart] = useState<Plants[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const addToCart = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation(); 

    let updatedCart = [...cart];
    const existingItemIndex = updatedCart.findIndex((item) => item.id === plant.id);

    if (existingItemIndex !== -1) {
      updatedCart[existingItemIndex].quantity += 1;
    } else {
      updatedCart.push({ ...plant, quantity: 1 });
    }

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    toast.success(`${plant.title} added to cart!`, {
      duration: 2000,
      position: "top-right",
      style: {
        background: "#4CAF50",
        color: "#fff",
        fontWeight: "bold",
      },
    });
  };

  return (
    <div key={plant.id} className="card group overflow-hidden shadow-lg rounded-lg bg-white">
      <Toaster position="top-right" />

      <div className="w-full h-[480px] overflow-hidden">
        <img 
          src={plant.image} 
          className="w-full h-full object-cover group-hover:scale-[1.1] transition-all duration-500" 
          alt={plant.title} 
          loading="lazy"
        />
      </div>
      <div className="px-4 py-6">
        <h2 className="text-xl font-semibold my-2">{plant.title}</h2>
        <p className="text-gray-600 line-clamp-4 mb-2">{plant.description}</p>
        <p className="text-[#224229] font-bold mb-2">Price: ${plant.price}</p>
        <p className="text-sm text-gray-500 font-bold mb-2">Stock: {plant.quantity}</p>

        <button 
          onClick={addToCart} 
          className="mt-3 bg-[#224229] text-white px-4 py-2 rounded"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

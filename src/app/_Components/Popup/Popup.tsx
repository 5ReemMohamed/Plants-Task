import React from "react";
import { Plants } from "@/app/Interfaces/Plants";

interface PopupProps {
  plant: Plants;
  onClose: () => void;
}
export default function Popup  ({ plant, onClose }:PopupProps) {
  return (
    <div className="fixed inset-0 bg-black/70 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-10 rounded-lg shadow-lg w-96 h-[90%] relative">
        <button 
          className="absolute top-2 right-3 text-gray-600 hover:text-gray-900 cursor-pointer text-xl"
          onClick={onClose}
        >
          ✖
        </button>
        <img src={plant.image} className="w-[100%] h-96 object-cover rounded-lg" alt={plant.title} />
        <h2 className="text-2xl font-semibold mt-12">{plant.title}</h2>
        <p className="text-gray-600 mt-2">{plant.description}</p>
        <p className="text-[#224229] font-bold mt-3">Price: ${plant.price}</p>
      </div>
    </div>
  );
};



"use client";
import PlantCard from "../PlantCard/PlantCard";
import Popup from "../Popup/Popup";
import React, { useState } from "react";
import { plants } from "@/Data/data";
import { Plants } from "@/app/Interfaces/Plants";

export default function ShopSection() {
  const [selectedPlant, setSelectedPlant] = useState <Plants | null> (null);

  return (
    <>
      <section className="p-8 shop w-full max-w-screen mx-auto">
        <h3 className="text-center mb-12 text-4xl tracking-wider">Our <span className="italic">Shop</span></h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {plants.map((plant) => (
            <div key={plant.id} onClick={() => setSelectedPlant(plant)}>
              <PlantCard plant={plant} />
            </div>
          ))}
        </div>
      </section>

     
      {selectedPlant && (
        <Popup plant={selectedPlant} onClose={() => setSelectedPlant(null)} />
      )}
    </>
  );
};



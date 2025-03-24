"use client";
import React, { JSX } from "react";
import { BsBox } from "react-icons/bs";
import { CgShapeRhombus } from "react-icons/cg";
import { GiWateringCan } from "react-icons/gi";
import { PiPlant, PiPottedPlantBold } from "react-icons/pi";

interface Step {
  icon: JSX.Element;
  title: string;
}


interface ImageData {
  src: string;
  alt: string;
}

export default function AboutSection() {
  
  const images: ImageData[] = [
    { src: "/assets/about-2.jpg", alt: "Green Plants" },
    { src: "/assets/about-3.jpg", alt: "Beautiful Houseplants" },
    { src: "/assets/about-4.jpg", alt: "Indoor Garden" }
  ];

  
  const steps: Step[] = [
    { icon: <PiPlant />, title: "Pick your plant" },
    { icon: <PiPottedPlantBold />, title: "Choose a pot color" },
    { icon: <BsBox />, title: "Have it shipped" },
    { icon: <GiWateringCan />, title: "Watch it grow" }
  ];

  return (
    <>
   
      <section className="py-12">
        <h2 className="text-center text-xl lg:text-4xl">About Us</h2>
        <div className="mt-2 text-center max-w-4xl mx-auto">
          <p className="text-gray-400 font-bold tracking-widest mb-2">Verdant Haven photosynthesis STORIES</p>
          <h3 className="text-xl lg:text-5xl line-clamp-3 leading-10 lg:leading-16 mb-2"> We connect buyers and sellers with suitable, eco-friendly products</h3>
          <div className="text-2xl flex justify-center icon">
          <CgShapeRhombus/>
          </div>
          <p className="mt-3 text-gray-600">
            Nothing adds more beauty and comfort to our homes and offices than the lush flowers and foliage of indoor plants. 
            Bedrooms, bathrooms, kitchens, cubicles… There really isn’t a space a houseplant can’t enliven. Bringing plants 
            into your home is aesthetically pleasing and – amazingly – plants can offer strong health benefits as well!
          </p>
        </div>
      </section>

    
      <section className="p-12">
       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <img 
              key={index} 
              src={image.src} 
              className="w-full h-auto hover:translate-x-1.5 transition-all duration-500 rounded-lg" 
              alt={image.alt}
              loading={index === 0 ? "eager" : "lazy"} 
            />
          ))}
        </div>
      </section>

      
      <section className="bg-[#f9f6ef] py-24">
      <h3 className="text-center text-3xl tracking-wider mb-10">How it <span className="italic capitalize">works</span></h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center gap-4 group mb-10 lg:mb-0  w-full py-6 rounded-[5px]">
              <div className="text-6xl  p-2 group-hover:-translate-y-2 transition-all duration-500 text-[#224229]">{step.icon}</div>
              <h6 className="text-2xl text-[#224229] mt-2">{step.title}</h6>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};



import Image from "next/image";
import PlantCard from "./_Components/PlantCard/PlantCard";
import Testimonial from "./_Components/Testimonial/Testimonial";
import { JSX } from "react";
import { FaHeadset } from "react-icons/fa";
import { FaArrowRotateLeft } from "react-icons/fa6";
import { LuBox } from "react-icons/lu";
import { RiSecurePaymentFill } from "react-icons/ri";
import { TbPlant2, TbShield, TbTruckDelivery } from "react-icons/tb";
import { plants } from "@/Data/data";

interface Feature {
  icon: JSX.Element;
  title: string;
  desc: string;
}

interface Benefit {
  icon: JSX.Element;
  title: string;
  desc: string;
}

export default function Home() {
  const features: Feature[] = [
    { icon: <LuBox className="text-5xl text-[#a4a9a9] hover:translate-x-1.5 transition-all duration-500" />, title: "Free delivery", desc: "For all orders above $45" },
    { icon: <RiSecurePaymentFill className="text-5xl text-[#a4a9a9] hover:translate-x-1.5 transition-all duration-500" />, title: "Secure payments", desc: "Confidence on all your devices" },
    { icon: <FaHeadset className="text-5xl text-[#a4a9a9] hover:translate-x-1.5 transition-all duration-500" />, title: "Top-notch support", desc: "sayhello@flacio.com" },
    { icon: <FaArrowRotateLeft className="text-5xl text-[#a4a9a9] hover:translate-x-1.5 transition-all duration-500" />, title: "180 Days Return", desc: "Return within 180 days" },
  ];

  const benefits: Benefit[] = [
    { icon: <TbShield />, title: "Unbeatable quality", desc: "Greater productivity and relaxation" },
    { icon: <TbTruckDelivery />, title: "Delivery to your door", desc: "Better mental wellbeing and happiness" },
    { icon: <TbPlant2 />, title: "Bring nature into your life", desc: "Greater productivity and relaxation" },
  ];

  return (
    <>
      <main>
      
        <section className="bg-[#F9F4EF] px-10 py-20 grid grid-cols-1 lg:grid-cols-2 gap-4">
        
          <div className="relative mx-auto order-1 lg:order-2">
          <img 
            src="/img-4.png" 
            width="700" 
            height="700" 
            className="w-full lg:w-[100%] max-w-[700px] h-auto object-cover" 
            alt="Beautiful indoor plants" 
            loading="lazy" 
          />

          <img 
            src="/ellipse-2.png" 
            width="600" 
            height="600" 
            className="hidden lg:block absolute top-40 lg:w-[90%] xl:w-[100%] max-w-[600px] h-auto rotate-2 lg:left-6 xl:left-8 object-cover" 
            alt="Decorative ellipse" 
            loading="lazy" 
          />

          </div>

         
          <div className="flex flex-col gap-6 mt-10 order-2 lg:order-none">
            <h2 className="text-4xl italic">Decorate your home with plants</h2>
            <p className="text-[#828787] max-w-[90%] leading-7">
              Praesent egestas tristique nibh. Sed mollis, eros et ultrices tempus,
              mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Fusce
              convallis metus id felis luctus adipiscing. Integer tincidunt. Etiam
              imperdiet imperdiet orci.
            </p>
            <ul className="mt-4 flex flex-col gap-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex gap-4 items-center">
                  <div className="bg-[#224229] w-12 h-12 md:w-16 md:h-16 rounded-full flex justify-center items-center text-white text-3xl">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold lg:text-xl mb-1">{benefit.title}</h3>
                    <p className="text-sm text-[#6f7272] tracking-wider">{benefit.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

       
        <section className="p-8 shop w-full max-w-screen mx-auto">
          <h3 className="text-center mb-12 text-4xl tracking-wider">Best Seller</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {plants.slice(0, 8).map((plant) => (
              <PlantCard key={plant.id} plant={plant} />
            ))}
          </div>
        </section>

      
        <section className="testimonial">
          <Testimonial />
        </section>

       
        <section className="py-10 text-center border-b border-b-gray-300">
          <h2 className="capitalize text-4xl mb-4  italic">Bring life in</h2>
          <p className="text-[#828787]">Our community has a thing for plant styling. Get inspired.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-12 pb-4 px-9">
            {["ig-1.jpg", "ig-2.jpg", "ig-3.jpg", "ig-4.jpg"].map((img, index) => (
              <Image 
                key={index} 
                src={`/assets/${img}`} 
                width={400} 
                height={400} 
                className="w-full h-[400px] object-cover hover:scale-[1.03] transition-all duration-500" 
                alt={`Inspiration ${index + 1}`} 
              />
            ))}
          </div>
        </section>

        
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-center items-center p-10">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-4 items-center">
              <div className="">{feature.icon}</div>
              <div>
                <h3 className="text-2xl">{feature.title}</h3>
                <p className="text-[#828787]">{feature.desc}</p>
              </div>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}

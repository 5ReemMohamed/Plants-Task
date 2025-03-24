"use client";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { IoStar } from "react-icons/io5";
import { Testimonials } from "@/app/Interfaces/Testimonial";

export default function Testimonial() {
  const testimonials: Testimonials[] = [
    {
      id: 1,
      image: "assets/tesm-1.jpg",
      review:
        "Very happy with Flacio; plants arrived in excellent condition, were healthy looking with lots of new growth, and are thriving!",
      name: "Ann Smith",
    },
    {
      id: 2,
      image: "assets/tesm-2.jpg",
      review:
        "Amazing service and fast delivery. The plants are fresh, and the packaging was excellent.",
      name: "Emma Watson",
    },
    {
      id: 3,
      image: "assets/tesm-3.jpg",
      review: "Love the variety of plants available! Will definitely order again.",
      name: "Sara Colinton",
    },
    {
      id: 4,
      image: "assets/tes-4.jpg",
      review: "Green thumb, black thumb—doesn't matter, thanks to Modern Sprout!",
      name: "Sherry Jamie",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <section className="py-12 flex flex-col justify-center items-center">
      <div className="w-full max-w-5xl px-4">
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="px-4">
              <div className="p-6 rounded-lg flex flex-col items-center text-center">
               
                <div className="text-yellow-500 flex gap-1" aria-hidden="true">
                  {Array.from({ length: 5 }, (_, index) => (
                    <IoStar key={index} />
                  ))}
                </div>

               
                <p className="mt-3 text-gray-700 text-lg lg:text-2xl max-w-[90%] lg:max-w-[75%]">
                  {testimonial.review}
                </p>

                
                <img
                  src={testimonial.image}
                  loading="lazy"
                  className="rounded-full mt-4 w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] object-cover"
                  alt={`Photo of ${testimonial.name}`}
                />

               
                <p className="mt-2 font-semibold text-gray-900">{testimonial.name}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

import Form from "../_Components/Form/Form";
import React from "react";

export default function ContactUs() {
  return (
    <section className="py-12 px-2">
      <h4 className="text-center text-3xl font-semibold mb-10">Contact Us</h4>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
       
        <div className="space-y-6 px-5">
          <h4 className="text-3xl font-semibold text-green-700 tracking-wider">Contact <span className="italic">Details</span></h4>

          <div>
            <h5 className="text-lg font-medium"> Address</h5>
            <p className="text-gray-600">7591 Indian Spring Street, Ames, IA 36311</p>
          </div>

          <div>
            <h5 className="text-lg font-medium"> Phone</h5>
            <p className="text-gray-600">330-239-0506</p>
          </div>

          <div>
            <h5 className="text-lg font-medium"> Email</h5>
            <p className="text-gray-600">support@Verdant Haven.com</p>
          </div>

          <div>
            <h5 className="text-lg font-medium"> Opening Time</h5>
            <p className="text-gray-600">8:00 AM – 10:00 PM, Sunday Closed</p>
          </div>
        </div>

        <div className="">
          <iframe
            title="Google Maps Location"
            className="w-full h-full rounded-lg shadow-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434508434!2d-122.41941568468172!3d37.774929279759695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5f3f38b9%3A0x5f6c8bde71f16e32!2sAmes%2C%20IA!5e0!3m2!1sen!2sus!4v1634163078905!5m2!1sen!2sus"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <div className="py-24 mx-aut">
        <Form />
      </div>
    </section>
  );
};


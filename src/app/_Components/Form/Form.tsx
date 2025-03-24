"use client";
import * as Yup from "yup";
import React from "react";
import { useFormik } from "formik";
import { Toaster, toast } from "react-hot-toast";

interface FormValues {
  name: string;
  email: string;
  message: string;
}

export default function Form() {
  const formik = useFormik<FormValues>({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "Name must be at least 3 characters")
        .required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      message: Yup.string()
        .min(10, "Message must be at least 10 characters")
        .required("Message is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log("Form submitted:", values);
      toast.success("Message Sent Successfully!");
      resetForm();
    },
  });

  return (
    <>
     
      <Toaster position="top-center" reverseOrder={false} />

      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col justify-center items-center"
      >
       
        <div className="mb-8 text-center">
          <h3 className="text-3xl tracking-wide mb-2">Send Us Your <span className="italic">Questions!</span></h3>
          <p>We’ll get back to you within two days.</p>
        </div>

        
        <div className="flex flex-col gap-5 w-full max-w-2xl">
        
          <div className="flex flex-col md:flex-row gap-5">
            
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="name" className="font-medium">Full Name:</label>
              <input
                type="text"
                id="name"
                className={`border p-2 w-full rounded ${
                  formik.touched.name && formik.errors.name ? "border-red-500" : "border-gray-300"
                }`}
                {...formik.getFieldProps("name")}
              />
              {formik.touched.name && formik.errors.name && (
                <p className="text-red-500 text-sm">{formik.errors.name}</p>
              )}
            </div>

            
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="email" className="font-medium">Full Email:</label>
              <input
                type="email"
                id="email"
                className={`border p-2 w-full rounded ${
                  formik.touched.email && formik.errors.email ? "border-red-500" : "border-gray-300"
                }`}
                {...formik.getFieldProps("email")}
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500 text-sm">{formik.errors.email}</p>
              )}
            </div>
          </div>

         
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="font-medium">Message:</label>
            <textarea
              id="message"
              className={`border p-2 h-40 w-full rounded ${
                formik.touched.message && formik.errors.message ? "border-red-500" : "border-gray-300"
              }`}
              {...formik.getFieldProps("message")}
            />
            {formik.touched.message && formik.errors.message && (
              <p className="text-red-500 text-sm">{formik.errors.message}</p>
            )}
          </div>

         
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={formik.isSubmitting}
              className={`py-3 px-16 rounded-[5px] tracking-wider font-bold text-white cursor-pointer
                ${formik.isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-[#224229]"}`}
            >
              {formik.isSubmitting ? "Sending..." : "Send"}
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

import React, { useEffect, useState } from "react";
import { product } from "../Component/array";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Appointment = () => {
  // const [newProduct, setNewProduct] = useState([]);
  const [bestSeller, setBestSeller] = useState([]);

  // const productCopy = product.slice(0, 8);
  // const sortProduct = productCopy.sort((a, b) => a.price - b.price);

  useEffect(() => {
    const bestSellerProduct = product.filter((item) => item.bestSeller);
    setBestSeller(bestSellerProduct.slice(10, 19));
  }, []);

  useGSAP(() => {
    gsap.to('.stager-box', {
      y: 150,
      repeat: 1,
      yoyo: true,
      stagger: 0.5,
    });
  }, []);

  return (
    <div id="appointment" className="bg-slate-200 h-screen py-4">
      <h1 className="text-2xl font-bold pt-4 text-center">Appointment</h1>
      {bestSeller.map((item, index) => {
        if (item.bestSeller === "true") {
          return (
            <div
              key={index}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap 4"
            >
              <p className="text-lg text-gray-600">{item.name}</p>
              <p className="text-md text-gray-600 font-semibold">
                ${item.price}
              </p>
            </div>
          );
        } else {
          return null;
        }
      })}
      <div className="flex gap-2">
        <div className="h-30 w-20 bg-red-300 rounded-xl mt-8 mx-4 stager-box"></div>
        <div className="h-30 w-20 bg-red-300 rounded-xl mt-8 mx-4 stager-box"></div>
        <div className="h-30 w-20 bg-red-300 rounded-xl mt-8 mx-4 stager-box"></div>
        <div className="h-30 w-20 bg-red-300 rounded-xl mt-8 mx-4 stager-box"></div>
        <div className="h-30 w-20 bg-red-300 rounded-xl mt-8 mx-4 stager-box"></div>
        <div className="h-30 w-20 bg-red-300 rounded-xl mt-8 mx-4 stager-box"></div>
        <div className="h-30 w-20 bg-red-300 rounded-xl mt-8 mx-4 stager-box"></div>
        <div className="h-30 w-20 bg-red-300 rounded-xl mt-8 mx-4 stager-box"></div>
        <div className="h-30 w-20 bg-red-300 rounded-xl mt-8 mx-4 stager-box"></div>
      </div>
    </div>
  );
};
export default Appointment;

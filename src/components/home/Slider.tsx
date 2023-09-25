"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Button from "../utils/Button";
const data = [
  {
    id: 1,
    title: "SIZZLING SUMMER DELIGHT: A BBQ EXTRAVAGANZA",
    image: "/slider/slide-1.jpg",
  },
  {
    id: 2,
    title: "IGNITING FLAVORS: A JOURNEY THROUGH BARBECUE BLISS",
    image: "/slider/slide-2.png",
  },
  {
    id: 3,
    title: "GRILLMASTER'S CRAFT: WHERE PASSION MEETS FLAVOR",
    image: "/slider/slide-3.jpg",
  },
  {
    id: 4,
    title: "SAVORY MEETS SMOKE: A SYMPHONY OF BBQ FLAVORS",
    image: "/slider/slide-4.png",
  },
];
const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
      4000
    );
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row border-b-2 border-b-main">
      <div className="h-1/2 flex items-center justify-center flex-col gap-8 text-main font-bold lg:h-full lg:w-1/2">
        <h1 className="sm:text-xl md:text-5xl xl:text-6xl text-center uppercase p-4 md:p-10">
          {data[currentSlide].title}
        </h1>
        <Button title="Order Now" />
      </div>
      <div className="w-full h-1/2 relative lg:h-full lg:w-1/2">
        <Image
          src={data[currentSlide].image}
          alt={data[currentSlide].title}
          title={data[currentSlide].title}
          className="object-cover w-full h-full"
          width={1000}
          height={1000}
          priority={true}
        />
      </div>
    </div>
  );
};

export default Slider;

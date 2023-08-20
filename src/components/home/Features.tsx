"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { use } from "react";

import "swiper/css";
import { ProductType } from "@/types/types";
import Link from "next/link";

async function fetchData() {
  const res = await fetch("http://localhost:3000/api/products", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed !");
  }
  return res.json();
}

const dataPromise = fetchData();

const Features = () => {
  const featuredProducts: ProductType[] = use(dataPromise);
  const [charLimit, setCharLimit] = useState(120);
  return (
    <div className="container mx-auto">
      <Swiper
        spaceBetween={50}
        slidesPerView={2}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {featuredProducts.map((item) => (
          <SwiperSlide key={item.id}>
            <Link
              href={"/product/" + item.id}
              className="flex flex-col items-center justify-center mt-20 cursor-pointer mx-5 md:mx-0"
            >
              {item.img && (
                <Image
                  src={item.img}
                  alt=""
                  title=""
                  width={500}
                  height={500}
                  className="w-full md:w-1/2 object-cover hover:scale-105 duration-500 rounded-full p-5 bg-main/5 hover:shadow-xl hover:shadow-main/5"
                />
              )}
              <div className="text-center mt-5 mx-5">
                <h1 className="text-sm md:text-2xl text-main font-bold">
                  {item.title}
                </h1>
                <p className="hidden md:flex">
                  {item.desc ? item.desc.slice(0, charLimit) : ""}...
                </p>
                <div className="mt-5">
                  <button className="bg-main text-white md:text-xl text-sm py-2 px-4 md:py-4 md:px-8 hover:bg-amber-500 hover:text-main hover:scale-105 duration-500">
                    Details
                  </button>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Features;

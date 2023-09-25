import dynamic from "next/dynamic";
import Image from "next/image";
import React from "react";
import Button from "../utils/Button";
const CountDown = dynamic(() => import("../utils/CountDown"), { ssr: false });

const Offer = () => {
  return (
    <div className="bg-main h-screen flex flex-col md:flex-row md:justify-between md:bg-[url('/offerBg.png')] md:h-[70vh] mt-52">
      <div className="flex-1 flex flex-col justify-center items-center text-center gap-8 p-6">
        <h1 className="text-white text-5xl font-bold xl:text-6xl">BBQ KING</h1>
        <p className="text-white xl:text-xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic
          repudiandae suscipit, ad quibusdam aut
        </p>
        <CountDown />
        <Button title="Order Now" />
      </div>
      <div className="relative flex-1 w-full md:h-full">
        <Image
          src="/offerProduct.png"
          alt=""
          title=""
          width={500}
          height={500}
          className="object-contain w-full h-full"
        />
      </div>
    </div>
  );
};

export default Offer;

import React from "react";
import Image from "next/image";

const Loading = () => {
  return (
    <div className="bg-white absolute top-0 left-0 right-0 bottom-0 z-[9999] flex items-center flex-col justify-center text-center">
      <Image
        src={"/burger.gif"}
        alt="Bbq King"
        title="Bbq King"
        width={100}
        height={100}
      />
      <h1 className="sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-main">
        Loading...
      </h1>
    </div>
  );
};

export default Loading;

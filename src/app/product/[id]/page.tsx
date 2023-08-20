import Price from "@/components/utils/Price";
import { ProductType } from "@/types/types";
import Image from "next/image";
import React from "react";

const getData = async (id: string) => {
  const res = await fetch(`http://localhost:3000/api/products/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed!");
  }
  return res.json();
};

const SingleProductPage = async ({ params }: { params: { id: string } }) => {
  const singleProduct: ProductType = await getData(params.id);
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center justify-around mb-10">
        {singleProduct.img && (
          <div className="flex items-center justify-center">
            <Image
              src={singleProduct.img}
              alt={singleProduct.title}
              title={singleProduct.title}
              width={500}
              height={500}
              className="cursor-pointer hover:scale-105 duration-500 w-1/2 lg:w-full h-full"
            />
          </div>
        )}
        <div className="text-center">
          <h1 className="uppercase font-bold tracking-wide text-base lg:text-6xl mb-2">
            {singleProduct.title}
          </h1>
          <p>{singleProduct.desc}</p>
          <Price price={singleProduct.price} id={singleProduct.id} />
        </div>
      </div>
    </>
  );
};

export default SingleProductPage;

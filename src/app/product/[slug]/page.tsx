import Price from "@/components/utils/Price";
import { ProductType } from "@/types/types";
import Image from "next/image";
import React from "react";

const getData = async (slug: string) => {
  const res = await fetch(`http://localhost:3000/api/products/${slug}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed!");
  }
  return res.json();
};

const SingleProductPage = async ({ params }: { params: { slug: string } }) => {
  const singleProduct: ProductType = await getData(params.slug);
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center justify-around mb-10 h-screen">
        {singleProduct.img && (
          <div className="flex items-center justify-center">
            <Image
              src={singleProduct.img}
              alt={singleProduct.title}
              title={singleProduct.title}
              width={500}
              height={500}
              className="cursor-pointer hover:scale-90 duration-500 w-full h-full"
            />
          </div>
        )}
        <div className="text-center">
          <h1 className="uppercase font-bold tracking-wide text-base lg:text-6xl mb-2">
            {singleProduct.title}
          </h1>
          <p>{singleProduct.desc}</p>
          <Price product={singleProduct} />
        </div>
      </div>
    </>
  );
};

export default SingleProductPage;

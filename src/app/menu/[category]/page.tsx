import { ProductType } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LiaCartPlusSolid } from "react-icons/lia";

type Props = {
  params: { category: string };
};

const getData = async (category: string) => {
  const res = await fetch(
    `http://localhost:3000/api/products?cat=${category}`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    throw new Error("Failed!");
  }
  return res.json();
};

const CategoryPage = async ({ params }: Props) => {
  const products: ProductType[] = await getData(params.category);
  return (
    <>
      {products.length > 0 ? (
        <div className="flex flex-wrap text-main">
          {products.map((item) => (
            <Link
              className="w-full h-[60vh] border-r-2 border-b-2 border-main sm:w-1/2 lg:w-1/3 p-4 flex flex-col justify-between group odd:bg-amber-500"
              href={`/product/${item.id}`}
              key={item.id}
            >
              {item.img && (
                <div className="relative h-[80%]">
                  <Image
                    src={item.img}
                    alt={item.title}
                    title={item.title}
                    width={500}
                    height={500}
                    className="object-contain w-full h-full"
                  />
                </div>
              )}
              <div className="flex items-center justify-between font-bold">
                <h1 className="text-lg md:text-2xl uppercase p-2">
                  {item.title}
                </h1>
                <h2 className="group-hover:hidden text-xl">${item.price}</h2>
                <button className="hidden group-hover:flex uppercase bg-main text-amber-500 p-2 rounded-full items-center gap-2">
                  Add to cart <LiaCartPlusSolid size={30} />
                </button>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="w-full h-screen flex items-center justify-center">
          <h1 className="text-4xl">No products found {":("}</h1>
        </div>
      )}
    </>
  );
};

export default CategoryPage;

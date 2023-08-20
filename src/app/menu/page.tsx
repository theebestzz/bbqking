import { MenuType } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed!");
  }
  return res.json();
};

const MenuPage = async () => {
  const menu: MenuType = await getData();
  return (
    <div className="flex flex-wrap text-main">
      {menu.map((category) => (
        <Link
          className="w-full h-[60vh] border-r-2 border-b-2 border-main sm:w-1/2 lg:w-1/3 p-4 flex flex-col justify-between group odd:bg-amber-500"
          href={`/menu/${category.slug}`}
          key={category.id}
        >
          {category.img && (
            <div className="relative h-[80%]">
              <Image
                src={category.img}
                alt={category.title}
                title={category.title}
                width={500}
                height={500}
                className="object-contain w-full h-full hover:scale-105 duration-500"
              />
            </div>
          )}
          <div className="flex items-center justify-between font-bold">
            <h1 className="text-lg md:text-2xl uppercase p-2">
              {category.title}
            </h1>
            <button className="flex uppercase bg-main text-amber-500 px-5 py-2 rounded-full items-center gap-2">
              Details
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuPage;

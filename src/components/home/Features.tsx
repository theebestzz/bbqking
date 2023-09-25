"use client";

import React, { useState } from "react";
import Image from "next/image";
import { use } from "react";

import { ProductType } from "@/types/types";
import Link from "next/link";
import { LiaCartPlusSolid } from "react-icons/lia";
import Button from "../utils/Button";

async function fetchData() {
  const res = await fetch("http://localhost:3000/api/products", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error();
  }
  return res.json();
}

const dataPromise = fetchData();

const Features = () => {
  const featuredProducts: ProductType[] = use(dataPromise);
  const [charLimit, setCharLimit] = useState(120);
  return (
    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 place-content-center place-items-center">
      {featuredProducts.map((product) => (
        <div key={product.id} className="mx-5">
          <Link href={"/product/" + product.slug}>
            <Image
              src={product.img || "/placeholder.png"}
              alt={product.title}
              title={product.title}
              width={1000}
              height={1000}
              className="w-full h-full"
            />
            <div className="flex flex-col items-center justify-center lg:items-start">
              <h1 className="font-bold lg:text-4xl" title={product.title}>
                {product.title}
              </h1>
              <p title={product.desc}>
                {product.desc ? product.desc.slice(0, charLimit) : ""}...
              </p>
              <span title={product.price.toString()}>${product.price}</span>
            </div>
          </Link>
          <div className="flex flex-col items-center justify-center lg:items-start mt-5">
            <Button title="Add to cart" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Features;

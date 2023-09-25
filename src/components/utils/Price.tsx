"use client";

import { ProductType } from "@/types/types";
import React, { useEffect, useState } from "react";
import { AiFillCaretRight } from "react-icons/ai";
import { LiaCartPlusSolid } from "react-icons/lia";

type Props = {
  price: number;
  slug: string;
  options?: { title: string; additionalPrice: number }[];
};

const Price = ({ product }: { product: ProductType }) => {
  const [total, setTotal] = useState(product.price);
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (product.options?.length) {
      setTotal(
        quantity * product.price + product.options[selected].additionalPrice
      );
    }
  }, [quantity, selected, product]);

  return (
    <div className="flex flex-col gap-4 mt-5">
      <h2 className="text-2xl font-bold">${total}</h2>
      <div className="flex items-center justify-center md:flex-row gap-4">
        {product.options?.length &&
          product.options.map((option, index) => (
            <button
              key={option.title}
              className="p-2 rounded-full uppercase"
              style={{
                background: selected === index ? "rgb(245 158 11)" : "black",
                color: selected === index ? "black" : "white",
              }}
              onClick={() => setSelected(index)}
            >
              {option.title}
            </button>
          ))}
      </div>
      <div className="flex flex-col gap-5 items-center mt-2">
        <div className="flex items-center">
          <button
            onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
          >
            <AiFillCaretRight className="rotate-180 w-5 h-5 lg:w-10 lg:h-10" />
          </button>
          <span className="font-bold text-lg lg:text-2xl">{quantity}</span>
          <button
            onClick={() => setQuantity((prev) => (prev < 9 ? prev + 1 : 9))}
          >
            <AiFillCaretRight className="w-5 h-5 lg:w-10 lg:h-10" />
          </button>
        </div>
        <div>
          <button className="flex uppercase bg-main text-white text-sm px-2 p-1 lg:p-2 rounded-full items-center gap-2 hover:scale-105 duration-500">
            Add to cart <LiaCartPlusSolid size={30} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Price;

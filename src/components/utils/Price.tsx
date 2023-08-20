"use client";

import React, { useEffect, useState } from "react";
import { AiFillCaretRight } from "react-icons/ai";
import { LiaCartPlusSolid } from "react-icons/lia";

type Props = {
  price: number;
  id: string;
  options?: { title: string; additionalPrice: number }[];
};

const Price = ({ price, id, options }: Props) => {
  const [total, setTotal] = useState(price);
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    setTotal(
      quantity *
        (options?.length ? price + options[selected].additionalPrice : price)
    );
  }, [quantity, selected, options, price]);

  return (
    <div className="flex flex-col gap-4 mt-5">
      <h2 className="text-2xl font-bold">${total}</h2>
      <div className="flex md:flex-row gap-4">
        {options?.map((option, index) => (
          <button
            key={option.title}
            className="p-2 rounded-full"
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

import React from "react";

type ButtonProps = {
  title: string;
  icon?: React.ReactNode;
};

const Button = ({ title }: ButtonProps) => {
  return (
    <button className="bg-amber-500 text-main md:text-xl text-sm py-2 px-4 md:py-4 md:px-8 hover:bg-amber-500 hover:text-main hover:scale-105 duration-500 shadow-md hover:shadow-2xl hover:shadow-amber-500 shadow-main/50 rounded-full capitalize">
      {title}
    </button>
  );
};

export default Button;

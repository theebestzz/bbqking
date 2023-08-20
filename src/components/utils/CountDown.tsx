"use client";
import React from "react";
import Countdown from "react-countdown";

const CountDown = () => {
  const endingDate = new Date("2023-08-15");
  return (
    <Countdown
      className="font-bold sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl text-amber-500"
      date={endingDate}
    />
  );
};

export default CountDown;

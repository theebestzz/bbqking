import React from "react";
import Link from "next/link";
import {
  RiFacebookBoxFill,
  RiInstagramFill,
  RiTwitterFill,
  RiYoutubeFill,
} from "react-icons/ri";
import Image from "next/image";

const paymentMethods = [
  {
    id: 1,
    name: "Visa",
    image: "/visa.svg",
  },
  {
    id: 2,
    name: "Mastercard",
    image: "/mastercard.svg",
  },
  {
    id: 3,
    name: "Paypal",
    image: "/paypal.svg",
  },
  {
    id: 4,
    name: "Stripe",
    image: "/stripe.svg",
  },
  {
    id: 5,
    name: "Google Pay",
    image: "/google-pay.svg",
  },
  {
    id: 6,
    name: "Apple Pay",
    image: "/apple-pay.svg",
  },
];

const Footer = () => {
  return (
    <>
      <footer className="border-b-4 border-main pt-10 shadow-2xl shadow-main bg-main text-white">
        <div className="mx-auto max-w-[1920px] px-4 md:px-8 2xl:px-16">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
            <div className="pb-10 md:pb-0">
              <h4 className="mb-5 text-sm font-semibold text-heading md:text-base xl:text-lg 2xl:mb-6 3xl:mb-7">
                Social
              </h4>
              <ul className="text-xs lg:text-sm flex flex-col space-y-3 lg:space-y-3.5">
                <li className="flex items-baseline gap-2 hover:text-amber-500 duration-500">
                  <span className="relative top-0.5 lg:top-1 text-sm lg:text-base">
                    <RiInstagramFill />
                  </span>
                  <Link href="/">Instagram</Link>
                </li>
                <li className="flex items-baseline gap-2 hover:text-amber-500 duration-500">
                  <span className="relative top-0.5 lg:top-1 text-sm lg:text-base">
                    <RiTwitterFill />
                  </span>
                  <Link href="/">Twitter</Link>
                </li>
                <li className="flex items-baseline gap-2 hover:text-amber-500 duration-500">
                  <span className="relative top-0.5 lg:top-1 text-sm lg:text-base">
                    <RiFacebookBoxFill />
                  </span>
                  <Link href="/">Facebook</Link>
                </li>
                <li className="flex items-baseline gap-2 hover:text-amber-500 duration-500">
                  <span className="relative top-0.5 lg:top-1 text-sm lg:text-base">
                    <RiYoutubeFill />
                  </span>
                  <Link href="/">Youtube</Link>
                </li>
              </ul>
            </div>
            <div className="pb-10 md:pb-0">
              <h4 className="mb-5 text-sm font-semibold text-heading md:text-base xl:text-lg 2xl:mb-6 3xl:mb-7">
                Contact
              </h4>
              <ul className="text-xs lg:text-sm flex flex-col space-y-3 lg:space-y-3.5">
                <li className="flex items-baseline">
                  <Link
                    className="duration-500 hover:text-amber-500"
                    href="/contact"
                  >
                    Contact Us
                  </Link>
                </li>
                <li className="flex items-baseline">
                  <Link className="duration-500 hover:text-amber-500" href="/">
                    yourexample@email.com
                  </Link>
                </li>
                <li className="flex items-baseline">
                  <Link className="duration-500 hover:text-amber-500" href="/">
                    example@email.com
                  </Link>
                </li>
                <li className="flex items-baseline">
                  <Link className="duration-500 hover:text-amber-500" href="/">
                    Call us: +1 254 568-5479
                  </Link>
                </li>
              </ul>
            </div>
            <div className="pb-10 md:pb-0">
              <h4 className="mb-5 text-sm font-semibold text-heading md:text-base xl:text-lg 2xl:mb-6 3xl:mb-7">
                About
              </h4>
              <ul className="text-xs lg:text-sm flex flex-col space-y-3 lg:space-y-3.5">
                <li className="flex items-baseline">
                  <Link
                    className="duration-500 hover:text-amber-500"
                    href="/contact"
                  >
                    Support Center
                  </Link>
                </li>
                <li className="flex items-baseline">
                  <Link className="duration-500 hover:text-amber-500" href="/">
                    Customer Support
                  </Link>
                </li>
                <li className="flex items-baseline">
                  <Link
                    className="duration-500 hover:text-amber-500"
                    href="/contact"
                  >
                    About Us
                  </Link>
                </li>
                <li className="flex items-baseline">
                  <Link className="duration-500 hover:text-amber-500" href="/">
                    Copyright
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pt-5 pb-16 border-t border-gray-300 sm:pb-20 md:pb-5 sm:mb-0">
          <div className="flex flex-col-reverse md:flex-row text-center md:justify-between mx-auto max-w-[1920px] px-4 md:px-8 2xl:px-16">
            <p className="text-xs lg:text-sm">
              Copyright &nbsp;
              <Link
                className="font-semibold text-gray-700 duration-500 ease-in-out"
                href="/"
              >
                TMK
              </Link>
              &nbsp;
            </p>
            <ul className="flex-wrap items-center justify-center flex mx-auto mb-1 gap-x-4 xs:gap-x-5 lg:gap-x-7 md:mb-0 md:mx-0">
              {paymentMethods.map((method) => (
                <li
                  className="mb-2 transition md:mb-0 hover:opacity-80 duration-500"
                  key={method.id}
                >
                  <Image
                    src={method.image}
                    alt={method.name}
                    title={method.name}
                    height={20}
                    width={50}
                    className="w-auto h-12"
                    priority={true}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

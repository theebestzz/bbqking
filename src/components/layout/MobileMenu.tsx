"use client";

import MenuIcon from "../icons/MenuIcon";
import Link from "next/link";
import BbqVideo from "../utils/BbqVideo";
import CartIcon from "../icons/CartIcon";
import UserIcon from "../icons/UserIcon";
import React, { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { TbChecklist } from "react-icons/tb";
import { MdClose } from "react-icons/md";
import SearchIcon from "../icons/SearchIcon";
import HomeIcon from "../icons/HomeIcon";
import UserLinks from "../utils/UserLinks";

const navigation = [
  { id: 1, name: "Home", href: "/" },
  { id: 2, name: "Menu", href: "/menu" },
  { id: 3, name: "Working Hours", href: "/working-hours" },
  { id: 4, name: "Contact", href: "/contact" },
];

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="flex items-center gap-5">
        <Link
          href={"/cart"}
          className="items-center gap-2 text-2xl hover:scale-110 duration-500 hidden md:flex"
        >
          <CartIcon />
          <span className="text-base font-bold">Cart</span>
        </Link>
        <UserLinks />
        <div>
          <MenuIcon
            onClick={() => setOpen(true)}
            className="rotate-180 cursor-pointer hidden sm:flex hover:scale-110 duration-500"
          />
        </div>
      </div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-main bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto relative w-screen max-w-full">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-in-out duration-500"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in-out duration-500"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="absolute right-0 top-0 -ml-8 flex p-16 z-10">
                        <button
                          type="button"
                          className="relative rounded-full text-white hover:scale-105 duration-500 outline-none"
                          onClick={() => setOpen(false)}
                        >
                          <span className="absolute -inset-2.5" />
                          <span className="sr-only">Close panel</span>
                          <MdClose className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </Transition.Child>
                    <video
                      autoPlay
                      muted
                      loop
                      className="absolute top-0 left-0 right-0 bottom-0 w-full h-screen object-cover"
                    >
                      <BbqVideo />
                    </video>
                    <div
                      className="absolute flex flex-col items-center justify-center w-full h-full bg-main shadow-2xl shadow-main opacity-80"
                      onClick={() => setOpen(false)}
                    >
                      <ul className="text-xl xl:text-4xl text-amber-500">
                        {navigation.map((item) => (
                          <li key={item.id}>
                            <Link
                              href={item.href}
                              className="flex items-center justify-center gap-2 p-5 hover:scale-110 duration-500"
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                        <div className="absolute bottom-5 left-0 right-0 flex items-center justify-center w-full">
                          <div className="mx-10">
                            <Link
                              href={"/orders"}
                              className="flex items-center gap-2 hover:scale-110 duration-500"
                            >
                              <TbChecklist />
                              Orders
                            </Link>
                          </div>
                        </div>
                      </ul>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      <div className="sm:hidden fixed z-10 bottom-0 flex items-center justify-between bg-white text-main w-full left-0 right-0 h-12 p-5  opacity-90">
        <button
          className="flex flex-col items-center justify-center flex-shrink-0 outline-none focus:outline-none"
          onClick={() => setOpen(true)}
        >
          <MenuIcon />
        </button>
        <button className="flex items-center justify-center flex-shrink-0 h-auto relative focus:outline-none">
          <SearchIcon />
        </button>
        <Link href="/">
          <HomeIcon />
        </Link>
        <Link
          className="relative flex items-center justify-center flex-shrink-0 h-auto transform focus:outline-none"
          href="/cart"
        >
          <CartIcon />
          <span className="cart-counter-badge flex items-center justify-center bg-white text-main absolute -top-2.5 xl:-top-3 rounded-full ltr:-right-2.5 ltr:xl:-right-3 rtl:-left-2.5 rtl:xl:-left-3 font-bold">
            3
          </span>
        </Link>
        <Link href="/login">
          <UserIcon />
        </Link>
      </div>
    </>
  );
};

export default MobileMenu;

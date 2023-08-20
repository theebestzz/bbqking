"use client";

import Link from "next/link";
import BbqVideo from "../utils/BbqVideo";
import CartIcon from "../icons/CartIcon";
import UserIcon from "../icons/UserIcon";
import React, { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { TbChecklist } from "react-icons/tb";
import { MdClose } from "react-icons/md";

const navigation = [
  { id: 1, name: "Home", href: "/" },
  { id: 2, name: "Menu", href: "/menu" },
  { id: 3, name: "Working Hours", href: "/working-hours" },
  { id: 4, name: "Contact", href: "/contact" },
];

const Menu = () => {
  const [open, setOpen] = useState(false);
  const auth = false;
  return (
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
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
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
                    <ul className="sm:text-base md:text-lg lg:text-3xl xl:text-4xl text-amber-500 w-full">
                      {navigation.map((item) => (
                        <li key={item.id}>
                          <Link
                            href={item.href}
                            className="flex items-center gap-2 p-5 hover:bg-amber-500 hover:text-main duration-500"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                      <div className="absolute bottom-5 left-0 right-0 flex items-center justify-center w-full">
                        <div className="mx-10 sm:text-base md:text-lg lg:text-3xl xl:text-4xl">
                          <Link
                            href={"/cart"}
                            className="flex items-center gap-2 hover:scale-105 duration-500"
                          >
                            <CartIcon />
                            Cart
                          </Link>
                        </div>
                        {auth ? (
                          <div>
                            <Link
                              href={"/login"}
                              className="flex items-center gap-2 hover:scale-105 duration-500"
                            >
                              <UserIcon />
                              Account
                            </Link>
                          </div>
                        ) : (
                          <div>
                            <Link
                              href={"/orders"}
                              className="flex items-center gap-2 hover:scale-105 duration-500"
                            >
                              <TbChecklist />
                              Orders
                            </Link>
                          </div>
                        )}
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
  );
};

export default Menu;

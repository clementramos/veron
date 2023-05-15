import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

const navigation = [
  { name: "ONGLET 1", href: "/", current: false },
  { name: "ONGLET 2", href: "/", current: false },
  { name: "ONGLET 3", href: "/", current: false },
  { name: "ONGLET 4", href: "/", current: false },
  {
    /*{ name: 'Blog', href: '/blog', current: false},*/
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <>
      <Disclosure as="nav" className="w-full h-fit bg-white p-5 ">
        {({ open }) => (
          <>
            <div className="mx-auto px-2 pb-5 sm:px-6 lg:items-center shadow-sm">
              <div className="relative flex h-fit items-center justify-between">
                <div className="absolute inset-y-0 right-0 flex items-center laptop:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-end justify-end rounded-md p-2 text-009999 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-009999">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        />
                      </svg>
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-start ">
                  <div className="flex flex-shrink-0 items-center pr-10">
                    <Image
                      className="mr-2"
                      src="/Flyer Un&Demi.png"
                      width={18}
                      height={18}
                      alt="logo"
                    />
                    <p className="text-2xl font-bold text-009999">UN&DEMI</p>
                  </div>
                  <div className="flex flex-1 items-center justify-center">
                    <div className="sm:hidden sm:ml-6 sm:block flex justify-center">
                      <div className="flex space-x-4">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? "bg-white text-009999"
                                : "text-009999 font-thin hover:bg-white hover:text-black",
                              "px-3 py-2 rounded-md text-xl font-medium"
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <button className="bg-009999 border rounded-md p-2 sm:hidden">
                  <Link href="/contact">
                    <p className="text-2xl font-bold text-white">CONTACT</p>
                  </Link>
                </button>
                <div className="absolute inset-y-0 right-0 flex items-center sm:static sm:inset-auto  sm:pr-0"></div>
              </div>
            </div>
            <Disclosure.Panel className="laptop:hidden">
              <div className="space-y-1 px-2 pt-12 right-0 pb-3">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-009999"
                        : "text-009999 hover:bg-white hover:text-black hover:ring-green-500 hover:border-green-500",
                      "block px-3 py-2 rounded-md text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
}

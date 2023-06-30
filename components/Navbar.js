import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Fade, Slide } from "react-awesome-reveal";

const navigation = [
  { name: "EXPERTISES", href: "/expertise", current: false },
  { name: "RESSOURCES", href: "/ressources", current: false },
  { name: "QUI SUIS-JE ?", href: "/qui-suis-je", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <>
      <div className="bg-white z-50">
        <Slide direction="down" triggerOnce>
          <Disclosure
            as="nav"
            className="w-full h-fit bg-white pt-5 px-2 text-center"
          >
            {({ open }) => (
              <>
                <div className="mx-auto px-2 pb-5 sm:px-6 laptop:items-center shadow-sm">
                  <div className="relative flex h-fit items-center justify-between">
                    <div className="absolute inset-y-0 right-0 flex items-center laptopL:hidden laptop:hidden">
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
                      <Link href="/">
                        <div className="flex flex-shrink-0 items-center pr-10">
                          <Image
                            className="mr-2"
                            src="/LOGO FINAL/UN&DEMI Logo.svg"
                            width={200}
                            height={200}
                            alt="logo"
                          />
                          {/* <p className="text-2xl font-bold text-009999 tracking-wide">
                            UN&DEMI
                          </p> */}
                        </div>
                      </Link>

                      <div className="flex flex-1 items-center justify-center tablet:hidden z-50">
                        <div className="sm:hidden sm:ml-6 sm:block flex justify-center z-50">
                          <div className="flex space-x-4">
                            {/* dropdown 1*/}
                            <Menu
                              as="div"
                              className="relative w-auto laptop:w-fit z-50"
                            >
                              <div>
                                <Menu.Button className="flex rounded-full bg-white text-sm mx-auto">
                                  <p className="text-009999 font-thin hover:bg-white hover:text-black px-3 py-2 rounded-md text-xl font-medium">
                                    EXPERTISES
                                  </p>
                                </Menu.Button>
                              </div>
                              <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                              >
                                <Menu.Items className="absolute right-0 z-10 mt-2 w-64 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                                  <Menu.Item>
                                    {({ active }) => (
                                      <Link
                                        href="/sensibilisation"
                                        className={classNames(
                                          active ? "bg-gray-100" : "",
                                          "block px-2 py-2"
                                        )}
                                      >
                                        <p className="text-009999">
                                          Fresque du climat{" "}
                                        </p>
                                      </Link>
                                    )}
                                  </Menu.Item>
                                  {/* <Menu.Item>
                                    {({ active }) => (
                                      <Link
                                        href="/sensibilisation"
                                        className={classNames(
                                          active ? "bg-gray-100" : "",
                                          "block px-2 py-2"
                                        )}
                                      >
                                        <p className="text-009999">
                                          Formations{" "}
                                        </p>
                                      </Link>
                                    )}
                                  </Menu.Item> */}
                                  <Menu.Item>
                                    {({ active }) => (
                                      <Link
                                        href="/bilan-carbone"
                                        className={classNames(
                                          active ? "bg-gray-100" : "",
                                          "block px-2 py-2"
                                        )}
                                      >
                                        <p className="text-009999">
                                          Bilan Carbone®{" "}
                                        </p>
                                      </Link>
                                    )}
                                  </Menu.Item>
                                  <Menu.Item>
                                    {({ active }) => (
                                      <Link
                                        href="/cycle-de-vie"
                                        className={classNames(
                                          active ? "bg-gray-100" : "",
                                          "block px-2 py-2"
                                        )}
                                      >
                                        <p className="text-009999">
                                          Analyse de cycle de vie{" "}
                                        </p>
                                      </Link>
                                    )}
                                  </Menu.Item>
                                  <Menu.Item>
                                    {({ active }) => (
                                      <Link
                                        href="/strategies"
                                        className={classNames(
                                          active ? "bg-gray-100" : "",
                                          "block px-2 py-2"
                                        )}
                                      >
                                        <p className="text-009999">
                                          Les stratégies{" "}
                                        </p>
                                      </Link>
                                    )}
                                  </Menu.Item>
                                  {/* <Menu.Item>
                                    {({ active }) => (
                                      <Link
                                        href="/strategie-neutralite-carbone"
                                        className={classNames(
                                          active ? "bg-gray-100" : "",
                                          "block px-2 py-2"
                                        )}
                                      >
                                        <p className="text-009999">
                                          Stratégie neutralité carbone{" "}
                                        </p>
                                      </Link>
                                    )}
                                  </Menu.Item>
                                  <Menu.Item>
                                    {({ active }) => (
                                      <Link
                                        href="/strategie-resilience"
                                        className={classNames(
                                          active ? "bg-gray-100" : "",
                                          "block px-2 py-2"
                                        )}
                                      >
                                        <p className="text-009999">
                                          Stratégie résilience{" "}
                                        </p>
                                      </Link>
                                    )}
                                  </Menu.Item> */}
                                </Menu.Items>
                              </Transition>
                            </Menu>
                            {/* dropdown 2 */}
                            <Menu as="div" className="relative w-auto">
                              <div>
                                <Menu.Button className="flex rounded-full bg-white text-sm  mx-auto">
                                  <p className="text-009999 font-thin hover:bg-white hover:text-black px-3 py-2 rounded-md text-xl font-medium mx-auto">
                                    RESSOURCES
                                  </p>
                                </Menu.Button>
                              </div>
                              <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                              >
                                <Menu.Items className="absolute right-0 z-10 mt-2 w-64 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                  <Menu.Item>
                                    {({ active }) => (
                                      <Link
                                        href="/infographie"
                                        className={classNames(
                                          active ? "bg-gray-100" : "",
                                          "block px-2 py-2"
                                        )}
                                      >
                                        <p className="text-009999">
                                          Les infographies qui percutent
                                        </p>
                                      </Link>
                                    )}
                                  </Menu.Item>
                                  <Menu.Item>
                                    {({ active }) => (
                                      <Link
                                        href="/graphiques"
                                        className={classNames(
                                          active ? "bg-gray-100" : "",
                                          "block px-2 py-2"
                                        )}
                                      >
                                        <p className="text-009999">
                                          Energie climat en graphiques{" "}
                                        </p>
                                      </Link>
                                    )}
                                  </Menu.Item>
                                  <Menu.Item>
                                    {({ active }) => (
                                      <Link
                                        href="/bilan-carbone-francais"
                                        className={classNames(
                                          active ? "bg-gray-100" : "",
                                          "block px-2 py-2"
                                        )}
                                      >
                                        <p className="text-009999">
                                          Le Bilan Carbone du Français moyen
                                        </p>
                                      </Link>
                                    )}
                                  </Menu.Item>{" "}
                                  <Menu.Item>
                                    {({ active }) => (
                                      <Link
                                        href="/kaya"
                                        className={classNames(
                                          active ? "bg-gray-100" : "",
                                          "block px-2 py-2"
                                        )}
                                      >
                                        <p className="text-009999">
                                          L&apos;équation de Kaya
                                        </p>
                                      </Link>
                                    )}
                                  </Menu.Item>
                                </Menu.Items>
                              </Transition>
                            </Menu>

                            <div>
                              <Link href="/qui-suis-je">
                                <p className="text-009999 font-thin hover:bg-white hover:text-black px-3 py-2 rounded-md text-xl font-medium">
                                  QUI SUIS-JE ?
                                </p>
                              </Link>
                            </div>

                            {/* {navigation.map((item) => (
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
                        ))}  */}
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className="bg-009999 border rounded-md p-2 sm:hidden tablet:hidden">
                      <Link href="/contact">
                        <p className="text-2xl font-bold text-white tracking-wide">
                          CONTACT
                        </p>
                      </Link>
                    </button>
                    <div className="absolute inset-y-0 right-0 flex items-center sm:static sm:inset-auto  sm:pr-0"></div>
                  </div>
                </div>
                <Disclosure.Panel className="laptop:hidden">
                  <div className="space-y-1 px-2 pt-2 right-0 pb-3">
                    {/* dropdown 1*/}
                    <Menu as="div" className="relative laptop:w-fit">
                      <div>
                        <Menu.Button className="flex rounded-full bg-white text-sm mx-auto">
                          <p className="text-009999 hover:bg-white hover:text-black px-3 py-2 rounded-md font-medium text-base">
                            EXPERTISE
                          </p>
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-full origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                href="/sensibilisation"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-2 py-2"
                                )}
                              >
                                <p className="text-009999">
                                  Sensibilisation et formation (FDC){" "}
                                </p>
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                href="/bilan-carbone"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-2 py-2"
                                )}
                              >
                                <p className="text-009999">Bilan Carbone® </p>
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                href=""
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-2 py-2"
                                )}
                              >
                                <p className="text-009999">ACV </p>
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                href=""
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-2 py-2"
                                )}
                              >
                                <p className="text-009999">
                                  Stratégie neutralité carbone{" "}
                                </p>
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                href=""
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-2 py-2"
                                )}
                              >
                                <p className="text-009999">
                                  Stratégie résilience{" "}
                                </p>
                              </Link>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                    {/* dropdown 2 */}
                    <Menu as="div" className="relative">
                      <div>
                        <Menu.Button className="flex rounded-full bg-white text-sm  mx-auto">
                          <p className="text-009999 hover:bg-white hover:text-black px-3 py-2 rounded-md font-medium text-base">
                            RESSOURCES
                          </p>
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-full origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                href="/graphiques"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-2 py-2"
                                )}
                              >
                                <p className="text-009999">
                                  Energie climat en 6 graphiques{" "}
                                </p>
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                href="/kaya"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-2 py-2"
                                )}
                              >
                                <p className="text-009999">
                                  L&apos;équation de Kaya
                                </p>
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                href="/kaya"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-2 py-2"
                                )}
                              >
                                <p className="text-009999">
                                  Le Bilan Carbone du Français moyen
                                </p>
                              </Link>
                            )}
                          </Menu.Item>{" "}
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                href="/kaya"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-2 py-2"
                                )}
                              >
                                <p className="text-009999">
                                  Les infographies qui percutent
                                </p>
                              </Link>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                    <Menu as="div" className="relative">
                      <div>
                        <Menu.Button className="flex rounded-full bg-white text-sm mx-auto ">
                          <Link href="/qui-suis-je">
                            <p className="text-009999 hover:bg-white hover:text-black px-3 py-2 rounded-md font-medium text-base">
                              QUI SUIS-JE ?
                            </p>
                          </Link>
                        </Menu.Button>
                      </div>
                    </Menu>
                    {/* {navigation.map((item) => (
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
                ))} */}
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </Slide>
      </div>
    </>
  );
}

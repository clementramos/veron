import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function Footer() {
  return (
    <footer class="p-4 bg-white sm:p-6 ">
      <div class="sm:grid sm:justify-center">
        <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-1">
          {" "}
          <div class="mb-6 sm:mb-0">
              <Image
                className="mx-auto"
                src="/LogoV8.png"
                width={250}
                height={64}
                alt="logo"
              />
          </div>
          <div className="text-right text-2xl mx-auto my-auto">
            <ul class="text-009999 dark:text-gray-400">
              <li class="mb-4">
                <a href="/mention-legales" class="hover:underline">
                  Mention légales
                </a>
              </li>
              <li class="mb-4">
                <Link href="/contact" class="hover:underline">
                  Contact
                </Link>
              </li>
              <li>
                <a href="" class="hover:underline">
                  LISTE 3
                </a>
              </li>
            </ul>
            <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8 laptop:hidden" />
          </div>
        </div>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div class="sm:flex sm:items-center sm:justify-between">
        <span class="text-sm text-gray-500 sm:text-left sm:text-xs dark:text-gray-400">
          © 2023,{" "}
          <a href="https://clementramos.vercel.app/" class="hover:underline">
            Clément Ramos
          </a>
          . All Rights Reserved.
        </span>
        
      </div>
    </footer>
  );
}

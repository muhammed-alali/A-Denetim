import Image from "next/image";
import { NavItem } from "./item";
import Link from "next/link";
import { GoChevronDown } from "react-icons/go";
import React, { useState } from "react";
import { GoChevronUp } from "react-icons/go";
import { title } from "process";
import { CiSearch } from "react-icons/ci";
import BottonSerch from "./Serch-Button";
// import NavResponsiv from "./nav-responsiv";
import Button from "./nav-button/button";

export default function Navbar() {
  return (
    <>
      <nav className="shadow-xl">
        <div className="flex justify-between md:!flex xs:block px-10 my-2 py-[10px] ">
          <div>
            <Link href={"/"}>
              <Image
                className="xs:mx-auto"
                src="/photo/logo.png"
                alt="img"
                width={200}
                height={71}
              ></Image>
            </Link>
          </div>
          <div className="my-auto ">
            <ul className="flex md:!gap-x-10 xs:mt-4 md:!mt-0 xs:gap-x-5 flex-wrap text-sm xs:text-xs lg:!text-sm font-bold ">
              {NavItem.map((ıtem) => {
                return (
                  <>
                    <li className="xs:mb-3 md:!mb-0 " key={ıtem.id}>
                      <Link
                        href={ıtem.href}
                        className="hover:text-[#4A81F9] duration-300"
                      >
                        {ıtem.title}
                      </Link>
                    </li>
                  </>
                );
              })}
            </ul>
          </div>
          {/* <NavResponsiv /> */}
          <BottonSerch />
          <Button />
        </div>
      </nav>
    </>
  );
}

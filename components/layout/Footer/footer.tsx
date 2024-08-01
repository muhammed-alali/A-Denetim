import Image from "next/image";
import React from "react";

import { FooterItem } from "./ıtem";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-[#16171e] relative">
      <div className="container mx-auto px-[15px] flex xs:block md:!flex py-16 max-w-[1200px]">
        <div className=" md:w-[50%]">
          <div>
            <Image
              src={"/photo/footer.png"}
              alt=""
              width={300}
              height={81}
            ></Image>
          </div>
          <p className="text-[16px] font-medium text-[#C0C1C2] mr-5 mt-5">
            Firmamız mevzuat değişiklikleri, muhasebe standartları ve
            uygulamaları konusundaki gelişmeler başta olmak üzere faaliyetimizle
            ilgili konularda gelen talepler doğrultusunda eğitim hizmetleri
            sunmaktadır.{" "}
          </p>
        </div>
        <div className="md:!w-[50%] xs:w-full text-white">
          <h1 className="text-[16px] font-semibold mb-[45px]">CONTACTS</h1>
          {FooterItem.map((ıtem) => {
            return (
              <>
                <div>
                  <div className="flex gap-3 items-center mb-4">
                    <div>
                      <span className="text-SiteColor text-2xl">
                        {ıtem.icon}
                      </span>
                    </div>
                    <div>
                      <h1 className="text-[#C0C1C2] text-[16px] font-normal mb-1">
                        {ıtem.title}
                      </h1>
                      <p className="text-[16px] font-semibold">{ıtem.desc}</p>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <div className="border-t  container mx-auto max-w-[1200px] border-[#2e2f353b]"></div>
      <Link href={"/"}>
        <div className="text-[#C0C1C2] text-[16px]  text-center py-7 text-5 font-bold">
          Copyright © 2021{" "}
          <span className="hover:text-SiteColor duration-300">
            PAFF STUDİOS
          </span>
        </div>
      </Link>
    </footer>
  );
}

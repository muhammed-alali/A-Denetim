import React from "react";
import { itemSection1 } from "./item-section-1";
import Image from "next/image";
import YılıkDenetim from "./yılık-denetim/page";
import YönetimKurulu from "./YönetimKurulu/page";
import DenetimKadromuz from "./DenetimKadromuz/page";

export default function Kurumsal() {
  return (
    <section className="py-[140px]">
      <div className="container mx-auto ">
        <div className="grid grid-cols-2 xs:grid-cols-1 sm:grid-cols-1 lg:!grid-cols-2">
          {itemSection1.map((item) => {
            return (
              <>
                <div className="md:p-4 md:pl-16 mt-[-2rem]">
                  <Image src={item.url} alt="" height="475" width="630"></Image>
                </div>
                <div className="p-4 lg:mt-[-55px]  ">
                  <span className="border border-SiteColor text-SiteColor mt-4  text-[11px] leading-4 bg-[#b2cedb]  rounded-xl font-bold py-[4px] px-[10px] ">
                    {item.fırst}
                  </span>
                  <h1 className="md:!text-[36px] xs:text-[27px] font-bold text-black leading-[1.2] my-5">
                    {item.title}
                  </h1>
                  <div className="font-normal text-[16px]  text-Desc leading-[1.875] md:!w-full xs:w-[271px]">
                    <p className="mb-[20px]">{item.desc1}</p>
                    <p>{item.desc2}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <YılıkDenetim />
      <div className="my-[120px]">
        <YönetimKurulu />
      </div>
      <DenetimKadromuz />
    </section>
  );
}

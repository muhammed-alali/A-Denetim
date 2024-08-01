import React from "react";
import { Hizmetlerİtem } from "./item";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";
export default function Hizmetlerimiz() {
  return (
    <section className="py-[140px]">
      <div className="text-center pb-10">
        <span className="border border-SiteColor text-SiteColor mt-4  text-[11px] leading-4 bg-[#b2cedb]  rounded-xl font-bold py-[4px] px-[10px]">
          SUNDUĞUMUZ HIZMETLERIMIZ
        </span>

        <h1 className="xs:text-[27px] md:!text-[36px] font-bold mb-5 text-Title">
          Sunduğumuz Hizmetlerimiz
        </h1>
      </div>
      <div className="grid grid-cols-2 xs:grid-cols-1 md:!grid-cols-2 container mx-auto">
        {Hizmetlerİtem.map((item) => {
          return (
            <>
              <div className="md:px-[15px] mb-6 group " key={item.id}>
                <div className=" shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]  group-hover:translate-y-[-12px] duration-500">
                  <div className="relative">
                    <Image
                      src={item.url}
                      alt="img"
                      width={870}
                      height={576}
                    />
                  </div>
                  <div className="pt-[30px] px-[30px] pb-[27px] text-center">
                    <h1 className="text-Title text-[24px] font-bold mb-5">
                      {item.title}
                    </h1>
                    <p className="font-normal text-[16px]  text-Desc leading-[1.875]">
                      {item.desc}
                    </p>
                  </div>
                  <div className="border-t-2 border-[1px_solid_rgba(0,_0,_0,_0.15)]">
                  <div className="py-[10px] px-[30px] group-hover:bg-SiteColor group-hover:text-white duration-300 flex justify-between text-[17px] font-semibold  text-SiteColor"><span>{item.button}</span> <span className="text-[23px]"><GoArrowRight />
                  </span></div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </section>
  );
}

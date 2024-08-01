import Image from "next/image";
import React from "react";
import { ADenetimItem } from "./item";
export default function ADenetim() {
  return (
    <>
      <section className="grid grid-cols-12 bg-[url('/photo/download.png')] bg-no-repeat css-position  ">
        <div className="col-span-6 xs:col-span-12 lg:!col-span-6  ">
          <Image
            src={"/photo/image3-home1.png"}
            alt=""
            className="lg:!w-[850px] lg:!h-[742px] xs:w-[300px] xs:h-[268px] md:w-[400px] md:h-[368px] !relative md:ml-[-119px] xs:pb-4 sm:pb-4 lg:!pb-0 md:mr-[-260px]"
            fill
          />
        </div>
        <div className="col-span-6  xs:col-span-12 lg:!col-span-6 mx-[70px]">
          <h2 className="  text-SiteColor text-[11px]   font-bold mb-[30px]">
            A Denetim{" "}
          </h2>

          <h1 className="md:text-[36px] xs:text-[27px] text-Title font-bold mb-5">
            A DENETIM A Denetim, Firma Operasyonu
          </h1>
          {ADenetimItem.map((item) => {
            return (
              <>
                <div className="flex gap-10 pb-9 group" key={item.id}>
                  <div className="bg-white shadow-gray-500  shadow-2xl py-3 rounded-lg px-3 h-[60px] ">
                    {item.icon}
                  </div>
                  <div>
                    <h1 className="text-Title text-[20px] mb-[10px] font-bold">
                      {item.title}
                    </h1>
                    <p className="text-Desc text-[16px] font-normal leading-[1.875]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
}

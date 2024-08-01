import Image from "next/image";
import React from "react";
import { İletişimİtem } from "./item";
import Map from "./map/page";
export default function İletişim() {
  return (
    <div className="pt-[116px] ">
      <div className="grid grid-cols-2 px-[15px] xs:grid-cols-1 md:!grid-cols-2 container mx-auto max-w-[1200px]">
        <div>
          <div>
            <span className="border border-SiteColor text-SiteColor mt-4  text-[11px] leading-4 bg-[#b2cedb]  rounded-xl font-bold py-[4px] px-[10px] ">
              İLETIŞIM
            </span>
            <h1 className="font-bold xs:text-[27px] md:!text-[36px] text-Title mb-5">
              Bizler ile İletişime Geçin
            </h1>
            <p className="text-[16px] font-normal mb-5 text-Desc">
              Hizmetlerimiz ve Eğitimlerimiz ile ilgili daha detaylı bilgi alın
            </p>
          </div>
          {İletişimİtem.map((item) => {
            return (
              <>
                <div className="flex gap-4 mb-[30px]">
                  <div>
                    {" "}
                    <div className="py-[18px]  bg-[rgba(255,133,35,0.1)]  w-16 h-16 rounded-[50%] hover:shadow-[6px_6px_13px_0_rgba(0,0,0,0.15)] duration-300">
                      <span className="text-[27px] flex justify-center text-SiteColor ">
                        {item.icon}
                      </span>
                    </div>
                  </div>
                  <div>
                    <h6 className="text-[16px] font-semibold pt-[6px] mb-[1px] text-Title ">
                      {item.title}
                    </h6>
                    <p className="text-[16px] font-normal mb-5 text-Desc">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div className="">
          <Image
            src={"/photo/image-contacts.png"}
            alt=""
            height="878"
            width="849"
          ></Image>
        </div>
      </div>
      <Map />
    </div>
  );
}

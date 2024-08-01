import React from "react";
import { Yönetimİtem } from "./item";
export default function YönetimKurulu() {
  return (
    <div className="">
      <div>
        <h1 className="md:!text-[36px] xs:text-[27px] font-bold mb-5 text-center">
          Yönetim Kurulu
        </h1>
      </div>
      <div className="grid grid-cols-5 xs:grid-cols-1 md:!grid-cols-2 lg:!grid-cols-5 container mx-auto ">
        {Yönetimİtem.map((item) => {
          return (
            <>
              <div className="xs:p-[25px] md:!p-[30px]  group  ">
                <div
                  key={item.id}
                  className="bg-white h-[190px] group-hover:bg-black duration-1000 py-[35px] px-[30px]  shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]"
                >
                  <h6 className="font-semibold text-[25px] mb-[5px] text-center group-hover:text-white text-Title">
                    {item.title}
                  </h6>
                  <span className="text-SiteColor font-semibold flex text-center justify-center">
                    {item.desc}
                  </span>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

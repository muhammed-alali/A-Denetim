import React from "react";
import { İletşimItem } from "./item";
export default function Bizlerİletşime() {
  return (
    <div className="flex xs:block md:!flex justify-between bg-[#3345FF] text-white py-[82px] xs:px-[15px]  md:!px-24 my-12">
      {İletşimItem.map((item) => {
        return (
          <>
            <div>
              <h1 className="text-[40px] xs:text-[32px] md:!text-[40px] font-bold pb-[10px]">
                {item.title}
              </h1>
              <p className="font-normal text-[16px]">{item.desc}</p>
            </div>
            <div className="xs:mt-[40px]  md:!my-auto  ">
              <span className="bg-SiteColor px-[30px] py-[14px] ">
                <button className=" ">{item.button}</button>
              </span>
            </div>
          </>
        );
      })}
    </div>
  );
}

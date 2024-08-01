import React from "react";
import { GiChargedArrow, GiTargetArrows } from "react-icons/gi";
import { MansetItem } from "./item";
export default function MansetCard() {
  return (
    <div className="container mx-auto relative lg:!max-w-[1300px]">
      <div className="grid grid-cols-3 xs:grid-cols-1   sm:grid-cols-1 md:!grid-cols-2  lg:!grid-cols-3 items-center z-[100] absolute mt-[-40px]  ">
        {MansetItem.map((item) => {
          return (
            <>
              <div className=" xs:mb-8 xs:px-0 md:!px-[17px]  lg:!px-[30px] xl:!px-[23px] px-[23px] hover:translate-y-[-12px] duration-300 ">
                <div className=" bg-white pt-[25px] md:!px-4 lg:!px-[25px] px-[25px] py-[25px] rounded-md shadow-2xl">
                  <div className="xs:block md:!flex flex gap-3" key={item.id}>
                    <div className="py-[18px] xs:m-auto sm:!m-0 bg-[rgba(255,133,35,0.1)]  w-20 h-20 rounded-[50%]">
                      {item.icon}
                    </div>
                    <div className="text-start p-[10px]">
                      <h1 className="xs:text-center xs:text-[16px] text-[18px] font-semibold mb-[5px]">
                        {item.title}
                      </h1>
                      <p className="xs:text-center  text-[#54595F] text-[16px] font-normal">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

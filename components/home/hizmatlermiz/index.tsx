import React from "react";
import { HizmetlerItem } from "./item";
export default function Hizmetlerimiz() {
  return (
    <>
      <section className="container mx-auto px-[15px] max-w-[1200px] py-[120px]">
         <div className="text-center pb-10">
              <span className="border border-SiteColor text-SiteColor mt-4  text-[11px] leading-4 bg-[#b2cedb]  rounded-xl font-bold py-[4px] px-[10px]">
               HİZMETLERİMİZ
             </span>
              <h1 className="md:text-[36px] xs:text-[27px] font-bold mb-5 text-Title">
              Profesyonel Alanda Sunduğumuz Hizmetler
              </h1>
              <p className="text-[16px] font-normal leading-[1.875] text-Desc">
              A Bağımsız Denetim A.Ş. deneyimli kadrosu ile müşterilerine uluslararası standartlarda bağımsız denetim hizmeti sunmaktadır. Bu kapsamda yaptığımız denetimler şunlardır.
              </p>
              </div> 
        <div className="grid grid-cols-3 xs:grid-cols-1 sm:grid-cols-1 lg:!grid-cols-3 ">
          {HizmetlerItem.map((item) => {
            return (
              <>
                <div
                  key={item.id}
                  className="border   border-[#dcdcdc] pt-[50px] pl-[50px] pb-12 pr-[40px]  hover:shadow-2xl duration-500"
                >
                  <span>{item.icon}</span>
                  <h1 className="text-Title text-[21px] mb-[10px] font-bold">
                    {item.title}
                  </h1>
                  <p className="text-[16px] font-normal leading-[1.875] text-Desc">
                    {item.desc}
                  </p>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
}

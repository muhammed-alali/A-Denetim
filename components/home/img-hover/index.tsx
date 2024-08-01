import Image from "next/image";
import React from "react";

export default function İmgHover() {
  return (
    <>
      <div className="container mx-auto  lg:!max-w-[1000px] md:max-w-[750px] md:px-5 lg:px-0 xl:px-5  flex xs:block md:block lg:!flex ">
        <div className="relative group  pr-1">
          <div className="relative w-[600px]   h-[588px] xs:w-full xs:h-[260px] md:!w-[690px] md:!h-[690px] lg:!w-[508px] lg:!h-[500px]  xl:!w-[568px] xl:!h-[568px] overflow-hidden  inline-block">
            <Image
              className="group-hover:!scale-[1.2]   duration-300  ease-in"
              src="/photo/project1.jpg"
              alt=""
              fill
            />
          </div>
          <div className=" text-SiteColor absolute bottom-[33px] left-[33px]   opacity-0 group-hover:opacity-[1] duration-300 ">
            {" "}
            <h1 className="text-[24px] font-bold mb-2">
              Business Consultation
            </h1>
            <p className="text-[14px] font-semibold">
              <span>BUSINESS </span>/<span> FINANCE</span>
            </p>
          </div>
        </div>
        <div>
          <div className=" group relative">
            <div className="relative w-[586px]  h-[290px] xs:w-full xs:h-[128px] md:!w-[690px] md:!h-[343px] lg:!w-[478px] lg:!h-[281px] xl:!w-[568px] xl:!h-[282px]  overflow-hidden  inline-block">
              <Image
                className="group-hover:!scale-[1.2]   duration-300  ease-in"
                src="/photo/project2.jpg"
                alt=""
                fill
              />
            </div>
            <div className=" text-SiteColor absolute bottom-[33px] pl-8  opacity-0 group-hover:opacity-[1] duration-300 ">
              {" "}
              <h1 className="text-[24px] font-bold mb-2">Finance Strategy</h1>
              <p className="text-[14px] font-semibold">
                <span>FINANCE </span>/<span> MARKETING</span>
              </p>
            </div>
          </div>
          <div className="flex xs:block md:!flex  gap-1">
            <div className="relative group">
              <div className="relative  w-[291px]   h-[291px] xs:w-full xs:h-[260px]  md:!w-[343px] md:!h-[343px]  lg:!w-[238px]   lg:!h-[221px]  xl:!w-[282px]   xl:!h-[282px] overflow-hidden  inline-block">
                <Image
                  className="group-hover:!scale-[1.2]   duration-300  ease-in"
                  src="/photo/project-3.jpg"
                  alt=""
                  fill
                />
              </div>
              <div className=" text-SiteColor absolute bottom-[33px] pl-7  opacity-0 group-hover:opacity-[1] duration-300 ">
                {" "}
                <h1 className="text-[24px] font-bold mb-2">
                  Digital Marketing
                </h1>
                <p className="text-[14px] font-semibold">
                  <span>FINANCE </span>/<span> MARKETING</span>
                </p>
              </div>
            </div>
            <div className="relative group">
              <div className="relative w-[291px]   h-[291px] xs:w-full xs:h-[260px] md:!w-[343px] md:!h-[343px]  lg:!w-[238px]   lg:!h-[221px]  xl:!w-[282px]   xl:!h-[282px] overflow-hidden  inline-block">
                <Image
                  className="group-hover:!scale-[1.2]   duration-300  ease-in"
                  src="/photo/project-4.jpg"
                  alt=""
                  fill
                />
              </div>

              <div className=" text-SiteColor absolute bottom-[33px] pl-7    opacity-0 group-hover:opacity-[1] duration-300 ">
                {" "}
                <h1 className="text-[24px] font-bold mb-2">Enterprise Loan</h1>
                <p className="text-[14px] font-semibold">
                  <span>BUSINESS </span>/<span> MARKETING</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

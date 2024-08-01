"use client";
import { useEffect, useState } from "react";

export default function YılıkDenetim() {
  return (
    <>
      <div className="container mx-auto max-w-[1200px] my-28">
        <div className="grid grid-cols-4 xs:grid-cols-1 sm:grid-cols-1 md:!grid-cols-2 lg:!grid-cols-4 px-[15px] ">
          <div className=" flex gap-4 mr-4 mb-4">
            <h1 className="text-5xl font-bold items-center text-SiteColor">
              89
            </h1>

            <h1 className="font-semibold text-Title  ">
              <div>DENETIM</div> <div>MERKEZI</div>
            </h1>
          </div>
          <div className=" flex gap-4 mr-4 mb-4">
            {" "}
            <h1 className="text-5xl font-bold items-center text-SiteColor">
              215
            </h1>
            <h1 className="font-semibold text-Title  ">
              <div>EĞITIM</div> <div>SERISI</div>
            </h1>
          </div>
          <div className=" flex gap-4 mr-4 mb-4">
            <h1 className="text-5xl font-bold items-center text-SiteColor">
              15
            </h1>

            <h1 className="font-semibold text-Title  ">
              <div>YILLIK</div> <div>DENEYIM</div>
            </h1>
          </div>
          <div className=" flex gap-4 mr-4 mb-4">
            <h1 className="text-5xl font-bold items-center text-SiteColor">
              120
            </h1>
            <h1 className="font-semibold text-Title  ">
              <div>PROFESYONEL</div> <div>KADRO</div>
            </h1>{" "}
          </div>
        </div>
      </div>
    </>
  );
}

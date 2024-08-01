"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { MansetItem } from "./item";
export default async function Slider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper w-full"
      >
        {MansetItem.map((item) => {
          return (
            <>
              <SwiperSlide className="" key={item.id}>
                <div className="">
                  <div className="md:!w-[60%] xs:mx-12 xs:my-32 absolute text-white lg:!my-40 my-40 mx-16 w-[70%] ">
                    <div className="mb-16">
                      <span className="xs:hidden lg:!block w-fit text-sm font-medium border rounded-2xl py-1  px-3 bg-[#999fa4] bg-opacity-25 	">
                        {" "}
                        {item.first}
                      </span>
                    </div>
                    <div className="mt-[-35px]">
                      <h1 className="xs:pb-4 xs:text-[23px] md:!text-[40px] lg:!text-[64px] text-[64px] font-bold">
                        {item.title}
                      </h1>
                      <p className="xs:hidden lg:!block text-[14px] leading-8 font-normal pb-3">
                        {item.desc}
                      </p>
                      <div className="flex gap-5 ">
                        <h1 className="group">
                          <button className="md:!px-9 lg:!py-4 md:!text-[16px] xs:text-xs xs:!px-5 bg-[#007aff] px-9 py-3 group-hover:bg-black rounded-sm  duration-300">
                            DAHA FAZLA
                          </button>
                        </h1>
                        <h1 className="group">
                          {" "}
                          <button className=" md:!px-9 lg:!py-4 md:!text-[16px] xs:text-xs xs:px-5 px-9 py-3 bg-[#999fa4] bg-opacity-25 group-hover:bg-orange-500 rounded-sm  duration-300">
                            İLETİŞİM
                          </button>
                        </h1>
                      </div>
                    </div>
                  </div>

                  <Image
                    className=" xs:h-[400px] lg:!h-[670px] h-full object-cover "
                    src={item.url}
                    alt=""
                    width={2000}
                    height={100}
                  />
                </div>
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>
    </>
  );
}

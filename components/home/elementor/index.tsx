"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import Image from "next/image";
import { EloementorItem } from "./item";
export default function Elementor() {
  return (
    <>
      <div className=" bg-[#F5F5F5] !py-[60px] ">
        <Swiper
          slidesPerView={5}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper container mx-auto "
          breakpoints={{
            290: {
              slidesPerView: 2,
              spaceBetween: 5,
            },
            600: {
              slidesPerView: 4,
              spaceBetween: 5,
            },
            950: {
              slidesPerView: 5,
              spaceBetween: 5,
            },
          }}
        >
          <div className="">
            {EloementorItem.map((item) => {
              return (
                <>
                  <SwiperSlide className="">
                    <div className="flex justify-center ">
                      <Image
                        key={item.id}
                        className="!aspect-[3/2] m-auto"
                        src={item.url}
                        alt="img"
                        width={130}
                        height={80}
                      ></Image>
                    </div>
                  </SwiperSlide>
                </>
              );
            })}
          </div>
        </Swiper>
      </div>
    </>
  );
}

"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GoChevronDown, GoChevronUp } from "react-icons/go";

export default function S_s_s() {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);


  return (
    <section className="bg-[url('/photo/download-img.jpg')] bg-no-repeat bg-cover bg-center min-h-[699px] ">
      <div className="container !max-w-[1200px] mx-auto py-[100px] grid grid-cols-2 xs:grid-cols-1 sm:grid-cols-1 lg:!grid-cols-2 xs:px-[15px]">
        <div className="content-center">
          <span className="border border-SiteColor text-SiteColor mt-4  text-[11px] leading-4 bg-[#b2cedb]  rounded-xl font-bold py-[4px] px-[10px]">
            EĞITIMLERIMIZ
          </span>
          <h2 className="md:text-[36px] xs:text-[27px] font-bold pb-[32px] text-white">
            Başarıya Ulaştıran Eğitimler
          </h2>
          <div className="mb-3">
            <button
              onClick={() => setOpen1((prev) => !prev )}
              className="flex gap-3 items-center text-white bg-[#A7A7A733] border border-[#FFFFFF33] duration-500 hover:bg-SiteColor w-[80%] justify-between py-[9px] px-5 text-[16px] font-semibold"
            >
              <h1>Kişisel Eğitim</h1>

              <span> {!open1 ? <GoChevronDown /> : <GoChevronUp />}</span>
            </button>
            {open1 && (
              <p className="text-[#CCCCCC] px-5 pt-5 pb-3 leading-[30px] text-base font-normal w-[82%]">
                Öğrencilere yeni iş alanları geliştirmelerine imkân hazırlayan
                bir eğitim verilmekte; toplam altı haftalık programda, bir
                işletmeyi kurmak ve geliştirmek için gerekli bütün konular
                işlenmektedir.
              </p>
            )}
          </div>
          <div className="mb-3">
            <button
              onClick={() => setOpen2((prev) => !prev)}
              className="flex gap-3 items-center text-white bg-[#A7A7A733] border border-[#FFFFFF33] duration-500 hover:bg-SiteColor w-[80%] justify-between py-[9px] px-5 text-[16px] font-semibold"
            >
              <h1>Kişisel Eğitim</h1>

              <span> {!open2 ? <GoChevronDown /> : <GoChevronUp />}</span>
            </button>
            {open2 && (
              <p className="text-[#CCCCCC] px-5 pt-5 pb-3 leading-[30px] text-base font-normal w-[82%]">
                Öğrencilere yeni iş alanları geliştirmelerine imkân hazırlayan
                bir eğitim verilmekte; toplam altı haftalık programda, bir
                işletmeyi kurmak ve geliştirmek için gerekli bütün konular
                işlenmektedir.
              </p>
            )}
          </div>
          <div className="mb-3">
            <button
              onClick={() => setOpen3((prev) => !prev)}
              className="flex gap-3 items-center text-white bg-[#A7A7A733] border border-[#FFFFFF33] duration-500 hover:bg-SiteColor w-[80%] justify-between py-[9px] px-5 text-[16px] font-semibold"
            >
              <h1>Kişisel Eğitim</h1>

              <span> {!open3 ? <GoChevronDown /> : <GoChevronUp />}</span>
            </button>
            {open3 && (
              <p className="text-[#CCCCCC] px-5 pt-5 pb-3 leading-[30px] text-base font-normal w-[82%]">
                Öğrencilere yeni iş alanları geliştirmelerine imkân hazırlayan
                bir eğitim verilmekte; toplam altı haftalık programda, bir
                işletmeyi kurmak ve geliştirmek için gerekli bütün konular
                işlenmektedir.
              </p>
            )}
          </div>
        
        </div>
        <div className="">
          <Image
            className="rounded-[5px]"
            src={"/photo/image2-home1.jpg"}
            alt="img"
            width={550}
            height={500}
          ></Image>
        </div>
      </div>
    </section>
  );
}

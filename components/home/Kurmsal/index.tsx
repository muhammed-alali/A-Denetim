import Image from "next/image";
import Link from "next/link";
import { KurmsalItem } from "./item";
export default function Kurmsal() {
  return (
    <section className="container mx-auto py-28 md:px-4 xs:mt-[40rem] md:!mt-52 lg:!mt-10">
      {KurmsalItem.map((item) => {
        return (
          <>
            <div className="grid grid-cols-2 xs:grid-cols-1 sm:grid-cols-1 lg:!grid-cols-2">
              <div className="">
                <Image src={item.url} alt="" width={669} height={669}></Image>
              </div>
              <div className="xs:p-0 p-4 pt-14 w-full">
                <span className="border border-SiteColor text-SiteColor mt-4  text-[11px] lea]ding-4 bg-[#dfe1e2]  rounded-xl font-bold py-[4px] px-[10px]">
                  {item.first}
                </span>
                <h1 className="xs:text-[26px] text-black md:!text-[36px] leading-[1.2] font-bold py-4">
                  {item.title}
                </h1>
                <p className="text-base text-Desc pb-14 md:w-[53.666667%] leading-[1.875]">
                  {item.desc}
                </p>
                <Link
                  href={"/"}
                  className="bg-SiteColor hover:bg-black duration-300 font-semibold py-[14px] mb-7 px-[30px] rounded-sm text-[14px] text-white "
                >
                  {item.button}
                </Link>
              </div>
            </div>
          </>
        );
      })}
    </section>
  );
}

"use client";
import Kurmsal from "@/components/home/Kurmsal/index";
import Slider from "@/components/home/Slider/index";
import ADenetim from "@/components/home/a denetim/index";
import Elementor from "@/components/home/elementor/index";
import Hizmetlerimiz from "@/components/home/hizmatlermiz/index";
import MansetCard from "@/components/home/manset-card/index";
import S_s_s from "@/components/home/s.s.s/index";
import Bizlerİletşime from "@/components/home/bizler-ile-iletşime/index";
import İmgHover from "@/components/home/img-hover/index";

export default function Home() {
  return (
    <>
      <Slider />
      <MansetCard />
      <Kurmsal />
      <Elementor />
      <S_s_s />
      <Hizmetlerimiz />
      <ADenetim />
      <Bizlerİletşime />

      <div>
        <İmgHover />
      </div>
    </>
  );
}

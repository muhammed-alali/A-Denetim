import { title } from "process";
import { BsTelephoneFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { SiMinutemailer } from "react-icons/si";
export const FooterItem = [
  // {
  //     id:1,
  //     url:"/photo/footer.png",
  //     desc1: "Firmamız mevzuat değişiklikleri, muhasebe standartları ve uygulamaları konusundaki gelişmeler başta olmak üzere faaliyetimizle ilgili konularda gelen talepler doğrultusunda eğitim hizmetleri sunmaktadır.",
  //     title1:"CONTACTS"
  // },
  {
    id: 2,
    title: "Adres",
    desc: "   Fikirtepe Mah. Bahtlı Sok. Pırlanta Sitesi A Blok No:46 D:154 Göztepe/Kadıköy/İSTANBUL",
    icon: <MdLocationOn />,
  },
  {
    id: 2,
    title: "Telefon",
    desc: "Sabit: +90 216 660 02 92 Mobil: +90 549 660 02 92",
    icon: <BsTelephoneFill />,
  },
  {
    id: 2,
    title: "Mail",
    desc: "info@adenetim.com.tr",
    icon: <SiMinutemailer />,
  },
];

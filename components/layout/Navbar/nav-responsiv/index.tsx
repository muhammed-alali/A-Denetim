// "use client";
// import { Link } from "lucide-react";
// import React, { useState } from "react";

// import { RxHamburgerMenu } from "react-icons/rx";
// import { NavItem } from "../item";
// export default function NavResponsiv() {
//   const [open, setOpen] = useState(false);
//   return (
//     <>
//       <div className="block lg:hidden  ">
//         <div onClick={() => setOpen((prev) => !prev)}>
//           <RxHamburgerMenu className=" mx-auto text-SiteColor mt-3" />
//         </div>
//         <div className="">
//           {open && (
//             <ul className="pt-4">
//               {NavItem.map((item) => {
//                 return (
//                   <li>
//                     <Link href="/">{item.title}</Link>
//                   </li>
//                 );
//               })}
//               {/* <li>
//                 <Link href="/kurumsal">Kurumsal</Link>
//               </li>
//               <li>
//                 <Link href="/egitimlerimiz">Eğitimlerimiz</Link>
//               </li>
//               <li>
//                 <Link href="/hizmetlerimiz">Hizmetlerimiz</Link>
//               </li>
//               <li>
//                 <Link href="/contacts">İletişim</Link>
//               </li> */}
//             </ul>
//           )}
//         </div>
//       </div>
//     </>
//   );
// }

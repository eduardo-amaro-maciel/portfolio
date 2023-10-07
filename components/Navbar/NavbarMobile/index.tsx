"use client";

import Link from "next/link";
import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Drawer from "react-modern-drawer";
import { PiListBold } from "react-icons/pi";
import { usePathname } from "next/navigation";
import "react-modern-drawer/dist/index.css";

export default function NavbarMobile() {
   const [drawerOpen, setDrawerOpen] = useState(false);

   const toggleDrawer = () => {
      setDrawerOpen((prevState) => !prevState);
   };

   const pathname = usePathname();

   const activePath = (path: string) =>
      pathname === path
         ? "text-[#111111] font-semibold w-fit p-2"
         : "text-slate-600" + " p-2 w-fit";

   return (
      <nav className="w-full flex items-center justify-between">
         <button data-testid="abrir-menu">
            <PiListBold onClick={toggleDrawer} className="text-3xl text-black" />
         </button>
         <Drawer
            open={drawerOpen}
            onClose={toggleDrawer}
            direction="left"
            className="shadow-inner border-r-2 pt-12"
         >
            <div className="flex gap-8 text-xs font-medium tracking-wider flex-col pl-6">
               <Link
                  className="font-bold text-base tracking-wider text-black flex items-baseline gap-2 w-fit"
                  href="/"
               >
                  EDUARDO AMARO <p className="font-mono">{"</>"}</p>
               </Link>
               <Link href="/" className={activePath("/")}>
                  PROJETOS
               </Link>
               <Link href="/sobre" className={activePath("/sobre")}>
                  SOBRE
               </Link>
               <Link href="/contato" className={activePath("/contato")}>
                  CONTATO
               </Link>
               <Link
                  href="https://github.com/eduardo-amaro-maciel"
                  target="_blank"
                  className="flex gap-2 items-center w-fit"
               >
                  <FaGithub className="text-xl text-slate-600" /> GitHub
               </Link>
               <Link
                  href="https://www.linkedin.com/in/eduardo-amaro-maciel"
                  target="_blank"
                  className="flex gap-2 items-center w-fit"
               >
                  <FaLinkedin className="text-xl text-slate-600" />
                  Linkedin
               </Link>
            </div>
         </Drawer>
      </nav>
   );
}

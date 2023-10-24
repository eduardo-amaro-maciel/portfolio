"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { usePathname } from "next/navigation";

export default function NavbarDesktop() {
   const pathname = usePathname();

   const activePath = (path: string) =>
      pathname === path ? "text-[#111111] font-semibold p-2" : "text-slate-600 p-2";

   return (
      <nav className="flex justify-between max-[1080px]:hidden">
         <Link
            className="font-bold text-base tracking-wider text-black flex items-baseline gap-2 p-0 leading-[30px] mb-0"
            href="/"
         >
            EDUARDO AMARO <p className="font-mono">{"</>"}</p>
         </Link>
         <div className="flex gap-8 text-xs font-medium tracking-wider items-center">
            <Link href="/" className={activePath("/")}>
               PROJETOS
            </Link>
            <Link href="/sobre" className={activePath("/sobre")}>
               SOBRE
            </Link>
            <Link href="/contato" className={activePath("/contato")}>
               CONTATO
            </Link>
            <Link href="https://github.com/eduardo-amaro-maciel" target="_blank">
               <FaGithub className="text-xl text-slate-600" />
            </Link>
            <Link href="https://www.linkedin.com/in/eduardo-amaro-maciel" target="_blank">
               <FaLinkedin className="text-xl text-slate-600" />
            </Link>
         </div>
      </nav>
   );
}

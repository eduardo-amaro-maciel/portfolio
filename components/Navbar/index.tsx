"use client";

//import useMediaQuery from "@/hooks/useMediaQuery";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

export default function Navbar() {
   // const { matches } = useMediaQuery("(max-width: 1150px)");

   return (
      <header className="py-20 w-full">
         <NavbarMobile />
         <NavbarDesktop />
      </header>
   );
}

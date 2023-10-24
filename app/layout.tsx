import "../styles/globals.css";
import type { Metadata } from "next";
import MouseBlobity from "@/components/MouseBlobity";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import "aos/dist/aos.css";
import AddColorsTailwind from "@/components/AddColorsTailwnd";
import ScrollToTop from "@/components/ScrollToTop";

const localFonts = localFont({
   src: [
      {
         path: "../public/assets/fonts/Fontspring-criteriacf-thin.otf",
         weight: "100",
         style: "normal",
      },
      {
         path: "../public/assets/fonts/Fontspring-criteriacf-extralight.otf",
         weight: "200",
         style: "normal",
      },
      {
         path: "../public/assets/fonts/Fontspring-criteriacf-light.otf",
         weight: "300",
         style: "normal",
      },
      {
         path: "../public/assets/fonts/Fontspring-criteriacf-regular.otf",
         weight: "400",
         style: "normal",
      },
      {
         path: "../public/assets/fonts/Fontspring-criteriacf-medium.otf",
         weight: "500",
         style: "normal",
      },
      {
         path: "../public/assets/fonts/Fontspring-criteriacf-demibold.otf",
         weight: "600",
         style: "normal",
      },
      {
         path: "../public/assets/fonts/Fontspring-criteriacf-bold.otf",
         weight: "700",
         style: "normal",
      },
      {
         path: "../public/assets/fonts/Fontspring-criteriacf-extrabold.otf",
         weight: "800",
         style: "normal",
      },
      {
         path: "../public/assets/fonts/Fontspring-criteriacf-super.otf",
         weight: "900",
         style: "normal",
      },
   ],
   variable: "--font-criteriacf",
});

export const metadata: Metadata = {
   title: "Eduardo Amaro | Desenvolvedor Full-Stack",
   themeColor: "#000",
   description:
      "Eduardo é um desenvolvedor com foco em aplicações web, com experiência na criação de códigos elegantes e eficientes e na comunicação de soluções técnicas para um público diversificado.",
   icons: {
      icon: ["/assets/icons/favicon.ico?v=4"],
   },
   applicationName: "Eduardo Amaro | Desenvolvedor Full-Stack",
   appleWebApp: {
      statusBarStyle: "black",
   },
   keywords:
      "Eduardo Amaro, Frontend Engineer, Code, Communication, Web Development, User Experience, UI/UX Design, Portfolio, Front-End Developer, Developer, UI Engineer, Brazil, Brasil",
   openGraph: {
      type: "website",
      url: "https://eduamaro.vercel.app/",
      title: "Eduardo Amaro | Desenvolvedor Full-Stack",
      description:
         "Eduardo é um desenvolvedor com foco em aplicações web, com experiência na criação de códigos elegantes e eficientes e na comunicação de soluções técnicas para um público diversificado.",
      images: "/assets/images/me.jpg",
   },
   twitter: {
      card: "summary_large_image",
      site: "https://eduamaro.vercel.app/",
      creator: "@",
      title: "Eduardo Amaro | Desenvolvedor Full-Stack",
      images: "/assets/images/me.jpg",
      description:
         "Eduardo é um desenvolvedor com foco em aplicações web, com experiência na criação de códigos elegantes e eficientes e na comunicação de soluções técnicas para um público diversificado.",
   },
};

export default function RootLayout({ children }: { children: React.ReactNode; }) {
   return (
      <html lang="pt-br">
         <body className={localFonts.className + " bg-[#F7F7F7]"}>
            <div className="ml-[8%] mr-[8%]">
               <div className="max-w-[1400px] m-auto">
                  <MouseBlobity />
                  <ScrollToTop />
                  <AddColorsTailwind />
                  <Navbar />
                  {children}
               </div>
            </div>
         </body>
      </html>
   );
}

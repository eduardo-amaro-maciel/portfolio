"use client";
import { AiOutlineArrowUp } from "react-icons/ai";
import { useState, useEffect } from "react";

export default function ScrollToTop() {
   const [showsScrolBtn, setShowScrolBtn] = useState(false);

   useEffect(() => {
      const handleButtonVisibility = () => {
         window.pageYOffset > 300 ? setShowScrolBtn(true) : setShowScrolBtn(false);
      };

      window.addEventListener("scroll", handleButtonVisibility);
      return () => {
         window.addEventListener("scroll", handleButtonVisibility);
      };
   }, []);

   return (
      <button
         onClick={() => window.scrollTo(0, 0)}
         className={
            showsScrolBtn
               ? "fixed right-10 bottom-10 p-2 bg-slate-300 shadow-2xl rounded transition-all z-40 animate-pulse"
               : "hidden right-10 bottom-10 p-2 bg-slate-300 shadow-2xl rounded transition-all z-40 animate-pulse"
         }
      >
         <AiOutlineArrowUp className="text-4xl" />
      </button>
   );
}

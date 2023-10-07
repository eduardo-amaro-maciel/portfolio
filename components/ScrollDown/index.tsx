"use client";

import { FaChevronDown } from "react-icons/fa";

export default function ScrollDown() {
   return (
      <FaChevronDown
         onClick={() => window.scrollTo(0, 700)}
         className="mt-20 cursor-pointer text-orange-400 animate-pulse"
      />
   );
}

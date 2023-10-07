import { useEffect, useState } from "react";

export default function useMediaQuery(maxWidth: string) {
   const [matches, setMatches] = useState<boolean>();

   useEffect(() => {
      function match() {
         setMatches(window.matchMedia(maxWidth).matches);
      }

      match();

      window.addEventListener("resize", match);

      return () => {
         window.removeEventListener("resize", match);
      };
   }, [maxWidth]);

   return { matches };
}

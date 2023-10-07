"use client";

import { useEffect } from "react";
import useBlobity from "blobity/lib/react/useBlobity";
import { blobityConfig } from "./config/blobityConfig";
import AOS from "aos";

// import useMediaQuery from "@/hooks/useMediaQuery";

export default function MouseBlobity() {
   const blobityInstance = useBlobity(blobityConfig);
   // const { matches } = useMediaQuery("(max-width: 1150px)");

   useEffect(() => {
      AOS.init();
      if (blobityInstance.current) {
         // @ts-ignore for debugging purposes or playing around
         window.blobity = blobityInstance.current;
      }
   }, [blobityInstance]);

   useEffect(() => {
      window.scrollTo({
         top: 0,
         left: 0,
      });
   }, []);

   return null;
}

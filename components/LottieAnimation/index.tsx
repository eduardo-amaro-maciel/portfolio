"use client";
import { Player } from "@lottiefiles/react-lottie-player";
import codeAnimation from "@/public/assets/lottie/code-animation.json";

export default function LottieAnimation() {
   return <Player src={codeAnimation} autoplay loop className="max-w-[200px] max-[420px]:max-w-[150px]" />;
}

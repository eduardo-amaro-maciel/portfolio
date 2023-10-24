//import LottieAnimation from "../LottieAnimation";
import ScrollDown from "../ScrollDown";
import dynamic from "next/dynamic";

const LottieAnimation = dynamic(() => import('../LottieAnimation'))

export default function Hero() {
   return (
      <section className="flex flex-col items-center font-normal text-3xl text-center justify-center leading-[60px] max-[720px]:text-xl max-[720px]:leading-[40px] max-[420px]:text-lg">
         <LottieAnimation />
         <h1 className="mt-12 max-w-xl">Olá, eu sou Desenvolvedor Full Stack.</h1>
         <h2 className="max-w-4xl">
            Desenvolvo produtos, marcas e experiências marcantes que agregam valor à vida das
            pessoas.
         </h2>
         <ScrollDown />
      </section>
   );
}

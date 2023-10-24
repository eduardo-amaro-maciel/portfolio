import Image from "next/image";

export default function Home() {
   return (
      <section className="flex gap-7 max-[920px]:flex-col max-[920px]:justify-center max-[920px]:items-center mb-24">
         <div className="flex-1">
            <Image
               src={"/assets/images/me.jpg"}
               width={600}
               height={300}
               alt="esse sou eu"
               className="sticky top-9"
               data-aos={"fade-right"}
               data-aos-duration={"1100"}
            />
         </div>
         <div className="flex-1 mb-7">
            <h1
               className="font-extrabold text-7xl my-10 max-[920px]:text-left max-[520px]:text-3xl"
               data-aos={"fade-left"}
               data-aos-duration={"1100"}
            >
               SOBRE.
            </h1>
            <p data-aos={"fade-left"} data-aos-duration={"1100"} className="max-[920px]:text-left max-[420px]:text-base">
               Olá, eu me chamo Eduardo, sou um desenvolvedor full stack com um amplo conhecimento e
               experiência na criação e manutenção de aplicações. Meu foco principal está na
               usabilidade e no desempenho, sempre buscando proporcionar a melhor experiência ao
               usuário. Além disso, tenho noções de design de interface UI e experiência do
               usuário UX, o que me permite criar produtos mais intuitivos e atraentes.
               <br />
               <br />
               Tenho proficiência em diversas ferramentas, incluindo Typescript, PHP e MySQL. Sou
               versátil em frameworks modernos, como React.js, Next.js e Node.js, sendo capaz de me
               adaptivar a ferramentas rapidamente.
               <br />
               <br />
               Acredito na importância de trabalhar em equipe e tenho uma sólida capacidade de
               colaboração, garantindo uma integração perfeita entre o front-end e o back-end.
               Trabalhar em conjunto com outros desenvolvedores é essencial para criar produtos
               robustos e eficientes.
               <br />
               <br />
               Estou sempre em busca de aprendizado contínuo e gosto de me manter atualizado com as
               mais recentes tecnologias. Isso me permite enfrentar desafios de forma inovadora e
               encontrar soluções eficientes para problemas complexos.
            </p>
         </div>
      </section>
   );
}

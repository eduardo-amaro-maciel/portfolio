import allProjects from "@/utils/allProjects";
import Project from "@/components/Project";

export default function Home() {
   return (
      <section className="w-full mb-16">
         <h1
            className="font-extrabold text-7xl my-10 m-auto w-full text-center max-[600px]:text-3xl"
            data-aos={"fade-left"}
            data-aos-duration={"1100"}
         >
            TODOS OS MEUS PROJETOS.
         </h1>
         <p
            data-aos="fade-up"
            data-aos-duration="1900"
            className="max-w-4xl m-auto text-center mb-20 text-2xl font-light leading-10 max-[600px]:text-xl max-[600px]:leading-10 "
         >
            Eu criei aplicativos e sites incríveis, explorando uma ampla gama de tecnologias, desde
            HTML, PHP até Node e React. Abaixo, você encontrará alguns dos meus projetos favoritos
            que representam minha jornada criativa.
         </p>
         <div className="text-white gap-20 grid max-[1380px]:grid-cols-2 justify-items-center grid-cols-3 max-[980px]:grid-cols-1">
            {allProjects.map((project) => (
               <Project
                  key={project.image}
                  title={project.title}
                  image={project.image}
                  github={project.github}
                  site={project.site}
               />
            ))}
         </div>
      </section>
   );
}

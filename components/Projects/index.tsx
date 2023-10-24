import Project from "./Project";
import { projects } from "@/utils/projects";

export default function Projects() {
   return (
      <section className="w-full py-10 overflow-x-hidden" id="projects">
         <div className="w-full mb-24">
            <h2
               className="text-3xl font-normal text-center max-[420px]:text-3xl aos-init aos-animate"
               data-aos="fade-up"
               data-aos-duration="1100"
            >
               Principais projetos.
            </h2>
         </div>
         <div className="w-full flex flex-col [&>*:nth-child(even)]:flex-row-reverse max-[1200px]:[&>*:nth-child(even)]:flex-col  gap-24">
            {projects.map(({ title, image, description, technologies, github, site }) => (
               <Project
                  key={title}
                  title={title}
                  image={image}
                  description={description}
                  technologies={technologies}
                  github={github}
                  site={site}
               />
            ))}
         </div>
         <div className="w-full py-36 flex items-center justify-center">
            <a
               href="/projetos"
               className="flex gap-2 text-black items-center text-2xl font-normal text-center max-[420px]:text-base border-2 rounded-full border-gray-700 p-3"
            >
               Ver mais projetos
            </a>
         </div>
      </section>
   );
}

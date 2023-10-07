import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import Tag from "./Tag";
import Image from "next/image";

type ProjectProps = {
   title: string;
   image: string;
   description: string;
   technologies: string[];
   github: string;
   site: string;
};

export default function Project({
   title,
   image,
   description,
   technologies,
   github,
   site,
}: ProjectProps) {
   return (
      <div className="w-full flex mt-16 gap-20 max-[1200px]:flex-col">
         <div className="flex-1 flex flex-col gap-10">
            <h2
               className="text-black text-3xl tracking-widest max-[1200px]:m-auto max-[1200px]:max-w-3xl max-[1200px]:text-center aos-init aos-animate"
               data-aos={"fade-right"}
               data-aos-duration={"1100"}
            >
               {title}
            </h2>
            <p
               className="text-gray-500 text-xl font-light leading-10 max-[1200px]:m-auto max-[1200px]:max-w-3xl max-[1200px]:text-center aos-init aos-animate"
               data-aos={"fade-right"}
               data-aos-duration={"1700"}
            >
               {description}
            </p>
            <div
               className="w-full flex flex-wrap gap-4 max-[1200px]:m-auto max-[1200px]:max-w-3xl max-[1200px]:justify-center aos-init aos-animate"
               data-aos={"fade-right"}
               data-aos-duration={"1700"}
            >
               {technologies.map((technologie) => (
                  <Tag key={technologie} tag={technologie} />
               ))}
            </div>
            <div
               className="flex gap-7 max-[1200px]:m-auto max-[1200px]:max-w-3xl aos-init aos-animate"
               data-aos={"fade-right"}
               data-aos-duration={"1700"}
            >
               <a href={github} target="_blank">
                  <button className="flex items-center gap-3 text-black">
                     Ver no github
                     <FaGithub />
                  </button>
               </a>
               <a href={site} target="_blank">
                  <button className="flex items-center gap-2 text-black">
                     Visitar o site
                     <FiExternalLink />
                  </button>
               </a>
            </div>
         </div>
         <div className="flex-1">
            <Image
               data-aos={"fade-left"}
               src={`/assets/images/${image}`}
               alt=""
               className="max-w-[850px] w-full max-[1200px]:m-auto aos-init aos-animate"
               width={"800"}
               height={"800"}
            />
         </div>
      </div>
   );
}

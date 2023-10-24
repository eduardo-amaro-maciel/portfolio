import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import Image from "next/image";

type ProjectProps = {
   image: string;
   title: string;
   site: string;
   github: string;
};

export default function Project({ image, title, site, github }: ProjectProps) {
   return (
      <div className="flex-1 max-[1380px]:w-fit max-w-full" data-aos="fade-up" data-aos-duration="1900">
         <div className="border border-black p-2 rounded-xl mb-5 max-[1380px]:w-fit max-[980px]:w-full">
            <Image
               src={`/assets/images/${image}`}
               alt="projeto"
               className="w-96 object-fill h-60 rounded-lg max-[980px]:w-full max-[980px]:h-auto"
               width={400}
               height={200}
            />
         </div>
         <div className="flex justify-between">
            <span className="text-lg text-black">{title}</span>
            <div className="flex gap-5">
               <a className="" href={github} target="_blank">
                  <button className="p-2 text-black">
                     <FaGithub size={24} />
                  </button>
               </a>
               <a className="" href={site} target="_blank">
                  <button className="p-2 text-black">
                     <FiExternalLink size={24} />
                  </button>
               </a>
            </div>
         </div>
      </div>
   );
}

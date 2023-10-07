import "./style.css";
import Skill from "./Skill";
import skills from "@/utils/skills";

export default function Skills() {
   return (
      <section className="w-full py-24" id="skills">
         <div className="logos max-[680px]:before:bg-transparent max-[680px]:after:bg-transparent">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
               <div key={item} className="logos-slide animate-slide-to-left">
                  {skills.map(({ name, color }) => (
                     <Skill key={name} name={name} color={color} />
                  ))}
               </div>
            ))}
         </div>
         <div className="logos max-[680px]:before:bg-transparent max-[680px]:after:bg-transparent">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
               <div key={item} className="logos-slide animate-slide-to-right">
                  {skills.map(({ name, color }) => (
                     <Skill key={name} name={name} color={color} />
                  ))}
               </div>
            ))}
         </div>
      </section>
   );
}

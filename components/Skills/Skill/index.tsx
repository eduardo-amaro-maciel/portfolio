"use client";

import { TSkills } from "@/utils/skills";

export default function Skill({ name, color }: TSkills) {
   return (
      <div className="skill h-10 w-auto px-7 py-3 border-[0.1px] rounded-full my-0 mx-10 text-black leading-6 border-zinc-800 flex flex-row items-center gap-2">
         <div className={"w-3 h-3 rounded-full " + color}></div>
         <p>{name}</p>
      </div>
   );
}

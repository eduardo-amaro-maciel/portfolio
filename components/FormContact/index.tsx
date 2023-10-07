export default function FormContact() {
   return (
      <form
         action="https://api.staticforms.xyz/submit"
         method="POST"
         className="w-full flex flex-col gap-12 max-w-4xl m-auto"
         data-aos={"fade-up"}
         data-aos-duration={"1100"}
      >
         <input type="hidden" name="accessKey" value="4d9c20f2-b8bc-4470-af5f-ea0531bb699b" />
         <input type="hidden" name="redirectTo" value={process.env.DOMAIN + "/contato"} />
         <div className="w-full relative">
            <label htmlFor="name" className="text-[#44484C] text-lg font-light block mb-2">
               Nome
            </label>
            <input
               required
               name="name"
               id="name"
               type="text"
               className="w-full bg-transparent border-[#999999] color-[#333333] text-sm p-3 border font-light rounded"
               placeholder="Seu nome"
            />
         </div>
         <div className="w-full relative">
            <label htmlFor="email" className="text-[#44484C] text-lg font-light block mb-2">
               E.mail
            </label>
            <input
               required
               name="email"
               id="email"
               type="email"
               className="w-full bg-transparent border-[#999999] color-[#333333] text-sm p-3 border font-light rounded"
               placeholder="Seu E.mail"
            />
         </div>
         <div className="w-full relative">
            <label htmlFor="message" className="text-[#44484C] text-lg font-light block mb-2">
               Mensagem
            </label>
            <textarea
               required
               name="message"
               id="message"
               rows={1}
               className="w-full bg-transparent border-[#999999] color-[#333333] text-sm p-3 border font-light rounded h-32"
               placeholder="Sua menssagem"
            />
         </div>
         <button className="py-3 px-8 border w-fit m-auto border-[#999999] rounded">Enviar</button>
      </form>
   );
}

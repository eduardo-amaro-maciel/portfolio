import FormContact from "@/components/FormContact";

export default function Home() {
   return (
      <section className="max-w-xl m-auto">
         <h1 className="my-14 w-full text-center" data-aos={"fade-up"} data-aos-duration={"1100"}>
            Me envie algumas palavras e eu lhe enviarei algumas de volta.
         </h1>
         <FormContact />
      </section>
   );
}

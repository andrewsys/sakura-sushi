import { lora } from "@/ui/fonts"
import GuestItem from "@/ui/GuestItem"

{/* Seção de depoimentos da página principal */}
function Guests() {
  return (
    <section className="w-full py-40 px-5 lg:px-0 flex flex-col gap-12 bg-[url(/cherry-blossom.svg)]">
        <div>
            <h2 className={`text-3xl font-bold text-center ${lora.className}`}>
                What our guests say
            </h2>
            <h2 className={`text-3xl font-bold text-center text-zinc-400 ${lora.className}`}>
                Real reviews from happy clients
            </h2>
        </div>
        <div className="lg:w-[900px] px-5 lg:px-0 mx-auto flex lg:flex-row flex-col items-center justify-between gap-10 items-start">
            {/* Cada GuestItem representa um depoimento de um cliente */}
            <GuestItem review="Best sushi experience I've had—fresh, creative, and beautifully served." user="Julia" occupation="Local Guide" />
            <GuestItem review="The omakase is a must-try for anyone who loves great Japanese food." user="Leo" occupation="regular"/>
            <GuestItem review="I appreciate the amazing vegan rolls—delicious and beautifully plated." user="Sam" occupation="Vegan Foodie" />
        </div>
    </section>
  )
}

export default Guests
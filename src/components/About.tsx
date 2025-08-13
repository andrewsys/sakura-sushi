import Image from "next/image"
import { lora } from "@/ui/fonts"

function About() {
  return (
    <section className="flex w-full justify-center py-50 px-5 md:px-0">
        <article className="w-[900px]">
            <h2 className={`text-4xl md:text-4xl font-bold mb-4 ${lora.className}`}>About Us</h2>
            <p className="text-lg md:text-md md:w-[50%]">
                Welcome to Sakura Sushi, where we bring the art of traditional Japanese cuisine to your table. Our chefs are dedicated to crafting authentic sushi using the finest ingredients, ensuring every bite is a delightful experience.
            </p>
            <Image src={"/signature.svg"} alt="Chief signature" className="mt-4" width={34} height={24} />
        </article>
    </section>
  )
}

export default About
"use client";
import clsx from "clsx";
import { lora } from "@/ui/fonts";

interface Props {
    src: string;
    alt: string;
    title: string;
    description: string;
    price?: string;
    orientation: boolean;
}

function MenuItem({ src, alt, title, description, price, orientation }: Props) {
  return (
    <article className="w-full grid grid-cols-1 grid-rows-[300px] lg:grid-cols-2 items-center mb-30">
      {/* Imagem do prato */}
      <img src={src} alt={alt} className={clsx("object-cover object-center h-full w-full", { "lg:order-2": orientation, "lg:order-1": !orientation })}/>
      <div className={clsx("p-5", { "lg:order-1": orientation, "lg:order-2": !orientation })}>
        {/* Título do prato */}
        <h3 className={`font-bold text-2xl ${lora.className}`}>{title}</h3>
        {/* Ingredientes do prato */}
        <p className={`font-regular`}>{description}</p>
      </div> 
    </article>
  )
}

export default MenuItem
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
    <article className="w-full grid grid-cols-1 grid-rows-[300px] md:grid-cols-2 items-center mb-30">
      <img src={src} alt={alt} className={clsx("object-cover object-center h-full w-full", { "md:order-2": orientation, "md:order-1": !orientation })}/>
      <div className={clsx("p-5", { "md:order-1": orientation, "md:order-2": !orientation })}>
        <h3 className={`font-bold text-2xl ${lora.className}`}>{title}</h3>
        <p className={`font-regular`}>{description}</p>
      </div> 
    </article>
  )
}

export default MenuItem
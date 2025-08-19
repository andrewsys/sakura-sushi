import { lora } from "./fonts";

interface Props {
    title: string;
    description: string;
    src: string;
    alt: string;
}

function MMItem({ title, description, src, alt }: Props) {
  return (
    <article className="lg:w-[270px] flex flex-col gap-1">
        <div className="aspect-square lg:w-[270px] lg:h-[270px] overflow-hidden mb-2">
            <img src={src} alt={alt} className=" object-cover w-full h-full"/>
        </div>
        <h3 className={`text-white text-2xl font-semibold ${lora.className}`}>{title}</h3>
        <p className="text-gray-300">{description}</p>
    </article>
  )
}

export default MMItem
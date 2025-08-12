import Button from "@/ui/Button";
import { lora } from "@/ui/fonts";

function Banner() {
  return (
    <section className={`relative ${lora.className}`}>
        <video
            className="w-full h-[70vh] brightness-65 object-cover user-select-none"
            autoPlay
            loop
            muted
            playsInline
        >
            <source src="/home-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4"><span className="text-[#FF007F]">Sakura</span> Sushi</h1>
            <p className="text-lg md:text-2xl mb-8">The Art of Traditional Flavor</p>
            <Button text="Explore Our Menu" />
        </div>
    </section>
  )
}

export default Banner
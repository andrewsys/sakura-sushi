import Button from "@/ui/Button";
import { lora } from "@/ui/fonts";

function Reservation() {
  return (
    <section className="relative w-full bg-[url(/restaurant.jpg)] bg-cover bg-center">
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative flex flex-col items-center justify-center md:w-[900px] px-5 md:px-0 mx-auto py-50 text-center">
            <h2 className={`text-white text-4xl font-bold mb-4 ${lora.className}`}>Make a Reservation</h2>
            <p className="text-white text-lg mb-6 max-w-md">Join us for an unforgettable dining experience. Reserve your table now and savor the finest sushi in town.</p>
            <Button text="Reserve Now" className="text-white"/>
        </div>
    </section>
  )
}

export default Reservation;
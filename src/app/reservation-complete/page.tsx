import Image from "next/image"
import { lora } from "@/ui/fonts"

function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
        <Image src="/reservation-success.svg" alt="calendar with checkmark icon" width={50} height={50} className="mb-6" />
        <h1 className={`text-3xl md:text-4xl font-bold text-[#FF007F] mb-4 text-center ${lora.className}`}>
            Thank You for Your Reservation!
        </h1>
        <p className="text-lg text-gray-900 text-center mb-2">
            We appreciate your choice to dine with <span className="font-semibold">Sakura Sushi</span>.
        </p>
        <p className="text-md text-gray-800 text-center max-w-xl">
            Your reservation has been received and confirmed.<br />
            All the reservation details will be sent to your email shortly.<br />
            We look forward to welcoming you!
        </p>
    </div>
  )
}

export default Page;
"use client";
import { lora } from "@/ui/fonts";

function page() {
  return (
    <section className="bg-[url(/sakura-tree.jpg)] bg-cover bg-center w-full">
        <div className="w-full h-full bg-black/60 flex flex-col gap-30 items-center justify-center px-5 md:px-0">
            <article className="pt-30 text-white text-center">   
                <h1 className={`text-3xl md:text-4xl font-bold ${lora.className}`}>Contact Us</h1>
                <span>Please submit the form or give us a call at one of the numbers available</span>
            </article>
            <form className="bg-white flex flex-col md:flex-row mb-50 w-full md:w-[900px]">
                <div className="w-full md:w-[600px] p-8">
                    <label htmlFor="Name" className="font-medium">Name</label>
                    <input type="text" id="Name" className="outline-none border block w-full p-2 mt-1 mb-6" required/>

                    <label htmlFor="Email" className="font-medium">Email</label>
                    <input type="email" id="Email" className="outline-none border block w-full p-2 mt-1 mb-6" required/>

                    <label htmlFor="Message" className="font-medium">Message</label>
                    <textarea id="Message" rows={4} className="outline-none border block w-full p-2 mt-1 mb-6" required/>

                    <button type="submit" className="bg-[#FF007F] text-white font-medium px-4 py-2 mt-4 hover:bg-pink-600 transition-all duration-300 hover:cursor-pointer">Submit</button>
                </div>
                <div className="w-full md:w-[300px] bg-gray-100 p-8">
                    <address className="not-italic text-sm">
                        <h3 className="font-medium mb-1">Sakura Sushi Mariana</h3>
                        Rua das Palmeiras, 452 – Loja 3<br />
                        Bairro Vila Mariana<br />
                        São Paulo – SP<br />
                        <a href="tel:+5511999999999" className="text-[#FF007F]">(11) 3298-4512</a>
                    </address>
                </div>
            </form>
        </div>
    </section>
  )
}

export default page
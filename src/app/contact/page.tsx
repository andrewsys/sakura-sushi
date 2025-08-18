"use client";
import { useState } from "react";
import { lora } from "@/ui/fonts";
import clsx from "clsx";

function page() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [firstTry, setFirstTry] = useState(true);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFirstTry(false);

        if (name !== "" && email !== "" && message !== "") {
            alert("Thank you for your message! We will get back to you soon.");
            window.location.reload();
        }
    }
  return (
    <section className="bg-[url(/sakura-tree.jpg)] bg-cover bg-center">
        <div className="w-full h-full bg-black/60 flex flex-col gap-30 items-center justify-center px-5 lg:px-0">
            <article className="pt-30 text-white text-center">   
                <h1 className={`text-3xl lg:text-4xl font-bold ${lora.className}`}>Contact Us</h1>
                <span>Please submit the form or give us a call at one of the numbers available</span>
            </article>
            <form className="bg-white flex flex-col lg:flex-row mb-50 w-full lg:w-[900px]" onSubmit={handleSubmit}>
                <div className="w-full lg:w-[600px] p-8">
                    <label htmlFor="Name" className="font-medium">Name</label>
                    <input type="text" id="Name" className={clsx("outline-none border block w-full p-2 mt-1 mb-6", {"border-red-500": !firstTry && name === ""})} required value={name} onChange={e => setName(e.target.value)} />

                    <label htmlFor="Email" className="font-medium">Email</label>
                    <input type="email" id="Email" className={clsx("outline-none border block w-full p-2 mt-1 mb-6", {"border-red-500": !firstTry && email === ""})} required value={email} onChange={e => setEmail(e.target.value)} />

                    <label htmlFor="Message" className="font-medium">Message</label>
                    <textarea id="Message" rows={4} className={clsx("outline-none border block w-full p-2 mt-1 mb-6", {"border-red-500": !firstTry && message === ""})} required value={message} onChange={e => setMessage(e.target.value)} />

                    <button type="submit" className="bg-[#FF007F] text-white font-medium px-4 py-2 mt-4 hover:bg-pink-600 transition-all duration-300 hover:cursor-pointer">Submit</button>
                </div>
                <div className="w-full lg:w-[300px] bg-gray-100 p-8">
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
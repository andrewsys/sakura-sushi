"use client";
import TableSelector from "@/components/TableSelector"
import { useState } from "react";
import { lora } from "@/ui/fonts";
import clsx from "clsx";
import PopUp from "@/ui/PopUp";

function page() {
    const [selectedTable, setSelectedTable] = useState("Choose a table on the selector");
    const [seats, setSeats] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    }

    return (
    <div className="w-full flex flex-col items-center justify-center px-5 md:px-0">
        <h1 className={`font-bold md:text-3xl text-2xl text-center py-30 md:w-[900px] ${lora.className}`}>Secure your table and prepare for an unforgettable Japanese dining experience.</h1>
        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-10 items-center justify-center pb-39">
            <div className="flex flex-col items-center">
                <section className="text-center md:w-[350px] mb-3">
                    <h1 className="text-2xl font-bold">Select Your Table</h1>
                    <p className="text-lg">Choose a table for your reservation. Click on the table to select it.</p>
                </section>
                <TableSelector setTable={setSelectedTable} setSeats={setSeats} />
            </div>

            <div className="flex flex-col items-start">
                <label htmlFor="table" className="block">
                    <span className="text-lg font-semibold">Selected Table:</span>
                    <input type="text" id="table" className={clsx("block mx-auto mt-1 p-2 border border-gray-400 md:w-[250px]", {"text-zinc-500" : selectedTable == "Choose a table on the selector", "text-black" : selectedTable !== "Choose a table on the selector"})} value={`${selectedTable} ${(seats !== "" ? "(" : "")}${seats}${(seats !== "" ? " seats)" : "")}`} disabled />
                </label>
                <label htmlFor="date" className="">
                    <span className="text-lg font-semibold">Select Date:</span>
                    <input type="date" id="date" required className="block mx-auto mt-1 p-2 border border-gray-400 md:w-[250px]" />
                </label>
                <label htmlFor="time" className="">
                    <span className="text-lg font-semibold">Select Time:</span>
                    <select id="time" required className="block mx-auto mt-1 p-2 border border-gray-400 md:w-[250px]">
                        <option value="" selected disabled>Select a time</option>
                        <option value="12:00">12:00 PM</option>
                        <option value="13:00">1:00 PM</option>
                        <option value="14:00">2:00 PM</option>
                        <option value="15:00">3:00 PM</option>
                        <option value="16:00">4:00 PM</option>
                        <option value="17:00">5:00 PM</option>
                        <option value="17:00">6:00 PM</option>
                        <option value="17:00">7:00 PM</option>
                        <option value="17:00">8:00 PM</option>
                    </select>
                </label>
                <button className="mt-10 px-4 py-2 bg-[#FF007F] w-[250px] text-white font-semibold hover:cursor-pointer hover:bg-[#e60073] transition-colors" type="submit">Confirm Reservation</button>
            </div>
        </form>
        {/* <PopUp title="Are you sure?" b1Text="Yes" /> */}
    </div>
    )
}

export default page
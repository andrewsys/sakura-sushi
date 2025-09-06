"use client";
import TableSelector from "@/components/TableSelector"
import { useState } from "react";
import { lora } from "@/ui/fonts";
import clsx from "clsx";
import PopUp from "@/ui/PopUp";
import { permanentRedirect } from 'next/navigation'

function Page() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [selectedTable, setSelectedTable] = useState("Choose a table on the selector");
    const [seats, setSeats] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [showPopUp, setShowPopUp] = useState(false);
    const [firstTry, setFirstTry] = useState(true);

    {/* Validação de campos e exibe popup de confirmação */}
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFirstTry(false);

        if (selectedTable !== "Choose a table on the selector"
            && name !== ""
            && email !== ""
            && date !== ""
            && time !== ""
        ) {
            setShowPopUp(true);
        }
    }

    return (
    <div className="w-full flex flex-col items-center justify-center px-5 lg:px-0">
        {/* Título da página */}
        <h1 className={`font-bold lg:text-3xl text-2xl text-center py-30 lg:w-[900px] ${lora.className}`}>Secure your table and prepare for an unforgettable Japanese dining experience.</h1>
        
        {/* Formulário de reserva */}
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-[900px] grid grid-cols-1 lg:grid-cols-2 gap-10 items-center justify-center pb-39"
        >
          {/* Seletor de mesas */}
          <div className="flex flex-col items-center w-full">
            <section className="text-center w-full mb-3">
              <h1 className="text-2xl font-bold">Select Your Table</h1>
              <p className="text-lg">Choose a table for your reservation. Click on the table to select it.</p>
            </section>
            <TableSelector setTable={setSelectedTable} setSeats={setSeats} />
          </div>

          {/* Campos do formulário */}
          <div className="flex flex-col gap-3 mt-5 items-start w-full">
            {/* Campo Nome */}
            <label htmlFor="name" className="w-full">
              <span className="text-lg font-semibold">Name:</span>
              <input
                type="name"
                id="name"
                required
                className={clsx(
                  "block mt-1 p-2 border border-gray-400 w-full",
                  { "border-red-500 outline-1 outline-red-500": name === "" && !firstTry }
                )}
                placeholder="Inform your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            {/* Campo Email */}
            <label htmlFor="email" className="w-full">
              <span className="text-lg font-semibold">Email:</span>
              <input
                type="email"
                id="email"
                required
                className={clsx(
                  "block mt-1 p-2 border border-gray-400 w-full",
                  { "border-red-500 outline-1 outline-red-500": email === "" && !firstTry }
                )}
                placeholder="Inform your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            {/* Campo Mesa selecionada (apenas leitura) */}
            <label htmlFor="table" className="w-full">
              <span className="text-lg font-semibold">Selected Table:</span>
              <input
                type="text"
                id="table"
                className={clsx(
                  "block mt-1 p-2 border border-gray-400 w-full",
                  {
                    "text-zinc-500": selectedTable == "Choose a table on the selector",
                    "border-red-500 outline-1 outline-red-500": selectedTable === "Choose a table on the selector" && !firstTry,
                    "text-black": selectedTable !== "Choose a table on the selector"
                  }
                )}
                value={`${selectedTable} ${(seats !== "" ? "(" : "")}${seats}${(seats !== "" ? " seats)" : "")}`}
                disabled
              />
            </label>
            {/* Campo Data */}
            <label htmlFor="date" className="w-full">
              <span className="text-lg font-semibold">Select Date:</span>
              <input
                type="date"
                id="date"
                required
                className={clsx(
                  "block mt-1 p-2 border border-gray-400 w-full",
                  { "border-red-500 outline-1 outline-red-500": date === "" && !firstTry }
                )}
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </label>
            {/* Campo Horário */}
            <label htmlFor="time" className="w-full">
              <span className="text-lg font-semibold">Select Time:</span>
              <select
                id="time"
                required
                className={clsx(
                  "block mt-1 p-2 border border-gray-400 w-full",
                  { "border-red-500 outline-1 outline-red-500": time === "" && !firstTry }
                )}
                value={time}
                onChange={(e) => setTime(e.target.value)}
              >
                <option value="" disabled>Select a time</option>
                <option value="6:00">6:00 PM</option>
                <option value="7:00">7:00 PM</option>
                <option value="8:00">8:00 PM</option>
                <option value="9:00">9:00 PM</option>
                <option value="10:00">10:00 PM</option>
              </select>
            </label>
            {/* Botão de confirmação */}
            <button
              className="w-full mt-3 px-4 py-2 bg-[#FF007F] text-white font-semibold hover:cursor-pointer hover:bg-[#e60073] transition-colors"
              type="submit"
            >
              Confirm Reservation
            </button>
          </div>
        </form>
        {/* Popup de confirmação de reserva */}
        {showPopUp && <PopUp
            title="Reservation Confirmation"
            description={`Do you want to confirm your reservation for table ${selectedTable} on ${
              date ? new Date(date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }) : ""
            }, at ${time} PM?`}
            onConfirm={() => {
                setShowPopUp(false);
                permanentRedirect("/reservation-complete");
            }}
            onCancel={() => setShowPopUp(false)}
        />}
    </div>
    )
}

export default Page;
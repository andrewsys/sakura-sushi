"use client";

import { useState } from "react";
import { lora } from "@/ui/fonts"

function page() {
    const [selected, setSelected] = useState("Food");

    const handleSelection = (value: string) => {
        setSelected(value);
    };

    return (
        <div className="flex flex-col items-center mx-auto md:w-[900px] px-5 md:px-0">
            <h1 className={`text-2xl md:text-3xl font-bold text-center my-30 ${lora.className}`}>Our menu blends timeless recipes with the freshest ingredients — from delicate sushi and steaming bowls of ramen to crisp tempura and fragrant teas. Each dish is prepared with care, honoring the traditions and seasonal tastes of Japanese cuisine.</h1>
            <div>
                <div className="flex mt-3 mr-8 space-x-3 select-none">
                    <label className="flex items-center justify-center flex-grow cursor-pointer radio">
                        <input defaultChecked className="hidden peer" value="Food" name="radio" type="radio" onChange={() => handleSelection("Food")} />
                        <span
                            className="relative text-md text-black transition-all duration-300 after:opacity-0 peer-checked:after:opacity-100 peer-checked:after:transition-all peer-checked:after:duration-300 peer-checked:text-[#FF007F] peer-checked:before:content-[''] peer-checked:before:block peer-checked:before:w-full peer-checked:before:h-0.5 peer-checked:before:bg-[#FF007F] before:opacity-0 peer-checked:before:opacity-100 peer-checked:before:transition-all peer-checked:before:duration-300 peer-checked:before:rounded-md peer-checked:before:absolute peer-checked:before:right-0 peer-checked:before:bottom-0"
                        >
                            Food
                        </span>
                    </label>
                    <label className="flex items-center justify-center flex-grow cursor-pointer radio">
                        <input className="hidden peer" value="Beverage" name="radio" type="radio" onChange={() => handleSelection("Beverage")} />
                        <span
                            className="relative text-md text-black transition-all duration-300 after:opacity-0 peer-checked:after:opacity-100 peer-checked:after:transition-all peer-checked:after:duration-300 peer-checked:text-[#FF007F] peer-checked:before:content-[''] peer-checked:before:block peer-checked:before:w-full peer-checked:before:h-0.5 peer-checked:before:bg-[#FF007F] before:opacity-0 peer-checked:before:opacity-100 peer-checked:before:transition-all peer-checked:before:duration-300 peer-checked:before:rounded-md peer-checked:before:absolute peer-checked:before:right-0 peer-checked:before:bottom-0"
                        >
                            Beverage
                        </span>
                    </label>
                </div>
            </div>
        </div>
    )
}

export default page
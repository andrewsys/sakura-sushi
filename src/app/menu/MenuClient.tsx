"use client";
import { useState } from "react";
import { lora } from "@/ui/fonts"
import MenuItem from "@/ui/MenuItem";

function Page() {
    {/* Estado para controlar a categoria selecionada (Food ou Beverage) */}
    const [selected, setSelected] = useState("Food");

    {/* Função para atualizar a categoria selecionada */}
    const handleSelection = (value: string) => {
        setSelected(value);
    };

    return (
        <div className="flex flex-col items-center mx-auto lg:w-[900px] px-5 lg:px-0">
            {/* Título e descrição do menu */}
            <h1 className={`text-2xl lg:text-3xl font-bold text-center my-30 ${lora.className}`}>
                Our menu blends timeless recipes with the freshest ingredients — from delicate sushi and steaming bowls of ramen to crisp tempura and fragrant teas. Each dish is prepared with care, honoring the traditions and seasonal tastes of Japanese cuisine.
            </h1>
            <div>
                {/* Seletor de categoria */}
                <div className="flex mt-3 mr-8 space-x-3 select-none">
                    {/* Opção Food */}
                    <label className="flex items-center justify-center flex-grow cursor-pointer radio">
                        <input
                            defaultChecked
                            className="hidden peer"
                            value="Food"
                            name="radio"
                            type="radio"
                            onChange={() => handleSelection("Food")}
                        />
                        <span
                            className="relative text-lg text-black transition-all duration-300 after:opacity-0 peer-checked:after:opacity-100 peer-checked:after:transition-all peer-checked:after:duration-300 peer-checked:text-[#FF007F] peer-checked:before:content-[''] peer-checked:before:block peer-checked:before:w-full peer-checked:before:h-0.5 peer-checked:before:bg-[#FF007F] before:opacity-0 peer-checked:before:opacity-100 peer-checked:before:transition-all peer-checked:before:duration-300 peer-checked:before:rounded-lg peer-checked:before:absolute peer-checked:before:right-0 peer-checked:before:bottom-0"
                        >
                            Food
                        </span>
                    </label>
                    {/* Opção Beverage */}
                    <label className="flex items-center justify-center flex-grow cursor-pointer radio">
                        <input
                            className="hidden peer"
                            value="Beverage"
                            name="radio"
                            type="radio"
                            onChange={() => handleSelection("Beverage")}
                        />
                        <span
                            className="relative text-lg text-black transition-all duration-300 after:opacity-0 peer-checked:after:opacity-100 peer-checked:after:transition-all peer-checked:after:duration-300 peer-checked:text-[#FF007F] peer-checked:before:content-[''] peer-checked:before:block peer-checked:before:w-full peer-checked:before:h-0.5 peer-checked:before:bg-[#FF007F] before:opacity-0 peer-checked:before:opacity-100 peer-checked:before:transition-all peer-checked:before:duration-300 peer-checked:before:rounded-lg peer-checked:before:absolute peer-checked:before:right-0 peer-checked:before:bottom-0"
                        >
                            Beverage
                        </span>
                    </label>
                </div>
                <hr className="text-gray-300 mt-5" />
                {/* Lista de itens do menu, de acordo com a categoria selecionada */}
                <section className="mt-10">
                    {/* Itens de Food */}
                    {selected === "Food" && (
                        <>
                            <MenuItem src="/menu/yakisoba.jpeg" alt="ýakisoba dish" title="Yakisoba" description="A savory stir-fried noodle dish with vegetables and your choice of protein, seasoned with a tangy sauce." orientation={false} />
                            <MenuItem src="/menu/yakisoba.jpeg" alt="ýakisoba dish" title="Yakisoba" description="A savory stir-fried noodle dish with vegetables and your choice of protein, seasoned with a tangy sauce." orientation={true} />
                            <MenuItem src="/menu/yakisoba.jpeg" alt="ýakisoba dish" title="Yakisoba" description="A savory stir-fried noodle dish with vegetables and your choice of protein, seasoned with a tangy sauce." orientation={false} />
                            <MenuItem src="/menu/yakisoba.jpeg" alt="ýakisoba dish" title="Yakisoba" description="A savory stir-fried noodle dish with vegetables and your choice of protein, seasoned with a tangy sauce." orientation={true} />
                        </>
                    )}
                    {/* Itens de Beverage */}
                    {selected === "Beverage" && (
                        <>
                            <MenuItem src="/menu/sake.jpg" alt="sake beverage" title="Sake" description="A traditional Japanese rice wine with a smooth, rich flavor, perfect for pairing with sushi." orientation={true} />
                            <MenuItem src="/menu/sake.jpg" alt="sake beverage" title="Sake" description="A traditional Japanese rice wine with a smooth, rich flavor, perfect for pairing with sushi." orientation={false} />
                            <MenuItem src="/menu/sake.jpg" alt="sake beverage" title="Sake" description="A traditional Japanese rice wine with a smooth, rich flavor, perfect for pairing with sushi." orientation={true} />
                            <MenuItem src="/menu/sake.jpg" alt="sake beverage" title="Sake" description="A traditional Japanese rice wine with a smooth, rich flavor, perfect for pairing with sushi." orientation={false} />
                        </>
                    )}
                </section>
            </div>
        </div>
    )
}

export default Page;
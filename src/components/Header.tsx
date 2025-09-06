"use client";
import { useState } from "react";
import { lora } from "@/ui/fonts";
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import NavLink from "@/ui/NavLink"

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  {/* Cabeçalho com navegação */}
  return (
    <header>
        {/* Navegação para computadores */}
        <nav className="z-10 absolute top-0 md:flex gap-8 justify-center items-center w-full p-4 hidden">
            <NavLink text="Home" link="/" />
            <NavLink text="Menu" link="/menu" />
            <NavLink text="Contact Us" link="/contact" />
            <NavLink text="Reservations" link="/reservations" />
        </nav>

        {/* Cabeçalho para celulares */}
        <div className="fixed top-0 right-0 z-15 p-4 md:hidden flex items-center justify-between w-full bg-white">
          <Link href="/" onClick={() => isMenuOpen && toggleMenu()}>
            <span className={`text-2xl font-bold text-black ${lora.className}`}><span className="text-[#FF007F]">Sakura</span> Sushi</span>
          </Link>
          <button className="text-2xl text-gray-700 focus:outline-none" onClick={toggleMenu}>
            <Image src={isMenuOpen ? "/close.svg" : "/menu.svg"} alt="Menu Icon" width={34} height={34} />
          </button>
        </div>

        {/* Navegação para celulares */}
        <nav 
          className={clsx(
            "z-10 pt-19 fixed bg-white top-0 left-0 gap-8 w-full p-4 md:hidden transition-transform duration-300 ease-in-out",
            {
              "translate-y-0": isMenuOpen,
              "-translate-y-full absolute": !isMenuOpen,
            }
          )}
        >
          <ul className="w-full flex flex-col gap-2 text-center">
            <li onClick={toggleMenu}>
              <NavLink text="Home" link="/" className="block w-full h-full" />
            </li>
            <hr className="text-gray-400" />
            <li onClick={toggleMenu}>
              <NavLink text="Menu" link="/menu" className="block w-full h-full" />
            </li>
            <hr className="text-gray-400" />
            <li onClick={toggleMenu}>
              <NavLink text="Contact Us" link="/contact" className="block w-full h-full" />
            </li>
            <hr className="text-gray-400" />
            <li onClick={toggleMenu}>
              <NavLink text="Reservations" link="/reservations" className="block w-full h-full" />
            </li>
          </ul>
        </nav>

        {/* Cor do fundo quando o menu está aberto + lógica para fechar a navegação ao clicar fora do menu*/}
        <div className={clsx("md:hidden w-screen h-screen bg-black/30 z-2",
          {
            "fixed": isMenuOpen,
            "hidden": !isMenuOpen,
          })}
        onClick={toggleMenu}></div>
    </header>
  )
}

export default Header;
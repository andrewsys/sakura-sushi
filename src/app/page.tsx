"use client";

import About from "@/components/About";
import Guests from "@/components/Guests";
import Hero from "@/components/Hero";
import MiniMenu from "@/components/MiniMenu";
import Reservation from "@/components/Reservation";

function page() {
  
  return (
    <div>
       <Hero />
       <About />
       <MiniMenu />
       <Guests />
       <Reservation />
    </div>
  )
}

export default page
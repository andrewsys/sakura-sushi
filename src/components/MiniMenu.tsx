import Button from '@/ui/Button'
import MMItem from '@/ui/MMItem'
import { permanentRedirect } from 'next/navigation'
import React from 'react'

{/* Seção do cardádio resumido da página principal */}
function MiniMenu() {
  return (
    <section className="w-full py-40 bg-[#363636]">
        <div className="lg:w-[900px] px-5 lg:px-0 mx-auto flex lg:flex-row flex-col items-center justify-between gap-10 items-start">
            {/* Itens do mini cardápio */}
            <MMItem title='Signature rolls' description='Discover our chef’s specialties, from creative maki to classic nigiri' src='/rolls.jpg' alt='Section of signature rolls' />
            <MMItem title='Omakase tasting' description='Let our chef surprise you with a curated selection using the freshest catch' src='/omakase.jpg' alt='Section of omakase tasting' />
            <MMItem title='Vegan delights' description='Enjoy inventive plant-based options that celebrate natural flavors' src='/vegan.jpg' alt='Section of vegan delights' />
        </div>
        <Button text="Explore Our Menu" className="text-white mx-auto block mt-12" onClick={() => permanentRedirect("/menu")} />
    </section>
  )
}

export default MiniMenu
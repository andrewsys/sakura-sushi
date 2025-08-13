import Button from '@/ui/Button'
import MMItem from '@/ui/MMItem'
import React from 'react'

function MiniMenu() {
  return (
    <section className="w-full py-40 bg-[#363636]">
        <div className="md:w-[900px] px-5 md:px-0 mx-auto flex md:flex-row flex-col items-center justify-between gap-10 items-start">
            <MMItem title='Signature rolls' description='Discover our chef’s specialties, from creative maki to classic nigiri' src='/rolls.jpg' alt='Section of signature rolls' />
            <MMItem title='Omakase tasting' description='Let our chef surprise you with a curated selection using the freshest catch' src='/omakase.jpg' alt='Section of omakase tasting' />
            <MMItem title='Vegan delights' description='Enjoy inventive plant-based options that celebrate natural flavors' src='/vegan.jpg' alt='Section of vegan delights' />
        </div>
        <Button text="Explore Our Menu" className="text-white mx-auto block mt-12" />
    </section>
  )
}

export default MiniMenu
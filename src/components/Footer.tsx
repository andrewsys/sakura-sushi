import Social from "@/ui/Social";
import Link from "next/link";

function Footer() {
  return (
    <footer className="flex justify-center w-full bg-gray-100">
        <div className="flex flex-col gap-6 w-[900px] py-6 lg:px-0 px-5">
            <section className="lg:grid grid-cols-2 gap-8">
                <article className="flex flex-col gap-3">
                    <h3 className="text-2xl font-semibold"><span className="text-[#FF007F]">Sakura</span> Sushi</h3>
                    <p className="text-gray-600">Experience the finest sushi, meticulously crafted with passion and tradition. Our master chefs use only the freshest, highest-quality ingredients to create each piece. Savor the perfect balance of seasoned rice and pristine seafood in every bite.</p>
                    <div className="my-2 flex gap-2">
                        <Social href="#" src="/social/facebook.svg" alt="Facebook" />
                        <Social href="#" src="/social/instagram.svg" alt="Instagram" />
                        <Social href="#" src="/social/x.svg" alt="Twitter / X" />
                        <Social href="#" src="/social/tiktok.svg" alt="TikTok" />
                    </div>
                </article>
                <article className="flex flex-col lg:items-end pt-4 lg:pt-0">
                    <div className="text-left">
                        <h3 className="text-lg font-medium my-2">Navigation</h3>
                        <ul className="flex flex-col gap-1">
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/menu">Menu</Link></li>
                            <li><Link href="/contact">Contact Us</Link></li>
                            <li><Link href="/reservations">Reservations</Link></li>
                        </ul>
                    </div>
                </article>
            </section>
            <hr />
            <span className="self-center">© 2025 Sakura Sushi. All rights reserved.</span>
        </div>
    </footer>
  )
}

export default Footer;
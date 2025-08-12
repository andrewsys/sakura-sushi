import NavLink from "@/ui/NavLink"

function Header() {
  return (
    <header>
        <nav className="z-10 absolute top-0 flex gap-8 justify-center items-center w-full p-4">
            <NavLink text="Menu" link="/menu" />
            <NavLink text="Contact Us" link="/contact" />
            <NavLink text="Reservations" link="/reservations" />
        </nav>
    </header>
  )
}

export default Header;
import Link from 'next/link';

interface Props {
  text: string;
  link: string;
}

function NavLink({text, link}: Props) {
  return (
    <Link href={link} className="text-white text-lg hover:text-[#FF007F]">{text}</Link>
  )
}

export default NavLink;
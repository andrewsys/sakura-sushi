"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

interface Props {
  text: string;
  link: string;
  onClick?: () => void;
  className?: string;
}

function NavLink({text, link, className}: Props) {
  const pathname = usePathname();

  return (
    <Link href={link} className={clsx(
      `text-lg font-medium hover:text-[#FF007F] ${className}`,
      {
        'md:text-white font-medium': pathname === "/",
        'text-[#FF007F]': pathname === link,
      })}
    >
      {text}
    </Link>
  )
}

export default NavLink;

//Our menu blends timeless recipes with the freshest ingredients — from delicate sushi and steaming bowls of ramen to crisp tempura and fragrant teas. Each dish is prepared with care, honoring the traditions and seasonal tastes of Japanese cuisine.
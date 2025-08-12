import Link from "next/link";
import Image from "next/image";

interface Props {
    src: string;
    alt: string;
    href: string;
}

function Social({src, alt, href}: Props) {
  return (
    <Link
        href={href}
    >
        <Image
            src={src}
            alt={alt}
            width={24}
            height={24}
        />
    </Link>
  )
}

export default Social
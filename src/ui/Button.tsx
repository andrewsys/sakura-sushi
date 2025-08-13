import { inter } from "./fonts";

interface Props {
    text: string;
    className?: string;
    onClick?: () => void;
}

function Button({ text, className, onClick }: Props) {
  return (
    <button
      className={`
        px-2 py-1 outline outline-gray-300 rounded-lg transition-all font-semibold
        hover:cursor-pointer hover:outline-[#FF007F] hover:outline-2 hover:text-[#FF007F]
        focus:outline-[#FF007F] focus:outline-2 focus:text-[#FF007F]
        ${inter.className} ${className}
      `}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button
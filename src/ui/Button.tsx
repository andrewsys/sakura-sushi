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
        px-2 py-1 border border-gray-300 rounded-lg transition-all font-semibold
        hover:cursor-pointer hover:border-[#FF007F] hover:border-2 hover:text-[#FF007F]
        
        ${inter.className} ${className}
      `}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button
import Button from "./Button";

interface Props {
    title: string;
    description?: string;
    b1Text: string;
    question?: boolean;
    b2Text?: string;
    onClick?: () => void;
}

function PopUp({title, description, b1Text, question, b2Text, onClick}: Props) {
  return (
    <div className="fixed w-dvw h-dvh bg-black/10 flex justify-center items-center">
        <div className="flex flex-col items-center bg-white p-4 rounded-md border border-gray-400 w-[600px] h-[300px]">
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <p className="text-lg mb-6">{description}</p>
            <Button text={b1Text} className="outline-gray-400 hover:text-black hover:outline-gray-400 hover:bg-gray-100 hover:outline-1 focus:outline-1 transition-none" />
            {question && <p className="text-md text-gray-600">{b2Text}</p>}
        </div>
    </div>
  )
}

export default PopUp
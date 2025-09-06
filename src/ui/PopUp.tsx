interface Props {
    title: string;
    description?: string;
    onConfirm: () => void;
    onCancel: () => void;
}

function PopUp({title, description, onConfirm, onCancel}: Props) {
  return (
    <div className="fixed inset-0 bg-black/10 flex justify-center items-center z-50">
      <div className="z-10 flex flex-col justify-between items-center bg-white p-4 rounded-md border border-gray-400 w-full max-w-[90vw] md:max-w-[500px] h-auto min-h-[200px] p-6">
        {/* Título e descrição do pop-up */}
        <div>
          <h2 className="text-2xl font-bold mb-4">{title}</h2>
          <p className="text-lg mb-6">{description}</p>
        </div>
        <div className="flex w-full gap-4">
          {/* Botões de confirmação e cancelamento com suas respectivas funções */}
          <button className="bg-white border border-gray-300 px-4 py-2 rounded-md text-lg font-semibold hover:bg-gray-100 hover:cursor-pointer transition-colors w-full" onClick={onConfirm}>
            Confirm
          </button>
          <button className="bg-white border border-gray-300 px-4 py-2 rounded-md text-lg font-semibold hover:bg-gray-100 hover:cursor-pointer transition-colors w-full" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
      {/* Fundo semi-transparente atrás do pop-up */}
      <div className="z-1 fixed inset-0 bg-black/50"></div>
    </div>
  )
}

export default PopUp
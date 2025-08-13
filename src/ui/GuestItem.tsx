interface Props {
    review: string;
    user: string;
    occupation: string;
}

function GuestItem({ review, user, occupation }: Props) {
  return (
    <article className="flex flex-col justify-between p-4 bg-gray-100 aspect-square md:h-[290px] font-medium">
        <p className="text-gray-500">
            "{review}"
        </p>
        <div className="flex flex-col text-sm">
            <span>{user}</span>
            <span className="text-gray-500">{occupation}</span>
        </div>
    </article>
  )
}

export default GuestItem;
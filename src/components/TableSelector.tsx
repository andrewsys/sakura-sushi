import Image from "next/image";
import TableOption from "@/components/TableOption";

interface Props {
  setTable: (table: string) => void;
  setSeats: (seats: string) => void;
}

function TableSelector({ setTable, setSeats }: Props) {
  return (
    <div className="md:w-[400px] md:h-[400px] w-full aspect-square border border-gray-300 grid grid-cols-3 grid-auto-rows items-center pb-10 justify-items-center">
      {/* Cada TableOption representa uma mesa clicável com quantidade de assentos */}
      <TableOption table={"1"} seats={"2"} setTable={setTable} setSeats={setSeats} />
      <TableOption table={"2"} seats={"2"} setTable={setTable} setSeats={setSeats} />
      <TableOption table={"3"} seats={"4"} setTable={setTable} setSeats={setSeats} />
      <TableOption table={"4"} seats={"4"} setTable={setTable} setSeats={setSeats} />
      <TableOption table={"5"} seats={"6"} setTable={setTable} setSeats={setSeats} />
      <TableOption table={"6"} seats={"6"} setTable={setTable} setSeats={setSeats} />
      <TableOption table={"7"} seats={"10"} setTable={setTable} setSeats={setSeats} />
      <TableOption table={"8"} seats={"10"} setTable={setTable} setSeats={setSeats} />
      {/* representaçao da entrada do restaurante com ícone de porta */}
      <div className="flex gap-1 mt-10 items-center justify-center select-none">
        <span>Entrance</span>
        <Image src="/door.svg" alt="door icon" width={24} height={24} />
      </div>
    </div>
  )
}

export default TableSelector;
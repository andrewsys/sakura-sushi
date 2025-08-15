"use client";
import { useState } from "react";
import clsx from "clsx";

interface Props {
    table: string;
    setTable: (table: string) => void;
    seats: string;
    setSeats: (seats: string) => void;
}

function TableOption({table, setTable, seats, setSeats}: Props) {
    return (
        <label htmlFor={`t${table}`} className="w-[50px] h-[50px]">
            <input 
                id={`t${table}`} 
                type="radio" 
                name="table" 
                value={`t${table}`} 
                className="hidden peer" 
                onChange={() => { setTable(table); setSeats(seats); }}
            />
            <img 
                src={`/reservations/t${table}.svg`} 
                alt={`table ${table} option`} 
                className="outline-[#FF007F] hover:cursor-pointer peer-checked:outline-2 hover:outline-2"
            />
        </label>   
    )
}

export default TableOption;
import { Metadata } from "next";
import ReservationsClient from "./ReservationsClient";

export const metadata: Metadata = {
  title: "Reservations",
};

export default function Page() {
  return <ReservationsClient />;
}
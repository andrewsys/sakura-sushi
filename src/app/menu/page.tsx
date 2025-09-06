import { Metadata } from "next";
import MenuClient from "./MenuClient";

export const metadata: Metadata = {
  title: "Menu",
};

export default function Page() {
  return <MenuClient />;
}
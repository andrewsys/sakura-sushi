import { redirect } from "next/navigation";

{/* Redirecionamento para a página inicial em caso de rota não encontrada */}
export default function NotFound() {
  redirect("/");
  return null;
}
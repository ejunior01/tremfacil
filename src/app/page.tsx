import { UserOptionsList } from "@/components/UserOptionsList";

export default function Home() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="leading-none tracking-tight text-xl font-bold px-0" >Selecione a opção desejada</h1>
      <UserOptionsList />
    </div>
  );
}

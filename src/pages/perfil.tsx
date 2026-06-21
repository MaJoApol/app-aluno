import { useState } from "react";
import { Header } from "../components/Header";
import { useUser } from "../contexts/UserContext";
import ProfileRow from "../components/ProfileRow";

export default function Profile() {
  const { user } = useUser();
  const [activeTab, setActiveTab] = useState("Dados Pessoais");

  const tabs = ["Dados Pessoais", "Configurações", "Segurança"];

  const getInitials = (name: string) => {
    if (!name) return "";
    const words = name.trim().split(" ").filter(Boolean);
    
    if (words.length >= 2) {
      return (words[0][0] + words[1][0]).toUpperCase();
    }
    
    return words[0]?.[0]?.toUpperCase() || "";
  };

  const personalData = [
    { label: "Nome Completo", value: user?.name || "João Silva" },
    { label: "Nome de Preferência", value: user?.username || "Jonh" },
    { label: "Endereço de E-mail", value: user?.email || "joao.silva@satc.edu.br" },
    { label: "Matrícula / CPF", value: user?.document || "***.***.***-89" },
    { label: "Número de Telefone", value: user?.phoneNumber || "Não fornecido" },
  ];

  return (
    <>
      <Header />
      <main className="w-full min-h-screen bg-gray-50 px-[5vw] md:px-[10vw] py-10 flex flex-col gap-8 text-left">
        
        <section className="flex items-center gap-5">
          <div className="flex items-center justify-center w-20 h-20 rounded-full bg-emerald-600 text-white text-2xl font-semibold shrink-0 shadow-sm">
            {getInitials(user?.name || "João Silva")}
          </div>

          <div className="flex flex-col gap-1">
            <h1 className="text-3xl font-bold text-slate-800 tracking-tight">
              {user?.name || "João Silva"}
            </h1>
            <p className="text-slate-500 text-sm font-medium">
              Engenharia de Software • 3º Ano
            </p>
          </div>
        </section>

        <section className="flex gap-8 border-b border-gray-200 mt-2 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 text-sm font-medium transition-colors whitespace-nowrap outline-none ${
                activeTab === tab
                  ? "border-b-2 border-emerald-600 text-emerald-600"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              {tab}
            </button>
          ))}
        </section>

        <section className="bg-white border border-gray-200 rounded-md shadow-sm flex flex-col w-full">
          {activeTab === "Dados Pessoais" && (
            <div className="flex flex-col">
              {personalData.map((data, i) => (
                <ProfileRow key={i} label={data.label} value={data.value} />
              ))}
            </div>
          )}

          {activeTab !== "Dados Pessoais" && (
            <div className="p-10 text-center text-slate-500 text-sm">
              Nenhuma informação disponível para esta aba no momento.
            </div>
          )}
        </section>
        
      </main>
    </>
  );
}
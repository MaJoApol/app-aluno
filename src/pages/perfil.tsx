import { useState } from "react";
import { Header } from "../components/Header";
import { useUser } from "../contexts/UserContext";
import ProfileRow from "../components/ProfileRow";
import { getInitials } from "../utils";
import type { User } from "../types/userType";

type FieldKey = keyof User;

const fields: { label: string; key: FieldKey }[] = [
  { label: "Nome Completo", key: "name" },
  { label: "Nome de Preferência", key: "username" },
  { label: "Endereço de E-mail", key: "email" },
  { label: "Matrícula / CPF", key: "document" },
  { label: "Número de Telefone", key: "phoneNumber" },
  { label: "Usuário GitHub", key: "githubUsername" },
];

export default function Profile() {
  const { user, updateUser } = useUser();
  const [activeTab, setActiveTab] = useState("Dados Pessoais");
  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState<User>({ ...user });

  const tabs = ["Dados Pessoais", "Configurações", "Segurança"];

  const handleEdit = () => {
    setDraft({ ...user });
    setIsEditing(true);
  };

  const handleSave = () => {
    updateUser(draft);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <>
      <Header />
      <main className="w-full min-h-screen bg-gray-50 px-[5vw] md:px-[10vw] py-10 flex flex-col gap-8 text-left">
        <section className="flex items-center gap-5">
          <div className="flex items-center justify-center w-20 h-20 rounded-full bg-emerald-600 text-white text-2xl font-semibold shrink-0 shadow-sm">
            {getInitials(user.name)}
          </div>

          <div className="flex flex-col gap-1">
            <h1 className="text-3xl font-bold text-slate-800 tracking-tight">
              {user.name}
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
              {fields.map(({ label, key }) => (
                <ProfileRow
                  key={key}
                  label={label}
                  value={isEditing ? draft[key] : user[key]}
                  isEditing={isEditing}
                  onChange={(val) => setDraft((prev) => ({ ...prev, [key]: val }))}
                />
              ))}

              <div className="flex justify-end gap-3 px-6 py-4">
                {isEditing ? (
                  <>
                    <button
                      onClick={handleCancel}
                      className="text-sm px-4 py-2 rounded-md border border-gray-200 text-slate-600 hover:bg-gray-50 transition-colors"
                    >
                      Cancelar
                    </button>
                    <button
                      onClick={handleSave}
                      className="text-sm px-4 py-2 rounded-md bg-emerald-600 text-white hover:bg-emerald-700 transition-colors"
                    >
                      Salvar
                    </button>
                  </>
                ) : (
                  <button
                    onClick={handleEdit}
                    className="text-sm px-4 py-2 rounded-md border border-gray-200 text-slate-600 hover:bg-gray-50 transition-colors"
                  >
                    Editar
                  </button>
                )}
              </div>
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

import { useNavigate } from "react-router";
import { Header } from "../components/Header";
import { DisciplineCard, type DisciplineCardProps } from "../components/DisciplineCard";

const disciplines: Omit<DisciplineCardProps, "onResume">[] = [
  {
    status: "Em curso",
    disciplineName: "Front-end",
    teacherName:
      "PROF. MARCO SILVA",
    progress: 75,
  },
  {
    status: "Próximo Semestre",
    disciplineName: "UX Design",
    teacherName: "DRA. ANA LÚCIA",
    progress: 0,
  },
];

export default function Disciplinas() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <main className="w-full min-h-screen bg-gray-200 px-[10vw] py-10 flex flex-col gap-8 text-left">
        <section className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold text-gray-800">
            Minhas Disciplinas
          </h1>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {disciplines.map((discipline, i) => (
            <DisciplineCard
              key={i}
              {...discipline}
              onResume={() => navigate("/dashboard")}
            />
          ))}
        </section>
      </main>
    </>
  );
}

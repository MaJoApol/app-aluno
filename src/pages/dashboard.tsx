import { useNavigate } from "react-router";
import { CourseCard, type CourseCardProps } from "../components/CourseCard";
import { Header } from "../components/Header";
import { StatCard, type StatCardProps } from "../components/StatCard";

const courses: Omit<CourseCardProps, "onResume">[] = [
  {
    status: "Em progresso",
    courseName: "Front-end",
    lessonName:
      "Aula 2 – Conceitos de desenvolvimento Front-end e Git + Github",
    progress: 65,
  },
  {
    status: "Em progresso",
    courseName: "UX Design",
    lessonName: "Aula 3 – Usabilidade",
    progress: 34,
  },
];

const stats: StatCardProps[] = [
  {
    label: "Tempo de estudo",
    value: "12h 45m",
    description: "Esta semana",
  },
  {
    label: "Tarefas pendentes",
    value: "2",
    description: "Próximo vencimento em 2 dias",
  },
  {
    label: "Discussão com a IA",
    value: "8",
    description: "Tópicos ativos",
  },
];

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <main className="w-full min-h-screen bg-gray-200 px-[10vw] py-10 flex flex-col gap-8 text-left">
        <section className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold text-emerald-700">
            Boa aula, Paulo
          </h1>
          <p className="text-gray-500 max-w-2xl text-sm leading-relaxed">
            Bem-vindo de volta a sua sessão de estudos focado. Você tem 2
            tarefas para essa semana e está atualmente adiantado em seu
            cronograma de leitura.
          </p>
        </section>

        <section className="flex flex-col gap-4">
          {courses.map((course, i) => (
            <CourseCard
              key={i}
              {...course}
              onResume={() => navigate("/dashboard")}
            />
          ))}
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {stats.map((stat, i) => (
            <StatCard key={i} {...stat} />
          ))}
        </section>
      </main>
    </>
  );
}

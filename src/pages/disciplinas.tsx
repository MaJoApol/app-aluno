import { ProjectCard } from "../components/ProjectCard";
import { Header } from "../components/Header";
import { useRepositories } from "../hooks/useRepositories";
import { useUser } from "../contexts/UserContext";

export default function Disciplinas() {
  const { user } = useUser();
  const { repositories, error, isLoading } = useRepositories(user.githubUsername);

  return (
    <>
      <Header />

      {isLoading && (
        <div className="w-full min-h-screen bg-gray-200 px-[10vw] py-10 flex flex-col gap-8 text-left">
          <p className="text-slate-500 text-sm">Carregando repositórios...</p>
        </div>
      )}

      {error && (
        <div className="w-full min-h-screen bg-gray-200 px-[10vw] py-10 flex flex-col gap-8 text-left">
          <p className="text-red-500 text-lg font-semibold">
            Ocorreu um erro ao carregar os repositórios: {error.message}
          </p>
        </div>
      )}

      {!isLoading && !error && (
        <main className="w-full min-h-screen bg-gray-200 px-[10vw] py-10 flex flex-col gap-8 text-left">
          <section className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold text-gray-800">Meus Projetos</h1>
          </section>

          <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {repositories.map((repository) => (
              <ProjectCard
                key={repository.id}
                stack={repository.language}
                projectName={repository.name}
                teacherName={repository.owner.login}
                lastUpdatedAt={new Date(repository.updated_at)}
                onResume={() => window.open(repository.html_url, "_blank")}
              />
            ))}
          </section>
        </main>
      )}
    </>
  );
}

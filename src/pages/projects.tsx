import { AlertTriangleIcon, Loader } from "lucide-react";
import { Header } from "../components/Header";
import { ProjectCard } from "../components/ProjectCard";
import { useUser } from "../contexts/UserContext";
import { useRepositories } from "../hooks/useRepositories";

export default function Projects() {
  const { user } = useUser();
  const { repositories, error, isLoading } = useRepositories(
    user.githubUsername,
  );

  return (
    <>
      <Header />

      {repositories.length === 0 && !isLoading && !error && (
        <div className="w-full min-h-screen bg-gray-200 px-[10vw] flex flex-col gap-8 items-center">
          <div className="flex flex-col gap-4 items-center mt-40">
            <AlertTriangleIcon size={200} className="text-amber-500" />
            <p className="text-gray-400 text-lg font-semibold">
              Nome de usuário do GitHub reconhecido.
            </p>
          </div>
        </div>
      )}

      {error && (
        <div className="w-full min-h-screen bg-gray-200 px-[10vw] flex flex-col gap-8 items-center">
          <div className="flex flex-col gap-4 items-center mt-40">
            <AlertTriangleIcon size={200} className="text-amber-500" />
            <p className="text-gray-400 text-lg font-semibold">
              Erro ao carregar os projetos. Por favor, tente novamente mais
              tarde.
            </p>
            <p className="text-gray-400 text-sm font-semibold">
              {error?.message}
            </p>
          </div>
        </div>
      )}

      {isLoading && (
        <div className="w-full min-h-screen bg-gray-200 px-[10vw] flex flex-col gap-8 items-center">
          <div className="flex flex-col gap-4 items-center mt-40">
            <Loader size={150} className="text-gray-400 animate-spin" />
          </div>
        </div>
      )}

      {repositories.length !== 0 && !isLoading && !error && (
        <main className="w-full min-h-screen bg-gray-200 px-[10vw] py-10 flex flex-col gap-8 text-left">
          <section className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold text-gray-800">Meus Projetos</h1>
          </section>

          <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {repositories?.map((repository) => (
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

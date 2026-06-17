import classNames from "classnames";

export const Header = () => {
  const pathname = window.location.pathname;

  return (
    <header className="flex flex-row justify-between bg-white p-4 px-[10vw]">
      <div className="flex flex-col items-center justify-center">
        <p className="text-emerald-700 text-xl font-bold ">Academia</p>
        <p className="text-gray-300 font-bold text-sm">Portal do aluno</p>
      </div>

      <nav className="flex flex-row items-center gap-12 text-gray-400/60 font-bold">
        <a
          className={classNames(
            " hover:text-emerald-700",
            pathname === "/dashboard" ? "text-emerald-700" : null,
          )}
          href="/dashboard"
        >
          Painel
        </a>
        <a
          className={classNames(
            " hover:text-emerald-700",
            pathname.includes("disciplinas") ? "text-emerald-700" : null,
          )}
          href="/dashboard/disciplinas"
        >
          Disciplinas
        </a>
        <a
          className={classNames(
            " hover:text-emerald-700",
            pathname.includes("tutor-ia") ? "text-emerald-700" : null,
          )}
          href="/dashboard/tutor-ia"
        >
          Tutor IA
        </a>
        <a
          className={classNames(
            " hover:text-emerald-700",
            pathname.includes("perfil") ? "text-emerald-700" : null,
          )}
          href="/dashboard/perfil"
        >
          Perfil
        </a>
      </nav>
    </header>
  );
};

import { Link, useLocation } from "react-router";
import classNames from "classnames";

export const Header = () => {
  const { pathname } = useLocation();

  return (
    <header className="flex flex-row justify-between bg-white p-4 px-[10vw]">
      <div className="flex flex-col items-center justify-center">
        <p className="text-emerald-700 text-xl font-bold ">Academia</p>
        <p className="text-gray-300 font-bold text-sm">Portal do aluno</p>
      </div>

      <nav className="flex flex-row items-center gap-12 text-gray-400/60 font-bold">
        <Link
          className={classNames(
            "hover:text-emerald-700",
            pathname === "/dashboard" ? "text-emerald-700" : null,
          )}
          to="/dashboard"
        >
          Painel
        </Link>
        <Link
          className={classNames(
            "hover:text-emerald-700",
            pathname.includes("projetos") ? "text-emerald-700" : null,
          )}
          to="/dashboard/projetos"
        >
          Projetos
        </Link>
        <Link
          className={classNames(
            "hover:text-emerald-700",
            pathname.includes("tutor-ia") ? "text-emerald-700" : null,
          )}
          to="/dashboard/tutor-ia"
        >
          Tutor IA
        </Link>
        <Link
          className={classNames(
            "hover:text-emerald-700",
            pathname.includes("perfil") ? "text-emerald-700" : null,
          )}
          to="/dashboard/perfil"
        >
          Perfil
        </Link>
        <Link className="hover:text-emerald-700" to="/">
          Sair
        </Link>
      </nav>
    </header>
  );
};

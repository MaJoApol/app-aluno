export const Header = () => (
  <header className="flex flex-row justify-between bg-white p-4 px-[10vw]">
    <div className="flex flex-col items-center justify-center">
      <p className="text-emerald-700 text-xl font-bold ">Academia</p>
      <p className="text-gray-300 font-bold text-sm">Portal do aluno</p>
    </div>

    <nav className="flex flex-row items-center gap-12 text-gray-400/60 font-bold">
      <a className=" hover:text-emerald-700" href="#">
        Painel
      </a>
      <a className=" hover:text-emerald-700" href="#">
        Disciplinas
      </a>
      <a className=" hover:text-emerald-700" href="#">
        Tutor IA
      </a>
      <a className=" hover:text-emerald-700" href="#">
        Perfil
      </a>
    </nav>
  </header>
);

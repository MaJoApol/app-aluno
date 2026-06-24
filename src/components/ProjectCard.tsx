import { Button } from "./Button";
import { StatusBadge } from "./StatusBadge";

export type ProjectsCardProps = {
  projectName: string;
  teacherName: string;
  lastUpdatedAt: Date;
  stack: string;
  onResume: () => void;
};

export const ProjectCard = ({
  projectName,
  lastUpdatedAt,
  stack,
  onResume,
}: ProjectsCardProps) => (
  <div className="bg-white rounded-lg p-6 flex flex-col sm:flex-row sm:items-end justify-between gap-6 shadow-sm hover:scale-102 transition-all">
    <div className="flex flex-col gap-4 flex-1">
      <div className="flex flex-row justify-between w-full">
        <StatusBadge label={"Público"} />
        <p className="text-gray-400 text-sm place-self-end">
          Última atualização: {lastUpdatedAt?.toLocaleDateString()}
        </p>
      </div>
      <div className="flex flex-col gap-0.5">
        <h3 className="text-emerald-700 font-bold text-lg">{projectName}</h3>
        {stack && <p className="text-gray-600 text-sm">Linguagem: {stack}</p>}
      </div>

      <Button variant="primary" size="md" onClick={onResume}>
        ACESSAR PROJETO
      </Button>
    </div>
  </div>
);

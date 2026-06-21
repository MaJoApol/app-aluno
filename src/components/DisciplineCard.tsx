import { Button } from "./Button";
import { StatusBadge } from "./StatusBadge";
import { ProgressBar } from "./ProgressBar";

export type DisciplineCardProps = {
  status: string;
  disciplineName: string;
  teacherName: string;
  progress: number;
  onResume: () => void;
};

export const DisciplineCard = ({
  status,
  disciplineName,
  teacherName,
  progress,
  onResume,
}: DisciplineCardProps) => (
  <div className="bg-white rounded-lg p-6 flex flex-col sm:flex-row sm:items-end justify-between gap-6 shadow-sm hover:scale-102 transition-all">
    <div className="flex flex-col gap-3 flex-1">
      <StatusBadge label={status} />
      <div className="flex flex-col gap-0.5">
        <h3 className="text-emerald-700 font-bold text-lg">{disciplineName}</h3>
        <p className="text-gray-400 text-sm">{teacherName}</p>
      </div>
      <ProgressBar value={progress} />
    <Button variant="primary" size="md" onClick={onResume}>
      ACESSAR DISCIPLINA
    </Button>
    </div>
  </div>
);

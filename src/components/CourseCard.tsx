import { Button } from "./Button";
import { StatusBadge } from "./StatusBadge";
import { ProgressBar } from "./ProgressBar";

export type CourseCardProps = {
  status: string;
  courseName: string;
  lessonName: string;
  progress: number;
  onResume: () => void;
};

export const CourseCard = ({
  status,
  courseName,
  lessonName,
  progress,
  onResume,
}: CourseCardProps) => (
  <div className="bg-white rounded-lg p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-sm">
    <div className="flex flex-col gap-3 flex-1">
      <StatusBadge label={status} />
      <div className="flex flex-col gap-0.5">
        <h3 className="text-emerald-700 font-bold text-lg">{courseName}</h3>
        <p className="text-gray-400 text-sm">{lessonName}</p>
      </div>
      <ProgressBar value={progress} />
    </div>
    <Button variant="primary" size="md" onClick={onResume}>
      RETOMAR ESTUDO
    </Button>
  </div>
);

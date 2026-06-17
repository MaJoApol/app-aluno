export type StatCardProps = {
  label: string;
  value: string;
  description: string;
};

export const StatCard = ({ label, value, description }: StatCardProps) => (
  <div className="bg-white rounded-lg p-6 flex flex-col gap-2 shadow-sm">
    <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">
      {label}
    </span>
    <span className="text-2xl font-bold text-gray-800">{value}</span>
    <span className="text-sm text-gray-400">{description}</span>
  </div>
);

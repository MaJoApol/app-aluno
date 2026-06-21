interface ProfileRowProps {
  label: string;
  value: string;
}

export default function ProfileRow({ label, value }: ProfileRowProps) {
  const isPlaceholder = value === "Não fornecido";

  return (
    <div className="flex flex-col sm:flex-row py-5 px-6 border-b border-gray-100 last:border-0 gap-2 sm:gap-4 hover:bg-gray-50/50 transition-colors">
      <div className="sm:w-1/3 text-sm font-medium text-slate-500">
        {label}
      </div>
      <div className={`sm:w-2/3 text-sm ${isPlaceholder ? "text-slate-400" : "text-slate-800"}`}>
        {value}
      </div>
    </div>
  );
}
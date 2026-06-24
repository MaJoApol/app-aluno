interface ProfileRowProps {
  label: string;
  value: string;
  isEditing?: boolean;
  onChange?: (value: string) => void;
}

export default function ProfileRow({ label, value, isEditing = false, onChange }: ProfileRowProps) {
  const isPlaceholder = !isEditing && value === "Não fornecido";

  return (
    <div className="flex flex-col sm:flex-row py-5 px-6 border-b border-gray-100 last:border-0 gap-2 sm:gap-4 hover:bg-gray-50/50 transition-colors">
      <div className="sm:w-1/3 text-sm font-medium text-slate-500">
        {label}
      </div>
      {isEditing ? (
        <input
          className="sm:w-2/3 text-sm border border-gray-200 rounded-md px-3 py-1 text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
        />
      ) : (
        <div className={`sm:w-2/3 text-sm ${isPlaceholder ? "text-slate-400" : "text-slate-800"}`}>
          {value}
        </div>
      )}
    </div>
  );
}

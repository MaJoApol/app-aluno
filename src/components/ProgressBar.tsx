export const ProgressBar = ({ value }: { value: number }) => (
  <div className="w-full pt-5 relative">
    <span
      className="absolute text-xs text-gray-500 font-medium"
      style={{ left: `${Math.min(value, 93)}%` }}
    >
      {value}%
    </span>
    <div className="w-full bg-gray-200 rounded-full h-1.5">
      <div
        className="bg-emerald-600 h-1.5 rounded-full"
        style={{ width: `${value}%` }}
      />
    </div>
  </div>
);

export const ProgressBar = ({ value }: { value: number }) => (
  <>
    <div className="w-full flex flex-row items-center pt-3 relative gap-2">
      <div className="w-full bg-gray-200 rounded-full h-1.5">
        <div
          className="bg-emerald-600 h-1.5 rounded-full"
          style={{ width: `${value}%` }}
        />
      </div>

      <span className="text-xs text-gray-500 font-medium">{value}%</span>
    </div>
  </>
);

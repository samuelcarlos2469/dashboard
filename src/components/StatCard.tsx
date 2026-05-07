interface StatCardProps {
  label: string;
  value: string;
  detail: React.ReactNode;
  icon: React.ReactNode;
}

export default function StatCard({ label, value, detail, icon }: StatCardProps) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between h-40">
      <div className="flex justify-between items-start">
        <span className="text-gray-500 font-bold text-xs uppercase tracking-wider">
          {label}
        </span>
        <div className="text-gray-400">
          {icon}
        </div>
      </div>
      <div>
        <div className="text-3xl font-bold text-gray-900 mt-2">{value}</div>
        <div className="text-sm mt-1">{detail}</div>
      </div>
    </div>
  );
}

interface QuestionItemProps {
  title: string;
  description: string;
  status: "revisao" | "publicado";
  icon: React.ReactNode;
}

const QuestionStatus = {
  revisao: {
    label: "Revisão Pendente",
    className: "bg-amber-50 text-amber-600 border border-amber-100",
  },
  publicado: {
    label: "Publicado",
    className: "bg-emerald-50 text-emerald-600 border border-emerald-100",
  },
};

// TODO: arrumar icons
// assim pra ser facil de alimentar 
// caso a proxima tarefa seja fazer funcionar o dashboard
export default function QuestionItem({ title, description, status, icon }: QuestionItemProps) {
  const { label, className } = QuestionStatus[status];

  return (
    <div className="flex items-center justify-between py-5 px-6 border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500">
          {icon}
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 leading-tight">{title}</h4>
          <p className="text-sm text-gray-400 mt-0.5">{description}</p>
        </div>
      </div>
      <div className={`px-3 py-1 rounded-full text-xs font-bold ${className}`}>
        {label}
      </div>
    </div>
  );
}

import StatCard from "./StatCard";

//se for ter que alimentar isso aqui depois, faz um service/hook
const STATS_DATA = [
  {
    label: "Alunos Ativos",
    value: "42",
    detail: <span className="text-emerald-500 font-medium">↑ 12% desde o último mês</span>,
    icon: <span className="text-xl">👥</span>
  },
  {
    label: "Exercícios Resolvidos",
    value: "1.284",
    detail: <span className="text-emerald-500 font-medium">Adequação: 94%</span>,
    icon: <span className="text-xl">✅</span>
  },
  {
    label: "Dúvidas Pendentes",
    value: "3",
    detail: <span className="text-gray-400">Maior dificuldade: Funções com *args e **kwargs</span>,
    icon: <span className="text-xl">🔴</span>
  }
];

export default function StatsRow() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {STATS_DATA.map((stat, index) => (
        <StatCard
          key={index}
          label={stat.label}
          value={stat.value}
          detail={stat.detail}
          icon={stat.icon}
        />
      ))}
    </div>
  );
}

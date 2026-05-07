import QuestionItem from "./QuestionItem";


// assim pra ser facil de alimentar 
// caso a proxima tarefa seja fazer funcionar o dashboard
type QuestionData = {
  title: string;
  description: string;
  status: "revisao" | "publicado";
  icon: React.ReactNode;
};

const QUESTIONS_DATA: QuestionData[] = [
  {
    title: "Algoritmo de Ordenação Customizado",
    description: "Criar lógica sem usar métodos embutidos (.sort)",
    status: "revisao",
    icon: <span className="text-xl">🔢</span>
  },
  {
    title: "Menu Interativo com Laço While",
    description: "Estruturas condicionais e validação de input",
    status: "publicado",
    icon: <span className="text-xl">ᯓ</span>
  }
];

export default function QuestionsTable() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <div className="px-6 py-5 border-b border-gray-50">
        <h3 className="text-gray-900 font-bold">Banco de Questões Recentes</h3>
      </div>
      <div>
        {QUESTIONS_DATA.map((question, index) => (
          <QuestionItem
            key={index}
            title={question.title}
            description={question.description}
            status={question.status}
            icon={question.icon}
          />
        ))}
      </div>
    </div>
  );
}

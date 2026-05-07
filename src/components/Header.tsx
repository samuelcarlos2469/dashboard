export default function Header() {
  return (
    <header className="flex items-center justify-between py-8 px-4 sm:px-0">
      <div>
        <h1 className="text-2xl font-bold text-blue-900">Painel da Disciplina</h1>
        <p className="text-gray-500 text-sm mt-1">
          Módulo Atual: Estruturas de Repetição e Funções
        </p>
      </div>
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-semibold transition-colors shadow-sm">
        Publicar Novo Exercício
      </button>
    </header>
  );
}

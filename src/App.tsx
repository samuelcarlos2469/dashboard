import Header from "./components/Header";
import StatsRow from "./components/StatsRow";
import QuestionsTable from "./components/QuestionsTable";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans antialiased">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Header />
        <main className="mt-8">
          <StatsRow />
          <QuestionsTable />
        </main>
      </div>
    </div>
  );
}

export default App;

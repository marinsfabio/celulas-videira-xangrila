export function App() {
  const celulas = [
    {
      nome: "Célula Maranata",
      lider: "Ronaldo",
      contato: "(99) 99999-9999",
    },
    {
      nome: "Célula Sião",
      lider: "Ana",
      contato: "(88) 88888-8888",
    },
    {
      nome: "Célula Emanuel",
      lider: "João",
      contato: "(77) 77777-7777",
    },
    {
      nome: "Célula Maranata",
      lider: "Ronaldo",
      contato: "(99) 99999-9999",
    },
    {
      nome: "Célula Sião",
      lider: "Ana",
      contato: "(88) 88888-8888",
    },
    {
      nome: "Célula Emanuel",
      lider: "João",
      contato: "(77) 77777-7777",
    },
    {
      nome: "Célula Maranata",
      lider: "Ronaldo",
      contato: "(99) 99999-9999",
    },
    {
      nome: "Célula Sião",
      lider: "Ana",
      contato: "(88) 88888-8888",
    },
    {
      nome: "Célula Emanuel",
      lider: "João",
      contato: "(77) 77777-7777",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center p-5">
      <h2 className="md:text-3xl text-2xl font-bold text-purple-700 text-center md:mb-10 mb-5">
        Células Videira Xangri-Lá
      </h2>
      <div className="max-w-4xl w-full grid gap-6 md:grid-cols-1">
        {celulas.map((celula, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 border border-purple-700 hover:scale-105 transform transition"
          >
            <h3 className="text-2xl font-bold text-purple-700">
              {celula.nome}
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              <span className="font-bold">Líder:</span> {celula.lider}
            </p>
            <p className="text-sm text-gray-600 mt-1">
              <span className="font-bold">Contato:</span> {celula.contato}
            </p>
            <button className="mt-4 px-4 py-2 bg-purple-700 text-white rounded hover:bg-purple-800 transition">
              Entrar em Contato
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

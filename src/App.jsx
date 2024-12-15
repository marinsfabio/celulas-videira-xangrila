import { FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

export function App() {
 const celulas = [
  {
   nome: "Célula Maranata",
   lider: "Ronaldo",
   contato: "(99) 99999-9999",
   contatoWhats: "51980463516",
   Rede: "Adulto",
   Cidade: "Capão da Canoa",
   Bairro: "Santa luzia",
   Endereço: "Rua Santa Elizabete, 2004",
  },
  {
   nome: "Célula Maranata",
   lider: "Ronaldo",
   contato: "(99) 99999-9999",
   Rede: "Adulto",
   Cidade: "Capão da Canoa",
   Bairro: "Santa luzia",
   Endereço: "Rua Santa Elizabete, 2004",
  },
  {
   nome: "Célula Maranata",
   lider: "Ronaldo",
   contato: "(99) 99999-9999",
   Rede: "Adulto",
   Cidade: "Capão da Canoa",
   Bairro: "Santa luzia",
   Endereço: "Rua Santa Elizabete, 2004",
  },
  {
   nome: "Célula Maranata",
   lider: "Ronaldo",
   contato: "(99) 99999-9999",
   Rede: "Adulto",
   Cidade: "Capão da Canoa",
   Bairro: "Santa luzia",
   Endereço: "Rua Santa Elizabete, 2004",
  },
  {
   nome: "Célula Maranata",
   lider: "Ronaldo",
   contato: "(99) 99999-9999",
   Rede: "Adulto",
   Cidade: "Capão da Canoa",
   Bairro: "Santa luzia",
   Endereço: "Rua Santa Elizabete, 2004",
  },
  {
   nome: "Célula Maranata",
   lider: "Ronaldo",
   contato: "(99) 99999-9999",
   Rede: "Adulto",
   Cidade: "Capão da Canoa",
   Bairro: "Santa luzia",
   Endereço: "Rua Santa Elizabete, 2004",
  },
  {
   nome: "Célula Maranata",
   lider: "Ronaldo",
   contato: "(99) 99999-9999",
   Rede: "Adulto",
   Cidade: "Capão da Canoa",
   Bairro: "Santa luzia",
   Endereço: "Rua Santa Elizabete, 2004",
  },
  {
   nome: "Célula Maranata",
   lider: "Ronaldo",
   contato: "(99) 99999-9999",
   Rede: "Adulto",
   Cidade: "Capão da Canoa",
   Bairro: "Santa luzia",
   Endereço: "Rua Santa Elizabete, 2004",
  },
  {
   nome: "Célula Maranata",
   lider: "Ronaldo",
   contato: "(99) 99999-9999",
   Rede: "Adulto",
   Cidade: "Capão da Canoa",
   Bairro: "Santa luzia",
   Endereço: "Rua Santa Elizabete, 2004",
  },
 ];

 return (
  <div className="flex flex-col p-5">
   <h2 className="md:text-3xl text-2xl font-bold text-purple-700 text-center md:mb-10 mb-5">
    Células Videira Xangri-Lá
   </h2>
   <div className="flex justify-center">
    <div className="max-w-4xl w-full grid gap-6 md:grid-cols-1">
     {celulas.map((celula, index) => (
      <div
       key={index}
       className="bg-white rounded-lg p-6 border border-purple-700"
      >
       <h3 className="text-2xl font-bold text-purple-700">{celula.nome}</h3>
       <p className="text-lg text-gray-600 mt-2">
        <span className="font-bold">Líder:</span> {celula.lider}
       </p>
       <p className="text-lg text-gray-600 mt-1">
        <span className="font-bold">Contato:</span> {celula.contato}
       </p>
       <p className="text-lg text-gray-600 mt-1">
        <span className="font-bold">Rede:</span> {celula.Rede}
       </p>
       <p className="text-lg text-gray-600 mt-1">
        <span className="font-bold">Cidade:</span> {celula.Cidade}
       </p>
       <p className="text-lg text-gray-600 mt-1">
        <span className="font-bold">Bairro:</span> {celula.Bairro}
       </p>
       <p className="text-lg text-gray-600 mt-1">
        <span className="font-bold">Endereço:</span> {celula.Endereço}
       </p>
       <div className="flex mt-4 space-x-2">
        <a
         href={`https://wa.me/${celula.contatoWhats}`}
         target="_blank"
         rel="noopener noreferrer"
         className="flex items-center bg-green-700 text-[12px] p-2 rounded text-white hover:bg-green-800"
        >
         <FaWhatsapp className="text-xl mr-2" /> Enviar mensagem
        </a>
        <a
         href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
          celula.Endereço
         )}`}
         target="_blank"
         rel="noopener noreferrer"
         className="flex items-center bg-blue-600 text-[12px] p-2 rounded text-white hover:bg-blue-700"
        >
         <FaMapMarkerAlt className="text-xl mr-2" /> Abrir no mapa
        </a>
       </div>
      </div>
     ))}
    </div>
   </div>
  </div>
 );
}

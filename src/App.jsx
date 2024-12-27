import { FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import Logo from "../src/assets/logo.png";

export function App() {
 const celulasAdultas = [
  {
   nome: "Maranata",
   lider: "Ronaldo",
   contato: "(51) 99750-3600",
   contatoWhats: "51997503600",
   Cidade: "Capão da Canoa",
   Bairro: "Santa Luzia",
   Endereço: "Rua Santa Elizabete, 2004",
   celula_Kids: "Sim",
  },
  {
   nome: "Graça Sobre Graça",
   lider: "Paulo César",
   contato: "(51) 99806-7061",
   contatoWhats: "51998067061",
   Cidade: "Xangri-Lá",
   Bairro: "Centro",
   Endereço: "Rua Rio Novo, 437",
   celula_Kids: "Não",
  },
  {
   nome: "Graça e Favor",
   lider: "Josué Machado",
   contato: "(51) 98138-1933",
   contatoWhats: "51981381933",
   Cidade: "Xangri-Lá",
   Bairro: "Centro",
   Endereço: " Rua Rio Apucaé, 144",
   celula_Kids: "Não, Quarta ás 18h",
  },
  {
   nome: "Leão da Tribo de Judá",
   lider: "Joel Santos",
   contato: "(51) 99193-4659",
   contatoWhats: "51991934659",
   Cidade: "Capão da Canoa",
   Bairro: "Santa luzia",
   Endereço: "Rua Gaspar grizza, 888",
   celula_Kids: "Sim",
  },
  {
   nome: "Abundante Graça",
   lider: "André Luis",
   contato: "(51) 99643-5120",
   contatoWhats: "51996435120",
   Cidade: "Xangri-Lá",
   Bairro: "Centro",
   Endereço: "Travessa Pedro Hygino, 1320",
   celula_Kids: "Sim",
  },
  {
   nome: "Yeshua",
   lider: "Juliano Rech",
   contato: "(51) 98121-9249",
   contatoWhats: "51981219249",
   Cidade: "Capão da Canoa",
   Bairro: "Santa Luzia",
   Endereço: "Gaspar grizza, 1605",
   celula_Kids: "Sim",
  },
  {
   nome: "Filhos do Rei",
   lider: "Eduardo Gonçalves",
   contato: "(51) 99693-8639",
   contatoWhats: "51996938639",
   Cidade: "Xangri-Lá",
   Bairro: "Centro",
   Endereço: "Rua Rio camisas, 1858",
   celula_Kids: "Sim",
  },
  {
   nome: "Os Escolhidos",
   lider: "Lauro Schlemper",
   contato: "(51) 98654-5037",
   contatoWhats: "51986545037",
   Cidade: "Xangri-Lá",
   Bairro: "Atlântida",
   Endereço: "Rua Buriti, 1440",
   celula_Kids: "Sim",
  },
  {
   nome: "Lugar Graça",
   lider: "João Vitor",
   contato: "(51) 99684-3152",
   contatoWhats: "51996843152",
   Cidade: "Xangri-Lá",
   Bairro: "Centro",
   Endereço: "Rua Pedro Higyno da Silveira, 845",
   celula_Kids: "Sim",
  },
  {
   nome: "Galileu",
   lider: "Felipe Rodrigues",
   contato: "(51) 99673-6815",
   contatoWhats: "51996736815",
   Cidade: "Xangri-Lá",
   Bairro: "Arpoador",
   Endereço: "Rua O, 258",
   celula_Kids: "Não",
  },
  {
   nome: "YAHWEH",
   lider: "Jeferson Gomes",
   contato: "(51) 98932-0518",
   contatoWhats: "51989320518",
   Cidade: "Xangri-Lá",
   Bairro: "Rainha do Mar",
   Endereço: "Rua Alexandrita, 175",
   celula_Kids: "Não, Terça ás 19h",
  },
  {
   nome: "Atos 2",
   lider: "Felipe Machado",
   contato: "(51) 99753-6535",
   contatoWhats: "51997536535",
   Cidade: "Xangri-Lá",
   Bairro: "Centro",
   Endereço: "Rua João Prudêncio, 316",
   celula_Kids: "Sim",
  },
  {
   nome: "Jeová Jireh",
   lider: "Pablo",
   contato: "(51) 99624-7498",
   contatoWhats: "51996247498",
   Cidade: "Xangri-Lá",
   Bairro: "Arpoador",
   Endereço: "Rua Brasil, Xangri-lá, 435",
   celula_Kids: "Não, Quarto ás 18:30",
  },
  {
   nome: "Otniel",
   lider: "Hiury Luiz",
   contato: "(51) 98289-0063",
   contatoWhats: "51982890063",
   Cidade: "Capão da Canoa",
   Bairro: "Zona Nova",
   Endereço: "Rua Mané Leandro, 1665",
   celula_Kids: "Sim",
  },
  {
   nome: "Jesus Vive",
   lider: "Lucas Delfino",
   contato: "(51) 99123-4303",
   contatoWhats: "51991234303",
   Cidade: "Xangri-Lá",
   Bairro: "Noiva do Mar",
   Endereço: "Av. Interbalneários, 985",
   celula_Kids: "Sim",
  },
  {
   nome: "Alfa",
   lider: "Pr. Paulo Santos",
   contato: "(51) 99566-8199",
   contatoWhats: "51995668199",
   Cidade: "Capão da Canoa",
   Bairro: "Santa Luzia",
   Endereço: "Rua General Osório, 487",
   celula_Kids: "Sim",
  },
  {
   nome: "El Elyón",
   lider: "Diego Gomes",
   contato: "(51) 99123-4303",
   contatoWhats: "51991234303",
   Cidade: "Xangri-Lá",
   Bairro: "Noiva do Mar",
   Endereço: "Rua Lírios, Xangri-Lá, 343",
   celula_Kids: "Não",
  },
 ];

 const celulasJovem = [
  {
   nome: "Yeshua",
   lider: "João Barbosa",
   contato: "(51) 99354-6544",
   contatoWhats: "51993546544",
   Cidade: "Xangri-Lá",
   Bairro: "Figueirinha",
   Endereço: "Rua Falcão Azul, 432",
  },
  {
   nome: "Yahweh",
   lider: "Ester Silva",
   contato: "(51) 99802-9493",
   contatoWhats: "51998029493",
   Cidade: "Xangri-Lá",
   Bairro: "Centro",
   Endereço: "Rua Rio Comandaí, 268",
  },
  {
   nome: "Sozo",
   lider: "Maria Eduarda Cardoso",
   contato: "(51) 99404-0200",
   contatoWhats: "51994040200",
   Cidade: "Xangri-Lá",
   Bairro: "Centro",
   Endereço: "Rua Rio Camisas, 41",
  },
  {
   nome: "Shekinah",
   lider: "Elvis Costa",
   contato: "(51) 99897-5999",
   contatoWhats: "51998975999",
   Cidade: "Xangri-Lá",
   Bairro: "Centro",
   Endereço: "Av. Paraguassu, 1689",
  },
  {
   nome: "Despertar",
   lider: "Estéfani Santos",
   contato: "(51) 99981-6352",
   contatoWhats: "51999816352",
   Cidade: "Xangri-Lá",
   Bairro: "Centro",
   Endereço: "Rua Pedro Hygino da Silveira, 1250",
  },
  {
   nome: "Conectados",
   lider: "Bruno Lazzeri",
   contato: "(51) 99109-5890",
   contatoWhats: "51991095890",
   Cidade: "Capão da Canoa",
   Bairro: "Araçá",
   Endereço: "Rua Central, Capão da Canoa, 640",
  },
  {
   nome: "Shammah ",
   lider: "Letícia",
   contato: "(51) 99594-1494",
   contatoWhats: "51995941494",
   Cidade: "Xangri-Lá",
   Bairro: "Rainha do Mar",
   Endereço: "Rua Alameda Safira, 49",
  },
  {
   nome: "Noiva de Cristo",
   lider: "Krigor Santos",
   contato: "(51) 99504-0872",
   contatoWhats: "51995040872",
   Cidade: "Xangri-Lá",
   Bairro: "Noiva do Mar",
   Endereço: "Av. Sul, Xangri-Lá, 951",
  },
  {
   nome: "Kadosh",
   lider: "Danusa Costa",
   contato: "(51) 99762-0928",
   contatoWhats: "51997620928",
   Cidade: "Xangri-Lá",
   Bairro: "Centro",
   Endereço: "Rua Rio Camisas, 800",
  },
  {
   nome: "Chamas vivas",
   lider: "Lucas Martins",
   contato: "(51) 99235-4966",
   contatoWhats: "51992354966",
   Cidade: "Xangri-Lá",
   Bairro: "Centro",
   Endereço: "Rua João Prudêncio, 345",
  },
  {
   nome: "Emaús",
   lider: "Nicolly Marjorie",
   contato: "(51) 98904-2178",
   contatoWhats: "51989042178",
   Cidade: "Xangri-Lá",
   Bairro: "Centro",
   Endereço: "Rua Rio Camisas, 524",
  },
  {
   nome: "Betel",
   lider: "Vitória",
   contato: "(51) 99875-6620",
   contatoWhats: "51998756620",
   Cidade: "Xangri-Lá",
   Bairro: "Arpoador",
   Endereço: "Rua O, Xangri-Lá, 157",
  },
 ];

 return (
  <div className="flex flex-col p-5">
   <div className="flex flex-col items-center">
    <img src={Logo} />
    <div className="max-w-4xl w-full grid gap-6 md:grid-cols-1">
     <h2 className="text-xl font-bold text-white mt-5">Rede Adulto</h2>
     {celulasAdultas.map((celula, index) => (
      <div key={index} className="bg-white rounded-lg p-6 ">
       <h3 className="text-3xl font-bold text-[#923ea3]">{celula.nome}</h3>
       <p className="text-lg text-[#1a1413] mt-2">
        <span className="font-bold">Líder:</span> {celula.lider}
       </p>
       <p className="text-lg text-[#1a1413] mt-1">
        <span className="font-bold">Contato:</span> {celula.contato}
       </p>
       <p className="text-lg text-[#1a1413] mt-1">
        <span className="font-bold">Cidade:</span> {celula.Cidade}
       </p>
       <p className="text-lg text-[#1a1413] mt-1">
        <span className="font-bold">Bairro:</span> {celula.Bairro}
       </p>
       <p className="text-lg text-[#1a1413] mt-1">
        <span className="font-bold">Endereço:</span> {celula.Endereço}
       </p>
       <p className="text-lg text-[#1a1413] mt-1">
        <span className="font-bold">Célula kids paralela:</span>{" "}
        {celula.celula_Kids}
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
         className="flex items-center bg-blue-700 text-[12px] p-2 rounded text-white hover:bg-blue-700"
        >
         <FaMapMarkerAlt className="text-xl mr-2" /> Abrir no mapa
        </a>
       </div>
      </div>
     ))}
    </div>
   </div>

   <div className="flex justify-center">
    <div className="max-w-4xl w-full grid gap-6 md:grid-cols-1">
     <h2 className="text-xl font-bold text-white mt-6">Rede Jovem</h2>
     {celulasJovem.map((celula, index) => (
      <div key={index} className="bg-white rounded-lg p-6">
       <h3 className="text-3xl font-bold text-[#923ea3]">{celula.nome}</h3>
       <p className="text-lg text-[#1a1413] mt-2">
        <span className="font-bold">Líder:</span> {celula.lider}
       </p>
       <p className="text-lg text-[#1a1413] mt-1">
        <span className="font-bold">Contato:</span> {celula.contato}
       </p>
       <p className="text-lg text-[#1a1413] mt-1">
        <span className="font-bold">Rede:</span> {celula.Rede}
       </p>
       <p className="text-lg text-[#1a1413] mt-1">
        <span className="font-bold">Cidade:</span> {celula.Cidade}
       </p>
       <p className="text-lg text-[#1a1413] mt-1">
        <span className="font-bold">Bairro:</span> {celula.Bairro}
       </p>
       <p className="text-lg text-[#1a1413] mt-1">
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

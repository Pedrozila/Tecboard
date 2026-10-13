import "./App.css";
import { Banner } from "./componentes/Banner";
import { FormularioDeEventos } from "./componentes/FormularioEvento";
import { Tema } from "./componentes/Tema";
import { useState } from "react";
import { CardEvento } from "./componentes/CardEvento";

function App() {
  console.log("App renderizou");

  const temas = [
    {
      id: "1",
      nome: "front-end",
    },
    {
      id: "2",
      nome: "back-end",
    },
    {
      id: "3",
      nome: "devops",
    },
    {
      id: "4",
      nome: "inteligência artificial",
    },
    {
      id: "5",
      nome: "data-science",
    },
    {
      id: "6",
      nome: "cloud",
    },
  ];

  const [eventos, setEventos] = useState([
    {
      capa: "https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png",
      tema: temas[0],
      data: new Date(),
      titulo: "Mulheres no front",
    },
  ]);

  function adicionarEvento(evento) {
    setEventos([...eventos, evento]);
  }

  return (
    <main>
      <header>
        <img src="/logo.png" alt="" />
      </header>
      <Banner />
      <FormularioDeEventos temas={temas} aoSubmeter={adicionarEvento} />
      <section className="container">
        {temas.map(function (tema) {
          if (!eventos.some( function(evento) {
            return evento.tema.id === tema.id
          })) {
            return null;
          }
          return (
            <section key={tema.id}>
              <Tema tema={tema} />
              <div className="enventos">
                {eventos.filter(function (evento) {
                  return evento.tema.id === tema.id
                }).map(function (evento, index) {
                  return <CardEvento evento={evento} key={index} />;
                })}
              </div>
            </section>
          );
        })}
      </section>
    </main>
  );
}

export default App;

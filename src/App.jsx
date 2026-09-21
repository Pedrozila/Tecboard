import "./App.css";
import { Banner } from "./componentes/Banner";
import { FormularioDeEventos } from "./componentes/FormularioEvento";
import { Tema } from "./componentes/Tema";

function App() {
  console.log("App renderizou");

  const temas = [
    {
      id: "1",
      nome: "Front-End",
    },
    {
      id: "2",
      nome: "Front-End",
    },
    {
      id: "3",
      nome: "Front-End",
    },
    {
      id: "4",
      nome: "Front-End",
    },
    {
      id: "5",
      nome: "Front-End",
    },
    {
      id: "6",
      nome: "Front-End",
    },
  ];

  return (
    <main>
      <header>
        <img src="/logo.png" alt="" />
      </header>
      <Banner />
      <FormularioDeEventos />
      {temas.map(function (item) {
        return (
          <section>
            <Tema tema={item} />
          </section>
        );
      })}
    </main>
  );
}

export default App;

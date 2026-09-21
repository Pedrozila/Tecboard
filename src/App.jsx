import "./App.css";
import { Banner } from "./componentes/Banner";
import { FormularioDeEventos } from "./componentes/FormularioEvento";
import { Tema } from "./componentes/Tema";

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

  return (
    <main>
      <header>
        <img src="/logo.png" alt="" />
      </header>
      <Banner />
      <FormularioDeEventos />
      {temas.map(function (item) {
        return (
          <section key={item.id}>
            <Tema tema={item} />
          </section>
        );
      })}
    </main>
  );
}

export default App;

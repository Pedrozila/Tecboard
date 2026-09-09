import "./App.css";
import { FormularioDeEventos } from "./componentes/FormularioEvento";
import { Tema } from "./componentes/Tema";

function App() {

  const temas = [
    {
      id: "1",
      nome: 'Front-End'
    },
    {
      id: "2",
      nome: 'Front-End'
    },
    {
      id: "3",
      nome: 'Front-End'
    },
    {
      id: "4",
      nome: 'Front-End'
    },
    {
      id: "5",
      nome: 'Front-End'
    },
    {
      id: "6",
      nome: 'Front-End'
    },
  ]

  return (
    <main>
      <header>
        <img src="/logo.png" alt="" />
      </header>
      <section>
        <img src="/banner.png" alt="" />
      </section>
      <FormularioDeEventos />
      <section>
         <Tema tema={temas[0]} /> 
      </section>
      <section>
         <Tema tema={temas[1]} /> 
      </section>
      <section>
         <Tema tema={temas[2]} /> 
      </section>
      <section>
         <Tema tema={temas[3]} /> 
      </section>
      <section>
         <Tema tema={temas[4]} /> 
      </section>
      <section>
         <Tema tema={temas[5]} /> 
      </section>
    </main>
  );
}

export default App;

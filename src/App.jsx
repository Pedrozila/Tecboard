import "./App.css";
import { FormularioCampo } from "./componentes/CampoDeFormulario";
import { CampoEntrada } from "./componentes/CampoDeEntrada";
import { Label } from "./componentes/Label";
import { FormularioTitulo } from "./componentes/TituloFormulario";

function FormularioDeEventos() {
  return (
    <form className="formulario-evento">
      <FormularioTitulo>Titulo do Form</FormularioTitulo>
      <FormularioCampo>
        <Label htmlFor="nomeEvento">Nome do Evento:</Label>
        <CampoEntrada props={{ type: "text", id: "nome", placeholder: "summer dev hits" }} />
      </FormularioCampo>
    </form>
  );
}

function App() {
  return (
    <main>
      <header>
        <img src="/logo.png" alt="" />
      </header>
      <section>
        <img src="/banner.png" alt="" />
      </section>
      <FormularioDeEventos />
    </main>
  );
}

export default App;

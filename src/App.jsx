import "./App.css";

function FormularioTitulo(props) {
  return <h2>{props.children}</h2>;
}

function FormularioCampo({ children }) {
  return <fieldset>{children}</fieldset>;
}

function Label ( { children, htmlFor } ) {
  return <label htmlFor={htmlFor}>{children}</label>;
}

function CampoEntrada ({props}) {
  return <input {...props} />;
}

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

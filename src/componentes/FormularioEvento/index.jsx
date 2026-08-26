import { FormularioCampo } from "../CampoDeFormulario";
import { FormularioTitulo } from "../TituloFormulario";
import { Label } from "../Label";
import { CampoEntrada } from "../CampoDeEntrada";

export function FormularioDeEventos() {
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

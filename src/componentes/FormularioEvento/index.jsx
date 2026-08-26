import './formulario-de-eventos.estilos.css';

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
        <CampoEntrada 
          type="text" 
          id="nome" 
          placeholder="summer dev hits"
          name="nomeEvento"  
        />
      </FormularioCampo>
    </form>
  );
}

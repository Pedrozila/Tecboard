import "./formulario-de-eventos.estilos.css";

import { FormularioCampo } from "../CampoDeFormulario";
import { FormularioTitulo } from "../TituloFormulario";
import { Label } from "../Label";
import { CampoEntrada } from "../CampoDeEntrada";
import { BotaoFormulario } from "../Botao";

export function FormularioDeEventos() {
  return (
    <form className="formulario-evento">
      <FormularioTitulo>Titulo do Form</FormularioTitulo>
      <div className="campos-formulario">
        <FormularioCampo>
          <Label htmlFor="nomeEvento">Nome do Evento:</Label>
          <CampoEntrada
            type="text"
            id="nomeEvento"
            placeholder="summer dev hits"
            name="nomeEvento"
          />
        </FormularioCampo>

        <FormularioCampo>
          <Label htmlFor="dataEvento">Data do Evento:</Label>
          <CampoEntrada
            type="date"
            id="dataEvento"
            placeholder="summer dev hits"
            name="dataEvento"
          />
        </FormularioCampo>
      </div>
      <div>
        <BotaoFormulario>Criar Evento</BotaoFormulario>
      </div>    
    </form>
  );
}

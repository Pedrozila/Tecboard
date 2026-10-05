import "./formulario-de-eventos.estilos.css";

import { FormularioCampo } from "../CampoDeFormulario";
import { FormularioTitulo } from "../TituloFormulario";
import { Label } from "../Label";
import { CampoEntrada } from "../CampoDeEntrada";
import { BotaoFormulario } from "../Botao";
import { ListaSuspensa } from "../ListaSuspensa";

export function FormularioDeEventos({ temas }) {
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
          <Label htmlFor="capa">
            Capa do Evento:
          </Label>
          <CampoEntrada
            type="text"
            id="capa"
            placeholder="http://...."
            name="capa"
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

         <FormularioCampo>
            <Label htmlFor="tema">
              Tema do evento
            </Label>
            <ListaSuspensa id="tema" name="tema" itens={temas}/>
          </FormularioCampo>
      </div>
      <div className="acoes">
        <BotaoFormulario>Criar Evento</BotaoFormulario>
      </div>    
    </form>
  );
}

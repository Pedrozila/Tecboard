import './titulo-formulario.estilos.css';

export function FormularioTitulo(props) {
  return <h2 className="formulario-titulo"> {props.children} </h2>;
}
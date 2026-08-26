import './titulo-formulario.estilos.css';

export function FormularioTitulo(props) {
  return <h2 className="titulo-formulario"> {props.children} </h2>;
}
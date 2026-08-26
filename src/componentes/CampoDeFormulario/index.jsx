import './campo-de-formulario.estilos.css';

export function FormularioCampo({ children }) {
  return <fieldset className="campo-form">{children}</fieldset>;
}
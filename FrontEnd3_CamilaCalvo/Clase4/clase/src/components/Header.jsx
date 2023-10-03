import Title from "./Title";

function Header(props) {
  return (
    <>
      <header className={props.className}>
        <h1>{props.className}</h1>
      </header>
      <p>{props.className}</p>
      <Title title="Contenido">
        <span>Contenido dentro de las etiquetas</span>
      </Title>
    </>
  );
}

export default Header;

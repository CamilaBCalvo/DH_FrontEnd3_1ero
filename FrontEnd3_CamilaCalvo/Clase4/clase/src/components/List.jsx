/**
 * @param {*} children: espera un arreglo de elementos
 * @param {*} user: espera un objeto con al propiedad Nombre de Usuario
 * @returns una lista de componentes
 */

function List(props) {
  console.log(props);

  let renderUse;
  if (props.user) {
    renderUse = <li>{props.user.nombreDeUsuario}</li>;
  } else {
    renderUse = <li>No hay usuario</li>;
  }

  return (
    <ul>
      {props.children}
      {renderUse}
    </ul>
  );
}

export default List;

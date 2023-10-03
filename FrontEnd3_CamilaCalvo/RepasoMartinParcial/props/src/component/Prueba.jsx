import { useState } from "react";
function Prueba(props) {
  return (
    <>
    </>
  );
}
export default Prueba;



/*
------------------------------------------ PROPS - Resolucion y explicacion
function Prueba(props) {
        --> ESTE PRIMER CONST HACE UQE ABAJO NO NECESITES PONER EL PROPS.XXXXX
  const { footer, header, children } = props;
  return (
    <>
      <p>{header}</p>
      <p>{children}</p>
      <p>{footer}</p>
    </>
  );
}
export default Prueba;
*/

/*
------------------------------------------ STATE - Resolucion y explicacion
import { useState } from "react";
function Prueba(props) {
    --> ACA VOY A PONER UN const, Y EN LOS CORCHETES [] PRIMERO VA LA VARIABLE (likes),
    --> DESPUES LA FUNCION QUE VA A MODIFICAR ESE ESTADO (setLike)
    --> Y EN useState PONGO EL VALOR CON EL QUE VA A ARRANCAR, EN ESTE CASO 0
  const [likes, setLike] = useState(0);

    --> TENEMOS QUE HACER QUE AL HACER CLICK SE SUME UNO EN LA FUNCION setLikes
    --> AGREGAMOS EL onClick EN EL button
    --> ARMAMOS LA const DE SUMA DE UN LIKE CREANDO sumar1Like Y AGREGANDOLO ABAJO EN EL onClick
  const sumar1Like = () => {
      setLike(likes + 1)
  }

  const restar1Like = () => {
      setLike(likes - 1)
  }

  return (
    <>
    <p>{likes}</p>
      <button onClick={sumar1Like}>Dar Like</button>
      <button onClick={restar1Like}>Quitar Like</button>
    </>
  );
}
export default Prueba;
*/
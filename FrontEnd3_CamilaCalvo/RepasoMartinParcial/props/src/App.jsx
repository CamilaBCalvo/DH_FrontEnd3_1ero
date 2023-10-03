import { useState } from "react";
import "./App.css";
import Formulario from "./component/Formulario";
import Card from "./component/Card";
// import Prueba from "./component/Prueba";

function renderizarLibro(libroNombre, libroAutor, libroHojas, libroEditorial) {
  return setlibro([
    ...libro,
    { libroNombre, libroAutor, libroHojas, libroEditorial },
  ]);
}

/* function renderizarLibro(libroNombre,libroAutor,libroHojas,libroEditorial){
  <>
  <p>Nombre del Libro {libroNombre}</p>
  <p>Nombre del Autor {libroAutor}</p>
  <p>Cantidad de hojas {libroHojas}</p>
  <p>Nombre de la Editorial {libroEditorial}</p>
  </>
} */

function App() {
  const [libro, setLibro] = useState({});
  const guardarLibro = (
    libroNombre,
    libroAutor,
    libroHojas,
    libroEditorial
  ) => {
    setLibro({ libroNombre, libroAutor, libroHojas, libroEditorial });
  };
  return (
    <>
      {/* --> Comentamos el Prueba/ para seguir con un Formulario */}
      {/* <Prueba/> */}
      <div>
        <h1>Club de Lectura</h1>
        <h2>Ingrese un libro para el Club de Lectura del mes</h2>
      </div>
      <Formulario guardarLibro={guardarLibro} />

      {/* QUIERO ACLARAR EN ESTE PUNTO QUE NO LOGRABA HACER QUE NO ME APAREZCA LA CARD FIJA 
      QUE SOLO SE VEA CUANDO LOS DATOS ESTABAN OK, PERO POR CONSOLA YO VEÍA QUE SE GUARDABAN.
      GOOGLEANDO ENCONTRÉ ESTA OPCION DE OBJECT.KEYS (ME SONABA DE VER ALGO ASI EN LA MATERIA DE BACKEND) 
      EN STACKOVERFLOW (BUSQUÉ: CÓMO COMPROBAR UN OBEJTO VACÍO JS), 
      NO SE SI ESTARÁ BIEN, PERO CORRIÓ, ASIQUE ESPERO QUE SI :) */}

      {Object.keys(libro).length === 0 ? undefined : (
        <Card
          libro={libro.libroNombre}
          autor={libro.libroAutor}
          hojas={libro.libroHojas}
          editorial={libro.libroEditorial}
        />
      )}
      <p></p>
    </>
  );
}

export default App;

/*
PROPS - Resoluciones y explicacion
function App() {
  return (
    <>
      <Prueba footer="props.footer" header="props.header">
        esto es children
      </Prueba>
    </>
  );
}

export default App;
*/

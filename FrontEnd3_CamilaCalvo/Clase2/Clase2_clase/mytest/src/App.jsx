import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//function getRandomString(){
//  return "Juan"
//}

//COMPONENTE --> es una funcion que empieza en mayuscula y retorna JSX. Iria en otro archivo.
function Componente(){
  return(
    <div>
      <p>lalala</p>
      Componente</div>
  )
}

function App() {

  let nombre = "Juan"
  nombre = "Pedro"
  let isPedro = true

  function unaFuncion(){
    console.log("hola")
  }

  function unaFuncion2(valor){
    console.log(valor)
  }

  return (
    <>
     <div className='colorBlue'>
       { isPedro ? <div>es Pedro</div> : null}
       Holis
       <p>Chau</p>
     </div>
     <Componente />
     <p>otra cosa</p>
     <button onClick={unaFuncion}>Click</button>
     <button onClick={(e) => unaFuncion2(123)}>Click2</button>
    </>
  )
}

export default App


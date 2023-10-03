import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import React from "react";
import TestComponent from "./Components/TestComponents";
import Header from "./Components/Header";

function Componente() {
  return (
    <div>
      <p>lalala</p>
      Componente
    </div>
  );
}

function App() {
  let nombre = "Juan";
  nombre = "Pedro";
  let isPedro = true;

  function unaFuncion() {
    console.log("hola");
  }

  function unaFuncion2() {
    console.log("123");
  }

  return (
    <>
      <Header />
      <TestComponent />
      <div className="colorBlue">
        {isPedro ? <div>es Pedro</div> : null}
        Holis
        <p>Chau</p>
        <p>{nombre}</p>
      </div>
      <Componente />
      <p>otra cosa</p>
      <button onClick={unaFuncion}>Click</button>
      <button onClick={unaFuncion2}>Click2</button>
    </>
  );
}

export default App;

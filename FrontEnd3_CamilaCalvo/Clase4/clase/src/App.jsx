import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Title from "./components/Title";
import List from "./components/List";
import ghUsers from "../../../../F3-classes-vite/src/fakeApi/ghUser.json";
import Button from "./components/Button";

function App() {
  function handleClick() {
    console.log("holis");
  }

  console.log(ghUsers);

  return (
    <>
      <div>
        <Button onClick={handleClick} className="btn" disabled loading>
          Click me!!
        </Button>
        <img src={ghUsers.avatar_url} alt={ghUsers.name}></img>
      </div>
    </>
  );
}
export default App;

import './App.css'
import LudoBoard from "./LudoBoard";
import {useState } from "react";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <LudoBoard/>
     
    </>
  );
}

export default App;

import { useState } from "react";
import Tombol from "./Tombol";

export default function ParenTombol() {
  const [counter, setCounter] = useState(0);
  const handleButtonClick = (change) => {
    setCounter((prevCount) => {return prevCount + change});
  };

  return (
    <>
      <h1>{counter}</h1>
      <Tombol onButtonClick={handleButtonClick} btnType="dec"> -1 </Tombol>
      <Tombol onButtonClick={handleButtonClick} btnType="inc"> +1 </Tombol>
      <hr />
      {/* <Tombol>Prop Children is required</Tombol> */}
    </>
  );
}

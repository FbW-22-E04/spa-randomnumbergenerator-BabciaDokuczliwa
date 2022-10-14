import React from "react";
import { useState } from "react";

function RandomList() {
  const [randomNumbers, setRandomNumbers] = useState([]);
  function generateRandomNumber() {
    let number = Math.floor(Math.random() * 100);
    setRandomNumbers([...randomNumbers, number]);
  }
  return (
    <div>
      <ul>
        {randomNumbers.map((el, index) => (
          <li key={index}>{el}</li>
        ))}
      </ul>
      <button onClick={() => generateRandomNumber()}>add random number</button>
    </div>
  );
}

export default RandomList;

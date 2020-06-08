import React from "react";
import TM from "./TM";

function App() {
  return (
    <div className="App">
      <h1
        style={{
          fontSize: "50px",
          margin: "15px",
          textAlign: "center",
        }}
      >
        Vizualizacija Turingove mašine
      </h1>
      <p
        style={{
          margin: "15px",
          textAlign: "center",
        }}
      >
        Unesite simbole alfabeta, listu stanja, listu akcija te početno stanje
        trake.
      </p>
      <TM></TM>
    </div>
  );
}

export default App;

import dice from "./assets/images/icon-dice.svg";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [advice, setAdvice] = useState({
    slip: {
      id: 1,
      advice:
        "it is easy to sit up and take notice, what's difficult is getting up and taking action",
    },
  });

  async function getAdvice() {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");

      if (response.ok) {
        setAdvice(await response.json());
      } else {
        throw response;
      }
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <main>
      <article>
        <h3> advice #{advice?.slip.id}</h3>
        <q>{advice?.slip.advice}</q>
        <div className="separator-container">
          <div className="separator"></div>
          <div className="divider"></div>
          <div className="separator"></div>
        </div>
      </article>
      <div onClick={() => getAdvice()} className="dice">
        <img src={dice} alt="dice" />
      </div>
    </main>
  );
}

export default App;

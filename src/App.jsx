import dice from "./assets/images/icon-dice.svg";
import "./App.css";

function App() {
  return (
    <main>
      <article>
        <h3>advice #117</h3>
        <q>
          it is easy to sit up and take notice, what's difficult is getting up
          and taking action
        </q>
        <div className="separator-container">
          <div className="separator"></div>
          <div className="divider"></div>
          <div className="separator"></div>
        </div>
      </article>
      <div className="dice">
        <img src={dice} alt="dice" />
      </div>
    </main>
  );
}

export default App;

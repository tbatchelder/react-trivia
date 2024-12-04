import "./App.css";
import Welcome from "./components/Welcome";
import Instructions from "./components/Instructions";
import StartGame from "./components/StartGame";

function App() {
  return (
    <>
      <div className="container">
        <Welcome />
        <Instructions />
        <StartGame />
      </div>
    </>
  );
}

export default App;

import "./App.css";
import Home from "./Components/Home";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  console.log(import.meta.env.VITE_PORT);
  return (
    <>
      <div>
        <Home />
      </div>
    </>
  );
}

export default App;

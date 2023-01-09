import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";

function App() {
  return (
    <div className="App">
      <header className="">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;

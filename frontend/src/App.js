import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar, Home } from "./layouts";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

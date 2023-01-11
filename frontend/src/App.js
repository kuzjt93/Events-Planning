import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar, Home } from "./layouts";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <p>hello</p>
      <Navbar />
      <Routes>
        <Route path="home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

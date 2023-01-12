import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import MenuView from "./Menu/MenuView";
import { MenuForm } from "./Menu/MenuForm";

function App() {
  return (
    <div className="App">
      <header className="">
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
          <Route path="/menu" element={<MenuForm />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;

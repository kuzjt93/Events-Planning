import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar, Home } from "./layouts";
import "bootstrap/dist/css/bootstrap.min.css";
import { GuestHomePage } from "./guests/GuestHomePage";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="guest-list" element={<GuestHomePage />} />
			</Routes>
		</div>
	);
}

export default App;

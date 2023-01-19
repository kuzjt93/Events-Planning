import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import { Navbar, Home } from "./layouts";

import { GuestHomePage } from "./guests/GuestHomePage";
import { EditGuestPage } from "./guests/EditGuestPage";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Container fluid>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="guest-list" element={<GuestHomePage />} />
					<Route path="guest-list/:guestId/edit" element={<EditGuestPage />} />
				</Routes>
			</Container>
		</div>
	);
}

export default App;

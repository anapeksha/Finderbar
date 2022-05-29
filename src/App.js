import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Browse, Home } from "./pages";

const App = () => {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path="/Finderbar" element={<Home />} />
				<Route path="/Finderbar/browse" element={<Browse />} />
			</Routes>
		</div>
	);
};

export default App;

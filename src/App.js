import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Browse, Home, ViewMovie } from "./pages";

const App = () => {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path="/Finderbar" element={<Home />} />
				<Route path="/Finderbar/browse" element={<Browse />} />
				<Route path="/Finderbar/browse/id/:id" element={<ViewMovie />} />
			</Routes>
		</div>
	);
};

export default App;

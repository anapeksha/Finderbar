import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Browse, Home, Trending } from "./pages";

const App = () => {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path="/Finderbar" element={<Home />} />
				<Route path="/Finderbar/browse" element={<Browse />} />
				<Route path="/Finderbar/trending" element={<Trending />} />
			</Routes>
		</div>
	);
};

export default App;

import { GlobalStyles } from "@mui/material";
import "animate.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<GlobalStyles
				styles={{
					body: {
						backgroundColor: "#0d1116",
						WebkitFontSmoothing: "antialiased",
						MozOsxFontSmoothing: "grayscale",
					},
				}}
			/>
			<App />
		</BrowserRouter>
	</React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

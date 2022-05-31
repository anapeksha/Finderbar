import { createTheme, Pagination, Stack, ThemeProvider } from "@mui/material";
import * as React from "react";

const theme = createTheme({
	palette: {
		mode: "dark",
		primary: {
			main: "#c0c0c0",
		},
	},
});

const Paginate = (props) => {
	const handleChange = (page) => {
		props.setPage(page);
		window.scroll(0, 0);
	};
	return (
		<Stack
			spacing={2}
			className="animate__animated animate__fadeIn animate__fast"
		>
			<ThemeProvider theme={theme}>
				<Pagination
					count={props.pages || 10}
					color="primary"
					onChange={(e) => {
						// @ts-ignore
						handleChange(e.target.textContent);
					}}
					style={{
						display: "flex",
						justifyContent: "center",
						marginTop: "0.5vh",
					}}
					hideNextButton
					hidePrevButton
					className="custom-pagination"
				/>
			</ThemeProvider>
		</Stack>
	);
};

export default Paginate;

import { createTheme, Pagination, Stack, ThemeProvider } from "@mui/material";
import * as React from "react";

const theme = createTheme({
	palette: {
		mode: "dark",
		primary: {
			main: "#f5f5f5",
		},
	},
});

const Paginate = (props) => {
	const handleChange = (page) => {
		props.setPage(page);
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "smooth",
		});
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

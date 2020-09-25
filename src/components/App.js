import React from "react";
import { ThemeProvider } from "styled-components";
import AppRouter from "../router/AppRouter";
import GlobalStyles from "../styles/base";
import { colors } from "../styles/base/colors";

const lightTheme = {
	name: "light",
	bg: colors.lightGreen,
	foreground: colors.aqua,
	textColor1: colors.bluish,
	textColor2: colors.black,
	linkColor: colors.red,
	secondary: colors.gray3,
	hover: colors.gray5,
	colors: colors,
};

function App() {
	return (
		<ThemeProvider theme={lightTheme}>
			<GlobalStyles />
			<AppRouter />
		</ThemeProvider>
	);
}

export default App;

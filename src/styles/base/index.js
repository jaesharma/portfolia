import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
	*{
		box-sizing: border-box;
	}
	
	body {
	  margin: 0;
	  font-family: 'PT Serif', serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
	    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
	    sans-serif;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	  background-image: linear-gradient(to right, rgba(7, 27, 82, 1) 0% ,rgba(0, 128, 128, 1) 100%);
	}
`;

export default GlobalStyles;
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap');
	${reset}

	* {
		font-family: "Noto Sans KR", sans-serif !important;
		font-style: normal !important;
	}
`;

export default GlobalStyle;

import styled from "styled-components";

export const StyledHeader = styled.div`
	position: fixed;
	top: 0;
	width: 100vw;
	height: 8rem;
	display: flex;
	font-family: "Grandstander", cursive;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border: none;
	border-bottom: 1px solid black;
	background-image: linear-gradient(
		to right,
		rgba(7, 27, 82, 1) 0%,
		rgba(0, 128, 128, 1) 100%
	);
	z-index: 2;
`;

export const StyledHeading = styled.div`
	font-size: 2rem;
	color: ${({ theme }) => theme.colors.whitish};
`;

export const StyledHeaderBar = styled.div`
	display: none;
	background: ${({ theme }) => theme.colors.blue1};
	position: fixed;
	top: 0;
	left: 0;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 4rem;
	font-size: 2.4rem;
	@media (max-width: ${({ theme }) => theme.breakpoint}) {
		display: flex;
	}
`;

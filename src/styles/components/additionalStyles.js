import styled from "styled-components";
import { FadeInRight } from "./animations";

export const StyledCanvas = styled.div`
	background-image: linear-gradient(
		to right,
		rgba(7, 27, 82, 1) 0%,
		rgba(0, 128, 128, 1) 100%
	);
	width: 100vw;
	height: 100vh;
	position: fixed;
`;

export const StyledMessage = styled.div`
	font-size: 1.5rem;
	position: absolute;
	top: 50%;
`;

export const StyledSubContainer = styled.div`
	margin: 0;
	top: 0;
	height: 100vh;
	display: flex;
	flex-flow: row wrap;
	justify-content: space-around;
	align-items: flex-start;
	padding: 2rem 0 4rem 0;
	overflow-y: scroll;
	${(props) => {
		if (props.type === "window") {
			return "justify-content: flex-start; padding: 2rem 1rem;";
		}
	}}
	transition: all 0.1s ease-in-out;
	animation: ${FadeInRight} 0.3s ease;
`;

export const StyledCols = styled.div`
	display: flex;
	flex-direction: column;
	${(props) => {
		switch (props.type) {
			case "longCol":
				return "overflow-x: hidden;overflow-wrap: break-word;height: 100%;width: 60%;padding: 1rem 2rem 2rem 2rem;";
		}
	}}
`;

export const StyledBlockTitle = styled.div`
	font-size: 1.5rem;
	text-decoration: underline;
`;

export const StyledSubTitle = styled.div`
	font-size: 1.2rem;
	font-weight: bold;
	width: ${(props) => (props.width ? props.width : "100px")};
`;

export const StyledValue = styled.div`
	font-size: 1.2rem;
	width: ${(props) => (props.width ? props.width : "200px")};
	margin: 0;
	margin-left: ${(props) => (props.marginLeft ? props.marginLeft : 0)};
	${(props) => {
		if (props.bold) {
			return "font-weight: bold;";
		}
	}}
`;

export const StyledSubBlock = styled.div`
	height: 100%;
	width: 20%;
	border-right: 1px solid black;
	display: flex;
	flex: 1;
	justify-content: center;
	align-items: center;
	background: ${(props) =>
		props.isActive ? props.theme.colors.blue2 : "transparent"};
`;

export const StyledHollowDiv = styled.div`
	display: none;
	@media (max-width: ${({ theme }) => theme.breakpoint}) {
		display: block;
	}
`;

export const StyledHoverIcon = styled.img`
	width: 4rem;
	height: 4rem;
	opacity: 0.8;
	position: fixed;
	outline: none;
	bottom: 3rem;
	right: 1.5rem;
	background: white;
	border-radius: 50%;
	transition: all 0.3s ease-in-out;
`;

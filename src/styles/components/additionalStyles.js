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
	align-items: center;
	padding: 0 0 4rem 0;
	overflow-y: scroll;
	${(props) => {
		if (props.type === "window") {
			return "justify-content: flex-start; padding: 0 1rem 2rem 1rem;";
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
	margin: 0 0.3rem;
	width: ${(props) => (props.width ? props.width : "200px")};
	${(props) => {
		if (props.bold) {
			return "font-weight: bold;";
		}
	}}
`;

import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledBackdrop = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	display: flex;
	overflow: hidden;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background: rgba(0, 0, 0, 0.4);
	z-index: 4;
`;
export const StyledViewProjectModal = styled(motion.div)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background: ${({ theme }) => theme.colors.gray1};
	color: ${({ theme }) => theme.colors.blue2};
	overflow-y: hidden;
	width: ${(props) => (props.width ? props.width : "80%")};
	height: ${(props) => (props.height ? props.height : "90%")};
	${(props) => {
		switch (props.type) {
			case "rows":
				return "flex-direction: row;";
			case "cols":
				return "flex-direction: column;";
		}
	}}
`;

export const StyledProjectTitle = styled.h4`
	font-size: 2rem;
	width: 100%;
	background: transparent;
	display: flex;
	margin: 0.7rem 0;
	justify-content: center;
	align-items: center;
`;
export const StyledPara = styled.p`
	font-size: ${(props) => props.size};
	text-align: left;
	color: black;
`;

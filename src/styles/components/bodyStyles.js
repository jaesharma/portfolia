import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledBody = styled(motion.div)`
	display: flex;
	flex-flow: row wrap;
	float: left;
	justify-content: center;
	overflow-y: scroll;
	position: relative;
	top: 4rem;
	padding: 6rem 0;
	height: 100%;
	width: 100%;
	background-image: linear-gradient(
		to right,
		rgba(7, 27, 82, 1) 0%,
		rgba(0, 128, 128, 1) 100%
	);
	color: ${({ theme }) => theme.textColor1};
`;

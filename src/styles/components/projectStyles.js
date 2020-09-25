import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledTitle = styled.p`
	font-size: 1.4rem;
`;

export const StyledImage = styled.img`
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	border: none;
	margin-left: 0.6rem;
`;

export const StyledProjectCard = styled(motion.div)`
	display: flex;
	flex-direction: column;
	margin: 1rem;
	width: 20rem;
	height: 22rem;
	background: orange;
	justify-content: center;
	align-items: center;
	color: ${({ theme }) => theme.textColor2};
	border: none;
	border-radius: 4%;
	box-shadow: 10px 10px 1rem black;
	&:hover {
		cursor: pointer;
	}
`;

export const StyledLink = styled.a`
	font-size: 1.3rem;
	text-decoration: none;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: flex-end;
	margin: 0;
	padding: 0;
	margin-top: 0.6rem;
	color: ${({ theme }) => theme.linkColor};
	&:hover {
		background: white;
	}
`;

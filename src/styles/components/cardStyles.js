import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledCard = styled(motion.div)`
	display: flex;
	flex-direction: column;
	margin: 1rem;
	min-width: 17rem;
	min-height: 16rem;
	background: ${({ theme }) => theme.colors.blue3};
	justify-content: center;
	align-items: center;
	color: black;
	border: none;
	border-radius: 4%;
	box-shadow: 10px 10px 1rem black;
	&:hover {
		cursor: pointer;
	}
`;

export const StyledUserProfile = styled.img`
	width: 12rem;
	height: 12rem;
	border-radius: 50%;
`;

export const StyledUserName = styled.p`
	font-size: 2rem;
	margin: 0;
	margin-top: 1rem;
	padding: 0;
`;

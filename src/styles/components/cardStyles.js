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
	@media (max-width: ${({ theme }) => theme.breakpoint}) {
		min-width: 14rem;
		min-height: 18rem;
		max-height: 18rem;
	}
	transition: all 0.3s ease-in-out;
`;

export const StyledUserProfile = styled.img`
	width: 12rem;
	height: 12rem;
	border-radius: 50%;
	@media (max-width: ${({ theme }) => theme.breakpoint}) {
		width: 8rem;
		height: 8rem;
	}
	transition: all 0.3s ease-in-out;
`;

export const StyledUserName = styled.p`
	font-size: 2rem;
	margin: 0;
	margin-top: 1rem;
	padding: 0;
	transition: all 0.3s ease-in-out;
`;

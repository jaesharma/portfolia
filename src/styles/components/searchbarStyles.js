import styled from "styled-components";

export const StyledSearchbar = styled.input`
	width: 16rem;
	height: 3rem;
	font-size: 1.2rem;
	padding: 0 1rem;
	margin: 8px 0;
	z-index: 3;
	border: none;
	outline: none;
	background: ${({ theme }) => theme.colors.lightBlue};
`;

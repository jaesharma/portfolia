import styled from "styled-components";

export const StyledHeadingBlock = styled.div`
	width: 100%;
	height: 1.6rem;
	padding: 0.3rem;
	margin: 0;
	margin-top: 1rem;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: all 0.3s ease-in-out;
`;

export const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	overflow-x: hidden;
	overflow-y: scroll;
	justify-content: flex-start;
	align-items: flex-start;
	width: 100%;
	&::-webkit-scrollbar {
		display: none;
	}
	transition: all 0.3s ease-in-out;
`;

export const StyledHeading2 = styled.div`
	font-size: ${(props) => props.size};
	color: ${(props) => (!!props.color ? props.color : "black")};
	margin-top: 1rem;
	transition: all 0.3s ease-in-out;
`;

export const StyledLabel = styled.label`
	font-size: 1rem;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	text-align: left;
	width: 100px;
	line-height: 26px;
	margin-bottom: 10px;
	&:input {
		height: 20px;
		flex: 0 0 200px;
	}
	transition: all 0.3s ease-in-out;
`;

export const StyledRow = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: space-between;
	margin: 0.4rem;
	width: 100%;
	margin-left: ${(props) => (props.marginLeft ? props.marginLeft : 0)};
	transition: all 0.3s ease-in-out;
`;

export const StyledSubmitButton = styled.input`
	width: 100%;
	height: 2rem;
	font-size: 1.5rem;
	display: flex;
	justify-content: center;
	align-items: center;
	background: ${({ theme }) => theme.colors.blue1};
	color: white;
	outline: none;
	border: none;
	margin: 0;
	&:hover {
		cursor: pointer;
		background: ${({ theme }) => theme.colors.blue2};
	}
	transition: all 0.3s ease-in-out;
`;

export const StyledInputField = styled.input`
	background: none;
	border: none;
	border-bottom: 1px solid gray;
	outline: none;
	font-size: 1rem;
	padding: 0 0.3rem;
	transition: all 0.3s ease-in-out;
	margin: 0.4rem 0;
	${(props) => {
		if (props.marginLeft) {
			return "margin-left: 1.4rem;";
		}
	}}
`;

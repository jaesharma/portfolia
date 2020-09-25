import styled from "styled-components";

export const StyledButtonsPlate = styled.div`
	display: flex;
	flex-direction: row;
	position: fixed;
	right: 5%;
	transition: all 0.3s ease-in-out;
`;

export const StyledProfile = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	&:hover {
		cursor: pointer;
	}
	transition: all 0.3s ease-in-out;
`;

export const StyledProfileIcon = styled.img`
	border: 1px solid ${({ theme }) => theme.colors.skyish};
	border-radius: 50%;
	background: ${({ theme }) => theme.colors.skin};
	width: 3.5rem;
	height: 3.5rem;
	transition: all 0.3s ease-in-out;
`;

export const StyledUsername = styled.p`
	font-size: 1rem;
	margin: 0;
	margin-top: 0.3rem;
	color: ${({ theme }) => theme.textColor2};
	transition: all 0.3s ease-in-out;
`;

export const StyledImgIcon = styled.img`
	width: 3.6rem;
	height: 3.6rem;
	margin: 0 0.2rem 0.2rem 0.4rem;
	opacity: 0.8;
	${(props) => {
		if (props.type === "edit") {
			return "position: fixed; width: 2rem; height: 2rem; top: 2rem; right: 12rem;";
		}
	}}
	&:hover {
		opacity: 1;
		cursor: pointer;
	}
	transition: all 0.3s ease-in-out;
`;

export const StyledBtn = styled.div`
	width: ${(props) => (props.width ? props.width : "100%")};
	height: 2rem;
	font-size: 1.5rem;
	display: flex;
	justify-content: center;
	align-items: center;
	background: ${({ theme }) => theme.secondary};
	color: black;
	opacity: 0.8;
	outline: none;
	border: none;
	margin: 0;
	${(props) => {
		switch (props.size) {
			case "sm":
				return "font-size: 1.2rem;margin: .4rem 0rem;";
		}
	}};
	&:hover {
		opacity: 1;
		cursor: pointer;
		background: ${({ theme }) => theme.hover};
	}
	transition: all 0.3s ease-in-out;
`;

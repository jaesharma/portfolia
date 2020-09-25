import React from "react";
import {
	StyledCard,
	StyledUserProfile,
	StyledUserName,
} from "../styles/components/cardStyles";
import { StyledPara } from "../styles/components/modalStyles";
import { history } from "../router/AppRouter";

const Card = ({ value }) => {
	const clickHandler = () => {
		history.push(`/portfolio/${value.id}`);
	};

	return (
		<StyledCard
			layout
			whileHover={{ scale: 1.12 }}
			key={value.id}
			onClick={() => clickHandler()}
		>
			<StyledUserProfile src={value.profile_pic} />
			<StyledUserName>{value.name}</StyledUserName>
			<StyledPara size="1rem">{value.email}</StyledPara>
		</StyledCard>
	);
};

export default Card;

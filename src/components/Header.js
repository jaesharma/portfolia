import React from "react";
import { StyledHeader, StyledHeading } from "../styles/components/headerStyles";
import Searchbar from "./Searchbar";
import { connect } from "react-redux";
import ButtonsPlate from "./ButtonsPlate";

const Header = ({ setQuery, uid }) => {
	return (
		<StyledHeader>
			<StyledHeading>Portfolia</StyledHeading>
			<Searchbar setQuery={setQuery} />
			<ButtonsPlate />
		</StyledHeader>
	);
};

const mapStateToProps = (state) => {
	return {
		uid: state.authenticationReducer.data.id,
	};
};

export default connect(mapStateToProps)(Header);

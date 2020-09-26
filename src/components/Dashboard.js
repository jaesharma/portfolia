import React, { useState } from "react";
import Header from "./Header";
import { NavLink } from "react-router-dom";
import MainBody from "./MainBody";
import { startLogin } from "../actions";
import { connect } from "react-redux";
import {
	StyledCanvas,
	StyledHollowDiv,
	StyledHoverIcon,
} from "../styles/components/additionalStyles";

const Dashboard = ({
	dispatch,
	uid,
	authenticated,
	profile_pic,
	startLogin,
}) => {
	const [query, setQuery] = useState(null);

	return (
		<StyledCanvas>
			<Header setQuery={setQuery} />
			<MainBody query={query} />
			<StyledHollowDiv>
				{(authenticated && (
					<NavLink to={`/portfolio/${uid}`}>
						<StyledHoverIcon src={profile_pic} />
					</NavLink>
				)) || (
					<StyledHoverIcon
						onClick={startLogin}
						src="/images/login.png"
					/>
				)}
			</StyledHollowDiv>
		</StyledCanvas>
	);
};

const mapStateToProps = (state, props) => {
	return {
		authenticated: state.authenticationReducer.isAuthenticated,
		uid: state.authenticationReducer.data.id,
		profile_pic: state.authenticationReducer.data.profile_pic,
	};
};

const mapDispatchToProps = (dispatch) => ({
	startLogin: () => dispatch(startLogin()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

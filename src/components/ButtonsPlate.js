import React, { useState } from "react";
import {
	StyledProfile,
	StyledButtonsPlate,
	StyledUsername,
	StyledImgIcon,
} from "../styles/components/buttonStyles";
import { StyledCols } from "../styles/components/additionalStyles";
import { NavLink } from "react-router-dom";
import ProfileIcon from "./ProfileIcon";
import { connect } from "react-redux";
import { startLogin } from "../actions";
import Modal from "./Modal";

const ButtonsPlate = ({ authenticated, data, startLogin }) => {
	const [modalState, setModalState] = useState(false);

	return (
		<React.Fragment>
			{modalState && <Modal setModalState={setModalState} />}
			<StyledButtonsPlate>
				{(authenticated && (
					<StyledProfile>
						<NavLink to={`/portfolio/${data.id}`}>
							<StyledCols>
								<ProfileIcon icon={data.profile_pic} />
								<StyledUsername>{data.username}</StyledUsername>
							</StyledCols>
						</NavLink>
						<StyledImgIcon
							onClick={() => setModalState(true)}
							src="/images/add.png"
						/>
					</StyledProfile>
				)) || <h3 onClick={startLogin}>Login</h3>}
			</StyledButtonsPlate>
		</React.Fragment>
	);
};

const mapStateToProps = (state) => {
	return {
		authenticated: state.authenticationReducer.isAuthenticated,
		data: state.authenticationReducer.data,
	};
};

const mapDispatchToProps = (dispatch) => ({
	startLogin: () => dispatch(startLogin()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ButtonsPlate);

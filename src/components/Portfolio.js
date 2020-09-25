import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { startLogout } from "../actions/";
import _ from "lodash";
import {
	StyledContainer,
	StyledUser,
	StyledPortfolio,
	StyledUserPic,
	StyledUserName,
	StyledSections,
	StyledSection,
	StyledUserDetails,
} from "../styles/components/portfolioStyles";
import PortfolioWindow from "./PortfolioWindow";
import Projects from "./Projects";
import EditPortfolio from "./EditPortfolio";
import ViewProjectModal from "./ViewProjectModal";

const Portfolio = ({
	dispatch,
	authenticated,
	user,
	authData,
	projects,
	userProjects,
	startLogout,
}) => {
	const [activeWindow, setActiveWindow] = useState(0);
	const [viewProject, setViewProject] = useState(null);
	const [editorMode, setEditorMode] = useState(false);

	if (!user || user.length === 0) {
		return <div>user does not exist</div>;
	}

	const clickHandler = (index) => {
		setEditorMode(false);
		setActiveWindow(index);
	};

	return (
		<StyledContainer>
			{!!viewProject && (
				<ViewProjectModal
					project={viewProject}
					setViewProject={setViewProject}
				/>
			)}
			<StyledUser>
				<StyledUserPic src={user[0].profile_pic} />
				<StyledUserDetails>
					<StyledUserName>{user[0].name}</StyledUserName>
					<StyledUserName>{user[0].email}</StyledUserName>
					<StyledUserName>{user[0].tag}</StyledUserName>
				</StyledUserDetails>
				<StyledSections>
					<StyledSection
						onClick={() => clickHandler(0)}
						status={activeWindow === 0}
					>
						Portfolio
					</StyledSection>
					<StyledSection
						onClick={() => clickHandler(1)}
						status={activeWindow === 1}
					>
						Projects
					</StyledSection>
				</StyledSections>
				{authenticated && authData.data.id === user[0].id && (
					<StyledSection onClick={startLogout}>Logout</StyledSection>
				)}
			</StyledUser>
			{editorMode ? (
				<StyledPortfolio>
					<EditPortfolio setEditorMode={setEditorMode} />
				</StyledPortfolio>
			) : (
				<StyledPortfolio>
					{(activeWindow === 0 && (
						<PortfolioWindow
							setEditorMode={setEditorMode}
							uid={user[0].id}
							isLoggedInUser={authData.data.id === user[0].id}
						/>
					)) ||
						(activeWindow === 1 && (
							<Projects
								id={user[0].id}
								projects={projects}
								userProjects={userProjects}
								setViewProject={setViewProject}
							/>
						))}
				</StyledPortfolio>
			)}
		</StyledContainer>
	);
};

const mapStateToProps = (state, props) => {
	const authenticated = state.authenticationReducer.isAuthenticated;
	const id = props.match.params.id;
	let user, userProjects;
	try {
		user = _.filter(state.userReducer, (obj) => obj.id === id);
		userProjects = user[0].projects;
	} catch (e) {}
	return {
		authenticated,
		user,
		projects: state.projectReducer,
		userProjects,
		authData: state.authenticationReducer,
	};
};

const mapDispatchToProps = (dispatch) => ({
	startLogout: () => dispatch(startLogout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);

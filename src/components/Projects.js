import React, { useState } from "react";
import { connect } from "react-redux";
import Modal from "./Modal";
import _ from "lodash";
import {
	StyledSubContainer,
	StyledHollowDiv,
} from "../styles/components/additionalStyles";
import {
	StyledTitle,
	StyledProjectCard,
	StyledImage,
} from "../styles/components/projectStyles";

const Projects = ({ projects, userProjects, setViewProject, isUser }) => {
	const [modalState, setModalState] = useState(false);

	const clickHandler = (project) => {
		setViewProject(project);
	};

	return (
		<StyledSubContainer>
			{modalState && <Modal setModalState={setModalState} />}
			{userProjects &&
				projects &&
				userProjects
					.map((pid) => projects[pid])
					.map((project) => {
						if (project) {
							return (
								<StyledProjectCard
									whileHover={{ scale: 1.1 }}
									key={project.pid}
									onClick={() => clickHandler(project)}
								>
									<StyledTitle>{project.title}</StyledTitle>
									<StyledImage
										src={project.icon}
										width="16rem"
										height="14rem"
									/>
								</StyledProjectCard>
							);
						} else {
							return null;
						}
					})}
			{isUser && (
				<StyledHollowDiv>
					<StyledProjectCard
						whileHover={{ scale: 1.1 }}
						key="add more"
						onClick={() => setModalState(true)}
					>
						<StyledImage
							src="/images/addmore.png"
							width="16rem"
							height="14rem"
						/>
						<StyledTitle>add new project</StyledTitle>
					</StyledProjectCard>
				</StyledHollowDiv>
			)}
		</StyledSubContainer>
	);
};

const mapStateToProps = (state, props) => {
	const id = !!props.id ? props.id : props.match.params.id;
	let user = _.filter(state.userReducer, (obj) => obj.id === id);
	let userProjects = user[0].projects;
	return {
		user,
		projects: state.projectReducer,
		userProjects,
		authData: state.authenticationReducer,
	};
};

export default connect(mapStateToProps)(Projects);

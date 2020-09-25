import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { StyledSubContainer } from "../styles/components/additionalStyles";
import {
	StyledTitle,
	StyledProjectCard,
	StyledImage,
} from "../styles/components/projectStyles";

const Projects = ({ projects, userProjects, setViewProject }) => {
	const clickHandler = (project) => {
		setViewProject(project);
	};

	return (
		<StyledSubContainer>
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

import React from "react";
import {
	StyledBackdrop,
	StyledViewProjectModal,
} from "../styles/components/modalStyles";
import {
	StyledProjectTitle,
	StyledPara,
} from "../styles/components/modalStyles";
import { StyledImage } from "../styles/components/projectStyles";
import { StyledCols } from "../styles/components/additionalStyles";

const ViewProjectModal = ({ project, setViewProject }) => {
	const closeModal = (e) => {
		if (e.target.classList.contains("backdrop")) {
			setViewProject(null);
		}
	};

	return (
		<StyledBackdrop onClick={(e) => closeModal(e)} className="backdrop">
			<StyledViewProjectModal
				initial={{ y: "-100vh" }}
				animate={{ y: 0 }}
				exit={{ y: "-100vh" }}
				type="rows"
			>
				<StyledImage src={project.icon} width="36rem" height="22rem" />
				<StyledCols type="longCol">
					<StyledProjectTitle>{project.title}</StyledProjectTitle>
					<StyledPara size="1.4rem">{project.description}</StyledPara>
				</StyledCols>
			</StyledViewProjectModal>
		</StyledBackdrop>
	);
};

export default ViewProjectModal;

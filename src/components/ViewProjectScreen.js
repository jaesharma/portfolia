import React, { useEffect, useState } from "react";
import database from "../firebase/config";
import { StyledImage, StyledTitle } from "../styles/components/projectStyles";
import { StyledPara } from "../styles/components/modalStyles";
import { StyledHeaderBar } from "../styles/components/headerStyles";
import { StyledCanvas } from "../styles/components/additionalStyles";
import { useHistory } from "react-router-dom";
import { StyledIconBtn } from "../styles/components/buttonStyles";
import { StyledSubBlock } from "../styles/components/additionalStyles";

const ViewProjectScreen = (props) => {
	const [project, setProject] = useState({});
	const history = useHistory();

	const pid = props.match.params.pid;
	useEffect(() => {
		database
			.ref(`projects/${pid}`)
			.once("value")
			.then((snapshot) => {
				setProject(snapshot.val());
			});
	}, []);
	return (
		<StyledCanvas type="page">
			<StyledHeaderBar>
				<StyledSubBlock align="left">
					<StyledIconBtn
						src="/images/back-arrow.png"
						height="2.6rem"
						onClick={() => history.push("/")}
					/>
				</StyledSubBlock>
			</StyledHeaderBar>
			<StyledTitle type="page">{project.title}</StyledTitle>
			<StyledImage src={project.icon} type="page" />
			<StyledPara size="1.5rem">{project.description}</StyledPara>
		</StyledCanvas>
	);
};

export default ViewProjectScreen;

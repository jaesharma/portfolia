import React from "react";
import { connect } from "react-redux";
import { startLogout } from "../actions/";
import { useHistory } from "react-router-dom";
import { StyledHeaderBar } from "../styles/components/headerStyles";
import { StyledIconBtn } from "../styles/components/buttonStyles";
import { StyledSubBlock } from "../styles/components/additionalStyles";

const HeaderBar = ({
	activeWindow,
	editorMode,
	clickHandler,
	setEditorMode,
	isUser,
	startLogout,
}) => {
	const history = useHistory();
	return (
		<StyledHeaderBar>
			<StyledSubBlock>
				<StyledIconBtn
					src="/images/back-arrow.png"
					height="2.6rem"
					onClick={() => history.push("/")}
				/>
			</StyledSubBlock>
			<StyledSubBlock
				onClick={() => clickHandler(1)}
				isActive={activeWindow === 1 && !editorMode}
			>
				<StyledIconBtn src="/images/product.png" height="3.4rem" />
			</StyledSubBlock>
			<StyledSubBlock
				onClick={() => clickHandler(0)}
				isActive={activeWindow === 0 && !editorMode}
			>
				<StyledIconBtn src="/images/resume.png" height="3rem" />
			</StyledSubBlock>
			{isUser && (
				<StyledSubBlock
					onClick={() => setEditorMode(true)}
					isActive={editorMode}
				>
					<StyledIconBtn
						src="/images/edit.png"
						width="2rem"
						heigth="1rem"
					/>
				</StyledSubBlock>
			)}
			{isUser && (
				<StyledSubBlock onClick={startLogout}>
					<StyledIconBtn src="/images/logout.png" height="2.4rem" />
				</StyledSubBlock>
			)}
		</StyledHeaderBar>
	);
};

const mapDispatchToProps = (dispatch) => ({
	startLogout: () => dispatch(startLogout()),
});

export default connect(null, mapDispatchToProps)(HeaderBar);

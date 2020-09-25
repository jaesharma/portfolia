import React, { useState } from "react";
import { connect } from "react-redux";
import {
	StyledBackdrop,
	StyledViewProjectModal,
} from "../styles/components/modalStyles";
import { submitProject } from "../actions/";
import {
	StyledForm,
	StyledHeading2,
	StyledHeadingBlock,
	StyledRow,
	StyledLabel,
	StyledFileInput,
	StyledSubmitButton,
} from "../styles/components/formStyles";

const Modal = ({ dispatch, uid, setModalState }) => {
	const [title, setTitle] = useState("");
	const [desc, setDesc] = useState("");
	const [file, setFile] = useState(null);
	const [error, setError] = useState(null);
	const [btnText, setBtnText] = useState("submit");

	const closeModal = (e) => {
		if (e.target.classList.contains("backdrop")) {
			setModalState(null);
		}
	};

	const changeHandler = (e) => {
		setFile(e.target.files[0]);
	};

	const submissionHandler = (e) => {
		e.preventDefault();
		submitProject(uid, title, desc, file, dispatch);
		setBtnText("submitted");
		setTimeout(() => setModalState(false), 1000);
	};

	return (
		<StyledBackdrop onClick={(e) => closeModal(e)} className="backdrop">
			<StyledViewProjectModal
				initial={{ y: "-100vh" }}
				animate={{ y: 0 }}
				width="50%"
				height="50%"
				type="cols"
			>
				<StyledHeadingBlock>
					<StyledHeading2 size="1.5rem">Add Project</StyledHeading2>
				</StyledHeadingBlock>

				<StyledForm onSubmit={(e) => submissionHandler(e)}>
					{error && (
						<StyledHeading2 color="red">{error}</StyledHeading2>
					)}
					<StyledRow>
						<StyledLabel htmlFor="title">Title: </StyledLabel>
						<input
							type="text"
							size="35"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
							name="title"
							placeholder="title"
							required
						/>
					</StyledRow>
					<StyledRow>
						<StyledLabel htmlFor="description">
							Description:{" "}
						</StyledLabel>
						<textarea
							rows="5"
							cols="50"
							name="description"
							placeholder="write a short description"
							value={desc}
							onChange={(e) => setDesc(e.target.value)}
							required
						/>
					</StyledRow>
					<StyledRow>
						<StyledLabel htmlFor="image">
							Select an image:{" "}
						</StyledLabel>
						<input
							type="file"
							name="image"
							onChange={changeHandler}
							accept="image/*"
						/>
					</StyledRow>
					<StyledSubmitButton type="submit" value={btnText} />
				</StyledForm>
			</StyledViewProjectModal>
		</StyledBackdrop>
	);
};

const mapStateToProps = (state) => {
	return {
		uid: state.authenticationReducer.data.id,
	};
};

export default connect(mapStateToProps)(Modal);

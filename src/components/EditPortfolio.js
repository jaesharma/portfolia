import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import database from "../firebase/config";
import { fetchData } from "../actions/";
import {
	StyledSubContainer,
	StyledCols,
	StyledBlockTitle,
	StyledSubTitle,
	StyledValue,
} from "../styles/components/additionalStyles";
import {
	StyledRow,
	StyledInputField,
	StyledForm,
	StyledSubmitButton,
} from "../styles/components/formStyles";
import { StyledBtn } from "../styles/components/buttonStyles";

const EditPortfolio = ({ dispatch, uid, setEditorMode }) => {
	let name, email, education, links, courses, skills, experiences, awards;
	const [nameField, setNameField] = useState("");
	const [emailField, setEmailField] = useState("");
	const [educationField, setEducationField] = useState({});
	const [linksField, setLinksField] = useState({});
	const [coursesField, setCoursesField] = useState({});
	const [skillsField, setSkillsField] = useState({});
	const [experiencesField, setExperiencesField] = useState({});
	const [awardsField, setAwardsField] = useState({});
	useEffect(() => {
		database
			.ref(`portfolios/${uid}`)
			.once("value")
			.then((snapshot) => {
				({
					name,
					email,
					education = {},
					links = {},
					courses = {},
					skills = {},
					experiences = {},
					awards = {},
				} = snapshot.val());
				setNameField(name);
				setEmailField(email);
				setEducationField(education);
				setLinksField(links);
				setCoursesField(courses);
				setSkillsField(skills);
				setExperiencesField(experiences);
				setAwardsField(awards);
			});
	}, []);

	const addSkillBlock = () => {
		const index = Object.keys(skillsField).length;
		let skillsCopy = { ...skillsField };
		skillsCopy[index] = "";
		setSkillsField(skillsCopy);
	};

	const addAwardBlock = () => {
		const index = Object.keys(awardsField).length;
		let awardsCopy = { ...awardsField };
		awardsCopy[index] = "";
		setAwardsField(awardsCopy);
	};

	const addExpBlock = () => {
		const index = Object.keys(experiencesField).length;
		let expCopy = { ...experiencesField };
		expCopy[index] = "";
		setExperiencesField(expCopy);
	};

	const addEduBlock = () => {
		let key = "ins" + Object.keys(educationField).length + 1;
		let eduCopy = { ...educationField };
		eduCopy[key] = {
			degree: "",
			cgpa: "",
			institute: "",
			passout_year: "",
		};
		setEducationField(eduCopy);
	};

	const addCourseBlock = () => {
		const index = Object.keys(coursesField).length;
		let coursesCopy = { ...coursesField };
		coursesCopy[index] = "";
		setCoursesField(coursesCopy);
	};

	const eduChangeHandler = (key, value, unit) => {
		let eduCopy = { ...educationField };
		eduCopy[key][unit] = value;
		setEducationField(eduCopy);
	};

	const skillChangeHandler = (index, value) => {
		let skillsCopy = { ...skillsField };
		skillsCopy[index] = value;
		setSkillsField(skillsCopy);
	};

	const linkChangeHandler = (platform, address) => {
		let linksCopy = { ...linksField };
		linksCopy[platform] = address;
		setLinksField(linksCopy);
	};

	const expChangeHandler = (index, experience) => {
		let expCopy = { ...experiencesField };
		expCopy[index] = experience;
		setExperiencesField(expCopy);
	};

	const awardChangeHandler = (index, award) => {
		let awardsCopy = { ...awardsField };
		awardsCopy[index] = award;
		setAwardsField(awardsCopy);
	};

	const courseChangeHandler = (index, course) => {
		let coursesCopy = { ...coursesField };
		coursesCopy[index] = course;
		setCoursesField(coursesCopy);
	};

	const formSubmission = (e) => {
		e.preventDefault();
		let updatedCourses = Object.values(coursesField).filter(
			(course) => course.length > 0
		);
		let updatedSkills = Object.values(skillsField).filter(
			(skill) => skill.length > 0
		);
		let updatedExperiences = Object.values(experiencesField).filter(
			(experience) => experience.length > 0
		);
		let updatedAwards = Object.values(awardsField).filter(
			(award) => award.length > 0
		);
		let updatedEducation = {};
		Object.entries(educationField).forEach(([key, edu], index) => {
			if (
				edu.passout_year.length !== 0 &&
				edu.cgpa.length !== 0 &&
				edu.degree.length !== 0 &&
				edu.institute.length !== 0
			) {
				let obj = {};
				obj[key] = edu;
				updatedEducation = { ...updatedEducation, ...obj };
			}
		});
		let updatedPortfolio = {
			name: nameField,
			email: emailField,
			education: updatedEducation,
			links: linksField,
			courses: updatedCourses,
			skills: updatedSkills,
			experiences: updatedExperiences,
			awards: updatedAwards,
		};
		database
			.ref(`portfolios/${uid}`)
			.update(updatedPortfolio)
			.then(() => {
				database.ref(`users/${uid}/name`).set(nameField);
				database.ref(`users/${uid}/email`).set(emailField);
				setEditorMode(false);
			})
			.then(() => {
				dispatch(fetchData());
			});
	};

	return (
		<StyledSubContainer type="window">
			<StyledForm onSubmit={(e) => formSubmission(e)}>
				<StyledCols>
					<StyledRow>
						<StyledSubTitle>Full Name: </StyledSubTitle>
						<StyledInputField
							type="text"
							value={nameField}
							onChange={(e) => setNameField(e.target.value)}
							required
						/>
					</StyledRow>
					<StyledRow>
						<StyledSubTitle>Email: </StyledSubTitle>
						<StyledInputField
							type="email"
							value={emailField}
							onChange={(e) => setEmailField(e.target.value)}
							required
						/>
					</StyledRow>
					<StyledRow>
						<StyledCols>
							<StyledBlockTitle>Education:</StyledBlockTitle>
							{educationField && (
								<React.Fragment>
									{Object.entries(educationField).map(
										([key, edu], index) => {
											return (
												<StyledRow
													key={key}
													marginLeft="1.4rem"
												>
													<StyledInputField
														type="text"
														placeholder="institute"
														value={edu.institute}
														onChange={(e) =>
															eduChangeHandler(
																key,
																e.target.value,
																"institute"
															)
														}
													/>
													<StyledInputField
														type="text"
														placehlder="degree"
														value={edu.degree}
														onChange={(e) =>
															eduChangeHandler(
																key,
																e.target.value,
																"degree"
															)
														}
													/>
													<StyledInputField
														type="number"
														placeholder="cgpa"
														min="0"
														max="10"
														step="0.1"
														value={edu.cgpa}
														onChange={(e) =>
															eduChangeHandler(
																key,
																e.target.value,
																"cgpa"
															)
														}
													/>
													<StyledInputField
														type="year"
														placeholder="passout year"
														value={edu.passout_year}
														onChange={(e) =>
															eduChangeHandler(
																key,
																e.target.value,
																"passout_year"
															)
														}
													/>
												</StyledRow>
											);
										}
									)}
								</React.Fragment>
							)}
							<StyledBtn
								size="sm"
								width="8rem"
								onClick={() => addEduBlock()}
							>
								Add more
							</StyledBtn>
						</StyledCols>
					</StyledRow>
					<StyledRow>
						<StyledCols>
							<StyledBlockTitle>Links:</StyledBlockTitle>
							{linksField && (
								<React.Fragment>
									{Object.entries(linksField).map(
										([platform, address], index) => {
											return (
												<StyledRow
													key={index}
													marginLeft="1.4rem"
												>
													<StyledSubTitle>
														{platform}:{" "}
													</StyledSubTitle>
													<StyledInputField
														type="text"
														placeholder="https://..."
														value={address}
														onChange={(e) =>
															linkChangeHandler(
																platform,
																e.target.value
															)
														}
													/>
												</StyledRow>
											);
										}
									)}
								</React.Fragment>
							)}
						</StyledCols>
					</StyledRow>
					<StyledRow>
						<StyledCols>
							<StyledBlockTitle>Courses:</StyledBlockTitle>
							{coursesField && (
								<React.Fragment>
									{Object.entries(coursesField).map(
										([key, course]) => {
											return (
												<StyledInputField
													type="text"
													key={key}
													placeholder="course"
													value={course}
													marginLeft="1.4rem"
													onChange={(e) =>
														courseChangeHandler(
															key,
															e.target.value
														)
													}
												/>
											);
										}
									)}
								</React.Fragment>
							)}
							<StyledBtn
								size="sm"
								width="8rem"
								onClick={() => addCourseBlock()}
							>
								Add more
							</StyledBtn>
						</StyledCols>
					</StyledRow>
					<StyledRow>
						<StyledCols>
							<StyledBlockTitle>Skills:</StyledBlockTitle>
							{skillsField && (
								<React.Fragment>
									{Object.entries(skillsField).map(
										([key, skill], index) => {
											return (
												<StyledInputField
													type="text"
													key={key}
													placeholder="skills"
													value={skill}
													marginLeft="1.4rem"
													onChange={(e) =>
														skillChangeHandler(
															index,
															e.target.value
														)
													}
												/>
											);
										}
									)}
								</React.Fragment>
							)}
							<StyledBtn
								size="sm"
								width="8rem"
								onClick={() => addSkillBlock()}
							>
								Add more
							</StyledBtn>
						</StyledCols>
					</StyledRow>
					<StyledRow>
						<StyledCols>
							<StyledBlockTitle>Experience:</StyledBlockTitle>
							{experiencesField && (
								<React.Fragment>
									{Object.entries(experiencesField).map(
										([key, experience], index) => {
											return (
												<StyledInputField
													type="text"
													key={key}
													placeholder="experience"
													value={experience}
													marginLeft="1.4rem"
													onChange={(e) =>
														expChangeHandler(
															index,
															e.target.value
														)
													}
												/>
											);
										}
									)}
								</React.Fragment>
							)}
							<StyledBtn
								size="sm"
								width="8rem"
								onClick={() => addExpBlock()}
							>
								Add more
							</StyledBtn>
						</StyledCols>
					</StyledRow>
					<StyledRow>
						<StyledCols>
							<StyledBlockTitle>Awards :</StyledBlockTitle>
							{awardsField && (
								<React.Fragment>
									{Object.entries(awardsField).map(
										([key, award]) => {
											return (
												<StyledInputField
													type="text"
													key={key}
													placeholder="award"
													value={award}
													marginLeft="1.4rem"
													onChange={(e) =>
														awardChangeHandler(
															key,
															e.target.value
														)
													}
												/>
											);
										}
									)}
								</React.Fragment>
							)}
							<StyledBtn
								size="sm"
								width="8rem"
								onClick={() => addAwardBlock()}
							>
								Add more
							</StyledBtn>
						</StyledCols>
					</StyledRow>
				</StyledCols>
				<StyledRow>
					<StyledSubmitButton type="submit" value="submit" />
					<StyledBtn onClick={() => setEditorMode(false)}>
						Cancel
					</StyledBtn>
				</StyledRow>
			</StyledForm>
		</StyledSubContainer>
	);
};

const mapStateToProps = (state, props) => {
	return {
		uid: state.authenticationReducer.data.id,
	};
};

export default connect(mapStateToProps)(EditPortfolio);

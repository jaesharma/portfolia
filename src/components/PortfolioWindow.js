import React, { useState, useEffect } from "react";
import database from "../firebase/config";
import { NavLink } from "react-router-dom";
import {
	StyledCols,
	StyledBlockTitle,
	StyledSubTitle,
	StyledValue,
} from "../styles/components/additionalStyles";
import { StyledSubContainer } from "../styles/components/additionalStyles";
import { StyledRow } from "../styles/components/formStyles";
import { StyledImgIcon } from "../styles/components/buttonStyles";

const PortfolioWindow = ({ setEditorMode, uid, isLoggedInUser }) => {
	const [portfolio, setPortfolio] = useState({});

	useEffect(() => {
		database
			.ref(`portfolios/${uid}`)
			.once("value")
			.then((snapshot) => {
				setPortfolio(snapshot.val());
			});
	}, []);

	return (
		<StyledSubContainer type="window">
			{isLoggedInUser && (
				<StyledImgIcon
					src="/images/edit.png"
					type="edit"
					onClick={() => setEditorMode(true)}
				/>
			)}
			<StyledCols>
				<StyledRow>
					<StyledSubTitle>Full Name: </StyledSubTitle>
					<StyledValue>{portfolio.name}</StyledValue>
				</StyledRow>
				<StyledRow>
					<StyledSubTitle>Email: </StyledSubTitle>
					<StyledValue>{portfolio.email}</StyledValue>
				</StyledRow>
				<StyledRow>
					<StyledCols>
						<StyledBlockTitle>Education:</StyledBlockTitle>
						{(portfolio.education && (
							<React.Fragment>
								<StyledRow marginLeft="1.4rem">
									<StyledValue bold>Institute</StyledValue>
									<StyledValue bold>degree</StyledValue>
									<StyledValue bold>cgpa</StyledValue>
									<StyledValue bold>passout year</StyledValue>
								</StyledRow>
								{Object.values(portfolio.education).map(
									(edu) => {
										return (
											<StyledRow marginLeft="1.4rem">
												<StyledValue>
													{edu.institute
														? edu.institute
														: "N/A"}
												</StyledValue>
												<StyledValue>
													{edu.degree}
												</StyledValue>
												<StyledValue>
													{edu.cgpa}
												</StyledValue>
												<StyledValue>
													{edu.passout_year}
												</StyledValue>
											</StyledRow>
										);
									}
								)}
							</React.Fragment>
						)) || <StyledValue>Not Available</StyledValue>}
					</StyledCols>
				</StyledRow>
				<StyledRow>
					<StyledCols>
						<StyledBlockTitle>Links:</StyledBlockTitle>
						{(portfolio.links && (
							<React.Fragment>
								{Object.entries(portfolio.links).map(
									([platform, address], index) => {
										return (
											<StyledRow marginLeft="1.4rem">
												<StyledSubTitle>
													{platform}:{" "}
												</StyledSubTitle>
												<StyledValue>
													{address}
												</StyledValue>
											</StyledRow>
										);
									}
								)}
							</React.Fragment>
						)) || <StyledValue>Not Available</StyledValue>}
					</StyledCols>
				</StyledRow>
				<StyledRow>
					<StyledCols>
						<StyledBlockTitle>Courses:</StyledBlockTitle>
						{(portfolio.courses && (
							<React.Fragment>
								{Object.entries(portfolio.courses).map(
									([key, course]) => {
										return (
											<StyledValue>{course}</StyledValue>
										);
									}
								)}
							</React.Fragment>
						)) || <StyledValue>Not Available</StyledValue>}
					</StyledCols>
				</StyledRow>
				<StyledRow>
					<StyledCols>
						<StyledBlockTitle>Skills:</StyledBlockTitle>
						{(portfolio.skills && (
							<React.Fragment>
								{Object.values(portfolio.skills).map(
									(skill) => {
										return (
											<StyledValue>{skill}</StyledValue>
										);
									}
								)}
							</React.Fragment>
						)) || <StyledValue>Not Available</StyledValue>}
					</StyledCols>
				</StyledRow>
				<StyledRow>
					<StyledCols>
						<StyledBlockTitle>Experience:</StyledBlockTitle>
						{(portfolio.experiences && (
							<React.Fragment>
								{Object.entries(portfolio.experiences).map(
									([key, experience], index) => {
										return (
											<StyledValue>
												{experience}
											</StyledValue>
										);
									}
								)}
							</React.Fragment>
						)) || <StyledValue>Not Available</StyledValue>}
					</StyledCols>
				</StyledRow>
				<StyledRow>
					<StyledCols>
						<StyledBlockTitle>Awards :</StyledBlockTitle>
						{(portfolio.awards && (
							<React.Fragment>
								{Object.entries(portfolio.awards).map(
									([key, award]) => {
										return (
											<StyledValue>{award}</StyledValue>
										);
									}
								)}
							</React.Fragment>
						)) || <StyledValue>Not Available</StyledValue>}
					</StyledCols>
				</StyledRow>
			</StyledCols>
		</StyledSubContainer>
	);
};

export default PortfolioWindow;

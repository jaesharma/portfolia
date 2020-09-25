import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Card from "./Card";
import { StyledBody } from "../styles/components/bodyStyles";
import { StyledMessage } from "../styles/components/additionalStyles";
import _ from "lodash";

const MainBody = ({ loading, query, users, dispatch }) => {
	const [filteredUsers, setFilteredUsers] = useState(users);

	useEffect(() => {
		if (!!query) {
			let data = _.filter(users, (v) =>
				v.name.toLowerCase().includes(query.toLowerCase())
			);
			setFilteredUsers(data);
		} else {
			setFilteredUsers(users);
		}
	}, [query, users]);

	return (
		<StyledBody
			initial={{ y: "-100vw" }}
			animate={{ y: 0 }}
			transition={{ delay: 0.1 }}
		>
			{Object.entries(filteredUsers).map(([key, value], index) => {
				return <Card key={key} value={value} />;
			})}
			{Object.keys(filteredUsers).length === 0 && !loading && (
				<StyledMessage>no results found</StyledMessage>
			)}
		</StyledBody>
	);
};

const mapStateToProps = (state, props) => {
	return {
		users: state.userReducer,
	};
};

export default connect(mapStateToProps)(MainBody);

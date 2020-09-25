import React, { useState } from "react";
import Header from "./Header";
import MainBody from "./MainBody";
import { connect } from "react-redux";
import { StyledCanvas } from "../styles/components/additionalStyles";

const Dashboard = ({ dispatch }) => {
	const [query, setQuery] = useState(null);

	return (
		<StyledCanvas>
			<Header setQuery={setQuery} />
			<MainBody query={query} />
		</StyledCanvas>
	);
};

export default connect()(Dashboard);

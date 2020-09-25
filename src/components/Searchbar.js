import React from "react";
import { StyledSearchbar } from "../styles/components/searchbarStyles";

const Searchbar = ({ setQuery }) => {
	const changeHandler = (e) => {
		setQuery(e.target.value);
	};

	return (
		<StyledSearchbar
			type="text"
			placeholder="search"
			onChange={changeHandler}
		/>
	);
};

export default Searchbar;

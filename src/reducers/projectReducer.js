const projectReducer = (state = {}, action) => {
	switch (action.type) {
		case "SET_PROJECT_INITIALS":
			return action.projects;
		default:
			return state;
	}
};

export default projectReducer;

const codeReducer = (state = '', action) => {
	switch(action.type){
		case "CHANGE":
			return action.code;
		default:
			return state;
	}
};

export default codeReducer;
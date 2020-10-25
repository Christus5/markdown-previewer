import { combineReducers } from "redux";

import codeReducer from "./codeReducer";

const allReducers = combineReducers({
	code: codeReducer
});

export default allReducers;
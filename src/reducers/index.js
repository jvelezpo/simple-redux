import { combineReducers } from "redux";

import mathReducer from "./math-reducer";
import githubReducer from "./github-reducer";

const rootReducer = combineReducers({
  math: mathReducer,
  github: githubReducer
});

export default rootReducer;

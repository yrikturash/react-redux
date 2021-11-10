import { combineReducers } from "redux";
import courseReducer from "./courseReducer";

const rooteReducer = combineReducers({
  courses: courseReducer,
});

export default rooteReducer;

import { combineReducers } from "redux";
import courses from "./courseReducer"; // we rename the reducer function cinse thiis impact how we referene data in the store!

const rooteReducer = combineReducers({
  courses,
});

export default rooteReducer;

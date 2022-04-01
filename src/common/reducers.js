import { combineReducers } from "redux";
import moduleReducer from "../module/moduleSlice";

export const rootReducer = combineReducers({
  module: moduleReducer,
});

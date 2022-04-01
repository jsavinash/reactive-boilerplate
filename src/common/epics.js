import { combineEpics } from "redux-observable";
import { moduleEpic } from "../module/moduleEpics";

export const rootEpic = combineEpics(moduleEpic);

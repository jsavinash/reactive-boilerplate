import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./reducers";
import { rootEpic } from "./epics";
import { epicMiddleware } from "./epicsMiddleware";

const store = createStore(rootReducer, applyMiddleware(epicMiddleware));

epicMiddleware.run(rootEpic);

export default store;

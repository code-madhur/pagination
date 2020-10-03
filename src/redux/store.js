import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import { reducers, epics } from "./modules";
import { createEpicMiddleware } from "redux-observable";

const epicMiddleware = createEpicMiddleware();

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

export default createStore(
  combineReducers({
    ...reducers
  }),
  composeEnhancers(applyMiddleware(epicMiddleware))
);

epicMiddleware.run(epics);

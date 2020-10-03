import { epics as searchEpics } from "./searchResults";
import { reducers as searchResults } from "./searchResults";
import { combineEpics } from "redux-observable";

const reducers = {
  searchResults
};

const epics = combineEpics(searchEpics);

export { reducers, epics };

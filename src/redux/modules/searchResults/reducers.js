import types from "./types";
import createReducer from "../../utils/createReducer";
import data from "../../utils/data";

export default createReducer([...data])({
  [types.REDUCER_ADD_RESULTS]: (state, action) => [...action.data]
});

import types from "./types";

export default {
  addResults: (data) => ({
    type: types.REDUCER_ADD_RESULTS,
    data
  }),
  newSearch: (keyword) => ({
    type: types.EPIC_NEW_SEARCH,
    keyword
  })
};

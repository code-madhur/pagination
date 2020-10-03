export default (initialState) => (mapping) => (
  state = initialState,
  action
) => {
  const reducer = mapping[action.type];

  return reducer ? reducer(state, action) : state;
};

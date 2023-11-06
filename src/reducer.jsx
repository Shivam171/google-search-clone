// Define the initial state
export const initialState = {
  term: null,
};

// Define action types
export const actionTypes = {
  SET_SEARCH_TERM: "SET_SEARCH_TERM",
};

// Define the reducer function
export const reducer = (state, action) => {
  console.log("Action received:", action);

  switch (action.type) {
    case actionTypes.SET_SEARCH_TERM:
      console.log("State before update:", state);

      return {
        ...state,
        term: action.term,
      };

    default:
      return state;
  }
};

export default reducer;

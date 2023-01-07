const reducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_LOGS": {
      return [...state, action.payload];
    }
    case "CLEAR_LOGS": {
      return [];
    }
    default: {
      return state;
    }
  }
};

export default reducer;

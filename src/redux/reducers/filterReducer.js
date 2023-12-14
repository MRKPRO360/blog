const initialState = {
  filters: {
    toggleDate: false,
  },
};
const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case '':
      return state;

    default:
      return state;
  }
};

export default filterReducer;

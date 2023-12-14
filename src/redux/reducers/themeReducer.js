import { IS_MAIN, NOT_MAIN } from '../actionTypes/actionTypes';

const initialState = {
  isMain: true,
};
const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case NOT_MAIN:
      return {
        ...state,
        isMain: false,
      };
    case IS_MAIN:
      return {
        ...state,
        isMain: true,
      };
    default:
      return state;
  }
};

export default themeReducer;

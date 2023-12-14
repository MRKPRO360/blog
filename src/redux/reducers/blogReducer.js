import {
  ADD_ACTIVITY,
  ADD_BLOG,
  LOAD_BLOG,
  REMOVE_BLOG,
  UPDATE_BLOG,
} from '../actionTypes/actionTypes';

const initialState = {
  blogs: [],
  activity: [],
};
const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_BLOG:
      return {
        ...state,
        blogs: action.payload,
      };

    case ADD_BLOG:
      return {
        ...state,
        blogs: [...state.blogs, action.payload],
      };

    case REMOVE_BLOG:
      return {
        ...state,
        blogs: state.blogs.filter((el) => el._id !== action.payload),
      };

    case UPDATE_BLOG:
      const restBlog = state.blogs.filter(
        (el) => el._id !== action.payload._id
      );
      const updated = state.blogs.filter((el) => el._id === action.payload._id);
      return {
        ...state,
        blogs: [...restBlog, { ...updated, ...action.payload }],
      };

    case ADD_ACTIVITY:
      const alreadyAdded = state.activity.find(
        (el) => el._id === action.payload._id
      );
      const restActivity = state.activity.filter(
        (el) => el._id !== action.payload._id
      );

      if (!alreadyAdded)
        return {
          ...state,
          activity: [...state.activity, action.payload],
        };
      return {
        ...state,
        activity: [...restActivity, { ...alreadyAdded, timeStamp: Date.now() }],
      };

    default:
      return state;
  }
};

export default blogReducer;

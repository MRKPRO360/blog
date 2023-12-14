import {
  ADD_ACTIVITY,
  ADD_BLOG,
  LOAD_BLOG,
  REMOVE_BLOG,
  UPDATE_BLOG,
} from '../actionTypes/actionTypes';

export const loadBlogs = (data) => {
  return {
    type: LOAD_BLOG,
    payload: data,
  };
};

export const removeBlog = (id) => {
  return {
    type: REMOVE_BLOG,
    payload: id,
  };
};

export const updateBlog = (data) => {
  return {
    type: UPDATE_BLOG,
    payload: data,
  };
};

export const addBlog = (data) => {
  return {
    type: ADD_BLOG,
    payload: data,
  };
};

export const addActivity = (data) => {
  return {
    type: ADD_ACTIVITY,
    payload: { ...data, timeStamp: Date.now() },
  };
};

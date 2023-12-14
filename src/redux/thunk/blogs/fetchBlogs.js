import { loadBlogs } from '../../actions/blogActions';

const loadBlogsData = () => {
  return async (dispatch, getState) => {
    const res = await fetch('https://blog-server-mrkpro360.vercel.app/blogs');

    const data = await res.json();

    if (data.length) {
      return dispatch(loadBlogs(data));
    }
  };
};

export default loadBlogsData;

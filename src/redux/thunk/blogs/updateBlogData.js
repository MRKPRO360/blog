import { updateBlog } from '../../actions/blogActions';

const updateBlogData = (blogData) => {
  return async (dispatch, getState) => {
    const res = await fetch(
      `https://blog-server-mrkpro360.vercel.app/${blogData._id}`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(blogData),
      }
    );
    const data = await res.json();

    if (data.acknowledged) {
      dispatch(updateBlog(blogData));
    }
    return data;
  };
};

export default updateBlogData;

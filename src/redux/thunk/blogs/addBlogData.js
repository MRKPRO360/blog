import { addBlog } from '../../actions/blogActions';

const addBlogData = (blogData) => {
  return async (dispatch, getState) => {
    const res = await fetch(`https://blog-server-mrkpro360.vercel.app`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(blogData),
    });
    const data = await res.json();
    console.log(data);
    if (data.acknowledged) {
      dispatch(addBlog(blogData));
    }
    return data;
  };
};

export default addBlogData;

import { removeBlog } from '../../actions/blogActions';

const removeBlogData = (id) => {
  return async (dispatch, getState) => {
    const res = await fetch(`https://blog-server-mrkpro360.vercel.app/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    console.log(data);
    if (data.acknowledged) dispatch(removeBlog(id));
  };
};

export default removeBlogData;

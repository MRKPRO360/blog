import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import loadBlogsData from '../../redux/thunk/blogs/fetchBlogs';
import removeBlogData from '../../redux/thunk/blogs/removeBlogData';
import { Link } from 'react-router-dom';

function BlogLists() {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blog.blogs);

  useEffect(() => {
    dispatch(loadBlogsData());
  }, [dispatch]);

  const handleDelete = (blog) => {
    const confirm = window.confirm(
      `Do you want to delete ${blog.title}? If it's deleted that it can't be restored.`
    );

    if (!confirm) return;
    return dispatch(removeBlogData(blog._id));
  };

  return (
    <table className='flex-[90%] mx-auto mt-10 text-center'>
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Title</th>
          <th>Update</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {blogs?.map((el, i) => (
          <tr key={el._id} className=''>
            <th>{i + 1}</th>
            <td>{el.name}</td>
            <td className='p-3'>{el.title}</td>
            <td>
              <Link
                to={`/dashboard/update-blog/${el._id}`}
                className='p-1 font-semibold text-white rounded-md shadow-sm shadow-green-400 bg-green-600/95 btn-sm btn-success'
              >
                Update
              </Link>
            </td>
            <td>
              <button
                onClick={() => handleDelete(el)}
                className='p-1 font-semibold text-white rounded-md shadow-sm shadow-red-400 bg-red-600/95 btn-sm btn-success'
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default BlogLists;

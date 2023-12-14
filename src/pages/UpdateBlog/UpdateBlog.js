import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import updateBlogData from '../../redux/thunk/blogs/updateBlogData';

function UpdateBlog() {
  const navigate = useNavigate();
  const params = useParams();
  const blogs = useSelector((state) => state.blog.blogs);
  const blog = blogs.find((el) => el._id === params.id);

  const [data, setData] = useState(blog);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    return setData((preData) => ({
      ...preData,
      updated: Date.now(),
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const update = await dispatch(updateBlogData(data));
    if (!update) return;
    navigate('/dashboard/');
  };

  return (
    <div className='flex-1 lg:flex-[90%]  mt-10 '>
      <h1 className='mb-8 text-xl font-semibold text-center text-black underline 2xl:text-2xl underline-offset-8'>
        Update {blog.title}
      </h1>
      <form onSubmit={handleSubmit} className='mt-8 w-[90%] mx-auto space-y-6'>
        <div className='w-full transition duration-300 border-b-2 active:border-b-gray-800'>
          <label
            for='blog-name'
            className='block w-full mb-1 text-base font-semibold '
          >
            <span className='label-text'>Blog Name</span>
          </label>
          <input
            name='name'
            onChange={(e) => handleChange(e)}
            id='blog-name'
            type='text'
            className='w-full py-1'
            defaultValue={blog.name}
          />
        </div>
        <div className='w-full transition duration-300 border-b-2 active:border-b-gray-800'>
          <label
            for='title'
            className='block w-full mb-1 text-base font-semibold'
          >
            <span className='label-text'>Title</span>
          </label>
          <input
            id='title'
            name='title'
            onChange={(e) => handleChange(e)}
            type='text'
            className='w-full py-1 '
            defaultValue={blog.title}
          />
        </div>
        <div className='w-full transition duration-300 border-b-2 active:border-b-gray-800'>
          <label
            for='postImage'
            className='block w-full mb-1 text-base font-semibold'
          >
            <span className='label-text'>Post Image Link</span>
          </label>
          <input
            id='postImage'
            name='postImage'
            onChange={(e) => handleChange(e)}
            type='text'
            className='w-full py-1 '
            defaultValue={blog.postImage}
          />
        </div>
        <div className='w-full transition duration-300 border-b-2 active:border-b-gray-800'>
          <label
            className='block w-full mb-1 text-base font-semibold'
            name='description'
          >
            <span className='label-text'>Description</span>
          </label>
          <textarea
            id='description'
            name='description'
            onChange={(e) => handleChange(e)}
            rows={5}
            className='w-full'
            placeholder='Blog description goes here...'
            defaultValue={blog.description}
          />
        </div>
        <button
          disabled={blog === data}
          type='submit'
          className={`px-3 py-1 text-white transition duration-500 border-b-2 border-transparent rounded-sm shadow-sm bg-gray-800/80 shadow-gray-400  ${
            blog !== data &&
            'hover:border-b-gray-800/80 hover:bg-transparent hover:text-gray-800/80 hover:shadow-lg active:shadow-xl'
          } `}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default UpdateBlog;

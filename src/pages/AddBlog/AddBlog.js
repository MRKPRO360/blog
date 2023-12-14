import { useState } from 'react';
import { useDispatch } from 'react-redux';
import addBlogData from '../../redux/thunk/blogs/addBlogData';
import { useNavigate } from 'react-router-dom';
function AddBlog() {
  const initialData = {
    name: '',
    title: '',
    postImage: '',
    description: '',
    published: Date.now(),
    likes: 0,
    dislikes: 0,
  };

  const [data, setData] = useState(initialData);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setData((preData) => ({
      ...preData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const add = dispatch(addBlogData(data));
    if (!add)
      return alert('There was an unkwnown error occured. Please try again!');
    navigate('/dashboard/');
  };
  return (
    <div className='flex-1 lg:flex-[90%] mt-10 '>
      <h1 className='mb-8 text-xl font-semibold text-center text-black underline 2xl:text-2xl underline-offset-8'>
        Add A Blog
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
            onBlur={(e) => handleChange(e)}
            id='blog-name'
            type='text'
            className='w-full py-1'
            required
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
            onBlur={(e) => handleChange(e)}
            type='text'
            className='w-full py-1 '
            required
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
            onBlur={(e) => handleChange(e)}
            type='text'
            className='w-full py-1 '
            required
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
            onBlur={(e) => handleChange(e)}
            rows={5}
            className='w-full'
            placeholder='Blog description goes here...'
            required
          />
        </div>
        <button
          type='submit'
          className='px-3 py-1 text-white transition duration-500 border-b-2 border-transparent rounded-sm shadow-sm bg-gray-800/80 shadow-gray-400 active:shadow-xl hover:shadow-lg hover:border-b-gray-800/80 hover:bg-transparent hover:text-gray-800/80'
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddBlog;

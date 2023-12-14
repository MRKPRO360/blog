import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BlogCard from './BlogCard';
import loadBlogsData from '../../redux/thunk/blogs/fetchBlogs';

function Blog() {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blog.blogs);
  const [sort, setSort] = useState('last');

  useEffect(() => {
    dispatch(loadBlogsData());
  }, [dispatch, sort]);

  let content;
  if (blogs.length) {
    // activeTag = tags.map((el, i) => el === blogs[i].name);
    // console.log(activeTag);

    if (sort === 'last')
      content = blogs
        .sort((a, b) => b.published - a.published)
        .map((el, i) => <BlogCard blog={el} key={i} />);
    else {
      content = blogs
        .sort((a, b) => a.published - b.published)
        .map((el, i) => <BlogCard blog={el} key={i} />);
    }
  }

  return (
    <div className='py-16 text-center'>
      <h2 className='mb-10 text-2xl font-semibold'>All Blogs</h2>
      <div className='flex items-center justify-end gap-10 mb-5 lg:mb-10'>
        <div className='flex items-center justify-end gap-5 mr-2 font-semibold lg:mr-5'>
          <span>Sort By :</span>
          <select
            className='py-1 border-b-2 border-gray-600 cursor-pointer'
            name=''
            id=''
            defaultChecked='last'
            onChange={(e) => setSort(e.target.value)}
          >
            <option value='last'>Last Upload</option>
            <option value='first'>First Upload</option>
          </select>
        </div>
      </div>

      <div className='flex flex-wrap items-center justify-center gap-8'>
        {content}
      </div>
    </div>
  );
}

export default Blog;

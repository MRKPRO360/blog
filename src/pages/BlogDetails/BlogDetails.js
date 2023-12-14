import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  FaHeart,
  FaRegThumbsDown,
  FaRegThumbsUp,
  FaThumbtack,
  FaUpload,
} from 'react-icons/fa';
import { addActivity } from '../../redux/actions/blogActions';
function BlogDetails() {
  const params = useParams();
  const dispatch = useDispatch();

  const blogs = useSelector((state) => state.blog.blogs);
  const blog = blogs.find((el) => el._id === params.id);

  dispatch(addActivity(blog));
  return (
    <div>
      <div className='flex flex-col gap-8 mb-10 md:flex-row'>
        <img
          className='flex-1 md:flex-[45%] lg:flex-1'
          src={blog.postImage}
          alt='blog cover'
        />
        <div className='flex-auto'>
          <h2 className='mb-8 text-xl font-semibold underline lg:text-3xl underline-offset-8'>
            {blog.title}
          </h2>
          <div className='space-y-2 lg:space-y-4'>
            <div className='flex items-center gap-1 text-base lg:text-lg'>
              <FaThumbtack size={16} />
              <span>
                Published on : {new Date(+blog.published).toLocaleDateString()}
              </span>
            </div>
            {blog.updated && (
              <div className='flex items-center gap-1 text-base lg:text-lg'>
                <FaUpload size={16} />
                <span>
                  Updated : {new Date(+blog.updated).toLocaleDateString()}
                </span>
              </div>
            )}
            <div className='flex items-center gap-1 text-base lg:text-lg'>
              <FaRegThumbsUp size={16} />
              <span>Total Likes : {blog.likes}</span>
            </div>
          </div>
        </div>
      </div>
      {/* bottom part */}
      <div className='px-3 lg:text-lg'>
        <p className='mb-4 text-justify'>{blog.description}</p>
        <div className='flex items-center gap-2 '>
          <span>
            Have you enjoyed this article? Please drop your thumbs up{' '}
          </span>
          <FaRegThumbsUp className='font-bold' size={16} />
        </div>
        <div className='flex items-center gap-2'>
          <span>Dislikes this article? </span>
          <FaRegThumbsDown className='font-bold' size={16} />
        </div>
      </div>
    </div>
  );
}

export default BlogDetails;

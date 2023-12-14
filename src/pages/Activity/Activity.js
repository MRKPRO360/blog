import { useSelector } from 'react-redux';
import BlogCard from '../../components/Blog/BlogCard';
import { Link } from 'react-router-dom';

function Activity() {
  //   const dispatch = useDispatch();
  const activity = useSelector((state) => state.blog.activity);
  let content;

  if (activity.length) {
    content = activity
      .sort((a, b) => b.timeStamp - a.timeStamp)
      .map((el) => <BlogCard blog={el} key={el._id} />);
  } else {
    content = (
      <div className='flex items-center justify-center w-full h-[10vh] lg:h-[30vh]'>
        <h2 className='text-lg font-semibold '>
          OOPS! There is no activity since you entered. Please read some{' '}
          <Link className='font-bold underline' to='/'>
            blog
          </Link>{' '}
          to add in your activity :)
        </h2>
      </div>
    );
  }

  return (
    <div className='min-h-[68vh] py-1 text-center 2xl:py-8'>
      {activity.length > 0 && (
        <h2 className='mb-10 text-2xl font-semibold'>All Blogs</h2>
      )}
      <div className='flex flex-wrap items-center justify-center gap-8'>
        {content}
      </div>
    </div>
  );
}

export default Activity;

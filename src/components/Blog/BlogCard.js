import { Link } from 'react-router-dom';

function BlogCard({ blog }) {
  const { name, title, description, postImage, _id } = blog;
  return (
    <div className='rounded-sm shadow-sm shadow-gray-700/10 w-96'>
      <img
        className='w-full h-[215px] object-cover object-center'
        src={postImage}
        alt='blog'
      />
      <div className='px-2 py-4 '>
        <h3 className='my-4 sm:text-xl'>{title}</h3>
        <p
          style={{
            clipPath:
              'polygon(0 0, 100% 0%, 90% 50%, 100% 100%, 0 100%, 10% 50%, 0 0)',
          }}
          className='relative left-[250px] top-[-38px] sm:left-[300px] w-20 sm:top-[-40px] -z-20 px-2 py-[2px] bg-gray-800/90 text-white text-[12px]  font-semibold shadow-sm shadow-red-400 '
        >
          {name}
        </p>
        <p className='mb-8 text-justify'>
          {description.length > 20
            ? `${description.slice(0, 140)}...`
            : description}
        </p>
        <div className='text-start'>
          <Link
            to={`/blogs/${_id}`}
            className='p-1 text-white transition duration-500 rounded-sm shadow-sm bg-gray-800/80 shadow-gray-400 active:shadow-xl hover:shadow-lg hover:border-b-2 hover:border-b-gray-800/80 hover:bg-transparent hover:text-gray-800/80'
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;

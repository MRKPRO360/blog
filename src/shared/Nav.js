import { FaBookOpen } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Nav() {
  const { isMain } = useSelector((state) => state.theme);

  return (
    <div
      className={`transition duration-300 ${
        !isMain && 'sticky mb-6'
      } sticky top-0 z-10 w-full p-3 bg-white/30 shadow-md backdrop-blur-md shadow-gray-600/8`}
    >
      <div
        className={`${
          isMain && 'text-white'
        } flex items-center justify-between `}
      >
        <Link to='/' className='flex items-center gap-2'>
          <span className='text-xl font-semibold sm:text-2xl '>Weekly</span>

          <FaBookOpen className='text-4xl' />
        </Link>
        <div className='flex gap-4 text-lg font-semibold lg:text-xl'>
          <Link to='/activity'>Acitivity</Link>
          <Link to='/dashboard/'>Dashboard</Link>
        </div>
      </div>
    </div>
  );
}

export default Nav;

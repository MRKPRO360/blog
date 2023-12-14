import { Outlet, NavLink, Link } from 'react-router-dom';
import Footer from '../shared/Footer';
import { FaArrowLeft } from 'react-icons/fa';
function Dashboard() {
  const dashBoardNav = [
    {
      path: '/dashboard/',
      text: 'Blog List',
    },
    {
      path: '/dashboard/add-blog',
      text: 'Add Blog',
    },
  ];

  return (
    <div className='max-w-[1536px] w-full mx-auto overflow-x-hidden'>
      <div className='flex flex-col justify-between min-h-[80vh] lg:flex-row pb-5 lg:pb-10'>
        <div className='flex-[10%] border-r-2 mt-10  flex gap-x-10 lg:flex-col lg:gap-y-8 text-center ml-3'>
          {dashBoardNav.map((el, i) => (
            <NavLink
              key={i}
              className={({ isActive }) =>
                isActive
                  ? 'text-white bg-gray-600 p-1  transition duration-300 rounded font-semibold shadow-md shadow-gray-300'
                  : 'text-black p-1 transition duration-300 rounded font-semibold'
              }
              to={el.path}
            >
              {el.text}
            </NavLink>
          ))}
          <Link to='/' className='flex items-center justify-center '>
            <FaArrowLeft />
            <span className='font-semibold'>Home</span>
          </Link>
        </div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;

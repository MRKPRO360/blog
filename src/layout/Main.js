import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../shared/Footer';
import Nav from '../shared/Nav';
import { useEffect } from 'react';
import { IS_MAIN, NOT_MAIN } from '../redux/actionTypes/actionTypes';
import { useDispatch } from 'react-redux';

function Main() {
  const location = useLocation();

  const dispatch = useDispatch();

  useEffect(() => {
    location.key === 'default' || location.pathname === '/'
      ? dispatch({ type: IS_MAIN })
      : dispatch({ type: NOT_MAIN });
  }, [dispatch, location]);

  return (
    <div className='max-w-[1536px] w-full mx-auto overflow-x-hidden'>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Main;

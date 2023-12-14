import HomeBanner from '../HomeBanner/HomeBanner';
import Blog from '../../../components/Blog/Blog';
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { IS_MAIN, NOT_MAIN } from '../../../redux/actionTypes/actionTypes';

function Home() {
  const [isInterSecting, setIsInterSecting] = useState(false);
  const dispatch = useDispatch();

  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInterSecting(entry.isIntersecting);
      },
      {
        rootMargin: '30px',
        threshold: 0.15,
      }
    );
    observer.observe(ref.current);
    if (isInterSecting) {
      dispatch({ type: NOT_MAIN });
    } else dispatch({ type: IS_MAIN });
    return () => observer.disconnect();
  }, [isInterSecting, dispatch]);

  return (
    <div>
      <HomeBanner />
      <div ref={ref}>
        <Blog />
      </div>
    </div>
  );
}

export default Home;

import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import BlogDetails from '../pages/BlogDetails/BlogDetails';
import Home from '../pages/Home/Home/Home';
import Dashboard from '../layout/Dashboard';
import BlogLists from '../components/Blog/BlogLists';
import AddBlog from '../pages/AddBlog/AddBlog';
import UpdateBlog from '../pages/UpdateBlog/UpdateBlog';
import Activity from '../pages/Activity/Activity';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/activity',
        element: <Activity />,
      },
      {
        path: '/blogs/:id',
        element: <BlogDetails />,
      },
    ],
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
    children: [
      {
        path: '/dashboard/',
        element: <BlogLists />,
      },
      {
        path: '/dashboard/add-blog',
        element: <AddBlog />,
      },
      {
        path: '/dashboard/update-blog/:id',
        element: <UpdateBlog />,
      },
    ],
  },
]);

export default router;

import {
  FaFacebook,
  FaGoogle,
  FaMailchimp,
  FaPhone,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';

function Footer() {
  return (
    <div className='flex flex-wrap items-center justify-between gap-4 p-3 text-white bg-slate-900 xl:py-6'>
      <div className='lg:basis-2/5'>
        <p className='lg:text-lg'>
          All rights reserved by Weekly &copy; 2024. This website is built for
          only educational purposes. Don't try to use it any commercial
          bussiness. Hope you should mend your ways!
        </p>
      </div>
      <div className=''>
        <p className='mb-2 lg:text-lg lg:mb-3'>Our Other Medium</p>
        <ul className='flex flex-wrap items-center justify-between gap-3 text-2xl list-none '>
          <li>
            <FaFacebook className='transition cursor-pointer duration-800 hover:text-gray-500'></FaFacebook>
          </li>
          <li>
            <FaGoogle className='transition cursor-pointer duration-800 hover:text-gray-500'></FaGoogle>
          </li>
          <li>
            <FaYoutube className='transition cursor-pointer duration-800 hover:text-gray-500'></FaYoutube>
          </li>
          <li>
            <FaTwitter className='transition cursor-pointer duration-800 hover:text-gray-500'></FaTwitter>
          </li>
        </ul>
      </div>
      <div className=''>
        <div className='flex items-center gap-1 '>
          <FaPhone></FaPhone>
          <span className='font-bold'>Call Us:</span>
          +880 134323423 2334
        </div>
        <div className='flex items-center gap-1'>
          <FaMailchimp></FaMailchimp>
          <span className='font-bold'>Our Email:</span>
          blogHunt@yahoo.com
        </div>
        <div className='relative mt-3 lg:mt-5'>
          <p className='font-bold'>Signup Newsletter:</p>
          <input
            placeholder='md@example.com'
            className='w-full px-2 py-1 text-gray-900 border rounded-md -z-10'
            type='email'
            required
          />
          <button className='absolute right-[.4%] rounded-md z-10 px-4 py-1 text-white transition duration-500 transform -translate-y-1/2 bg-slate-900 top-[71%] active:bg-blue-400 border-0 active:scale-y-[1.05] active:scale-x-[1.1]'>
            Signup
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;

import img from '../../../images/kateryna-hliznitsova-2THdTdKs0yU-unsplash.jpg';
function HomeBanner() {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to right bottom, rgba(0,0,0,.5), rgba(0,0,0,.8)),url(${img})`,
        backgroundPosition: 'center',
      }}
      className='relative flex flex-col items-center justify-center w-full min-h-[102vh] bg-cover -top-16'
    >
      <div className='text-white w-96 sm:w-[600px]'>
        <h1 className='mb-8 text-2xl font-semibold sm:text-6xl'>
          Unleash your creativity
        </h1>
        <p className='mb-4 sm:text-lg'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique,
          non veniam aspernatur eligendi consequuntur laborum
        </p>
        <button className='px-4 py-2 font-semibold bg-red-600 rounded-sm shadow-sm shadow-red-600 '>
          Read more
        </button>
      </div>
    </div>
  );
}

export default HomeBanner;

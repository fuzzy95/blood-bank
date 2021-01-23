import React from 'react';

const NumberSection = () => {
  return (
    <>
      <section className='relative text-gray-700 body-font bg-gray-200'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='flex justify-evenly flex-wrap -m-4 text-center'>
            <div className='p-4 md:w-1/4 sm:w-1/2 w-full'>
              <div className='border-0 px-4 py-6 rounded-lg nm-flat-gray-200'>
                <svg
                  fill='none'
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  className='text-blood w-12 h-12 mb-3 inline-block'
                  viewBox='0 0 24 24'
                >
                  <path d='M8 17l4 4 4-4m-4-5v9'></path>
                  <path d='M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29'></path>
                </svg>
                <h2 className='title-font font-medium text-3xl text-gray-900'>
                  2.7K
                </h2>
                <p className='leading-relaxed'>Total Active Donors</p>
              </div>
            </div>
            <div className='p-4 md:w-1/4 sm:w-1/2 w-full'>
              <div className='border-0 px-4 py-6 rounded-lg nm-flat-gray-200'>
                <svg
                  fill='none'
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  className='text-blood w-12 h-12 mb-3 inline-block'
                  viewBox='0 0 24 24'
                >
                  <path d='M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2'></path>
                  <circle cx='9' cy='7' r='4'></circle>
                  <path d='M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75'></path>
                </svg>
                <h2 className='title-font font-medium text-3xl text-gray-900'>
                  5.3K
                </h2>
                <p className='leading-relaxed'>Total Users</p>
              </div>
            </div>
            <div className='p-4 md:w-1/4 sm:w-1/2 w-full'>
              <div className='border-0 px-4 py-6 rounded-lg nm-flat-gray-200'>
                <svg
                  fill='none'
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  className='text-blood w-12 h-12 mb-3 inline-block'
                  viewBox='0 0 24 24'
                >
                  <path d='M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'></path>
                </svg>
                <h2 className='title-font font-medium text-3xl text-gray-900'>
                  46
                </h2>
                <p className='leading-relaxed'>Places</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NumberSection;

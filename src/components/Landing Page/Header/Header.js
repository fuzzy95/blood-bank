import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import searchOutlined from '@iconify-icons/ant-design/search-outlined';
import HeaderSvg from '../../SVGs/HeaderSvg';

const Header = () => {
  return (
    <>
      <div className='container mx-auto px-10 font-lobster h-auto lg:mt-32 mt-10 mb-32'>
        <div className='flex flex-col lg:flex-row lg:justify-between justify-center items-center lg:space-y-0 space-y-14'>
          <div className='lg:w-1/2 w-full lg:ml-0 ml-20'>
            <HeaderSvg />
          </div>
          <div className='lg:w-1/2 w-full flex flex-col justify-center items-center space-y-8'>
            <h1 className='text-center lg:text-6xl text-2xl text-blood font-bold'>
              Donate Blood,
              <br /> Save Lives.
            </h1>
            <p className='font-maven text-base text-black text-center'>
              Be a blood donor and save the lives of the people those who need
              it most
            </p>
            <div>
              <Link>
                <button className='inline-flex font-maven font-medium items-center nm-convex-ash hover:bg-blood text-blood hover:text-black border-0 py-3 px-8 focus:outline-none rounded text-base mt-3'>
                  Become a Donor
                </button>
              </Link>
            </div>
            <div class='flex justify-center items-center space-x-4'>
              <span class='inline-block h-1 w-10 rounded bg-blood' />
              <span class='inline-block text-xl'>Or</span>
              <span class='inline-block h-1 w-10 rounded bg-blood' />
            </div>
            <div className='flex flex-col items-start space-y-3'>
              <h3 className='text-xl font-bold font-maven text-blood self-center'>
                Search for a Blood Donor
              </h3>
              <div className='flex flex-col items-center relative mr-4 w-full'>
                <input
                  type='text'
                  id='hero-field'
                  name='hero-field'
                  placeholder='type the blood group'
                  className='w-full nm-inset-white font-meera bg-gray-100 rounded border-t border-l font-maven 
                  focus:border-blood text-base outline-none text-gray-900 py-1 px-3 leading-8 
                  transition-colors duration-200 ease-in-out z-10'
                />
                <div className='font-maven'>
                  <Link to='/bloodtakerreg'>
                    <button className='inline-flex items-center nm-flat-ash hover:bg-blood text-blood hover:text-white border-0 py-2 px-4 focus:outline-none rounded text-base mt-3'>
                      <Icon className='mr-1' icon={searchOutlined} />
                      Search
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

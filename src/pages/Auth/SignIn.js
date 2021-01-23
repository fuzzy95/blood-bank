import { Icon } from '@iconify/react';
import loginOutlined from '@iconify-icons/ant-design/login-outlined';

const SignIn = () => {
  return (
    <>
      <section className='text-gray-600 body-font font-rajdhani h-screen mt-20 -mb-60'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='w-full flex flex-wrap justify-center items-center'>
            <div className='xl:w-1/3 lg:w-2/4 md:w-1/2 w-full nm-flat-white-sm rounded-lg border-t-2 border-l-2 border-gray-700 p-8 flex flex-col mt-10 md:mt-0'>
              <h2 className='text-black text-xl font-semibold title-font mb-2 self-center text-center'>
                Sign In
              </h2>
              <p className='text-black text-base mb-5 self-center text-center'>
                Enter your email id and password to sign in.
              </p>
              <div className='relative mb-4'>
                <label
                  for='email'
                  className='leading-7 font-medium text-base text-black'
                >
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  className='w-full bg-white nm-inset-white-sm rounded border border-gray-300 focus:border-red-100 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                />
              </div>
              <div className='relative mb-4'>
                <label
                  for='password'
                  className='leading-7 font-medium text-base text-black'
                >
                  Password
                </label>
                <input
                  type='password'
                  id='password'
                  name='password'
                  className='w-full bg-white nm-inset-white-sm rounded border border-gray-300 focus:border-red-100 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                />
              </div>
              <button className='transition duration-300 font-semibold text-black hover:text-white border-t-2 border-black nm-flat-white-sm border-0 py-2 px-8 focus:outline-none hover:bg-black rounded text-lg flex justify-center items-center space-x-8'>
                <Icon className='mr-2' icon={loginOutlined} />
                Login
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignIn;

import { useState, useEffect } from 'react';
import { auth } from '../../firebase';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';

const SignUp = ({ history }) => {
  const [email, setEmail] = useState('');

  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    if (user && user.token) history.push('/');
    // eslint-disable-next-line
  }, [user]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const config = {
      url: process.env.REACT_APP_REGISTER_REDIRECT_URL,
      handleCodeInApp: true,
    };

    await auth.sendSignInLinkToEmail(email, config);
    toast.success(
      `Email is sent to ${email}. Click the link to complete your registration.`
    );

    window.localStorage.setItem('emailForRegistration', email);

    setEmail('');
  };

  const signUpForm = () => (
    <form onSubmit={handleSubmit} className='relative mb-4'>
      <label
        htmlFor='email'
        className='leading-7 font-medium text-base text-gray-800'
      >
        Email
      </label>
      <input
        type='email'
        id='email'
        name='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='Enter your email address'
        className='w-full bg-ash nm-inset-ash rounded focus:border-red-100 focus:ring-1 focus:ring-blood text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out'
      />
      <button
        type='submit'
        className=' mt-4 w-full transition duration-300 font-semibold text-blood hover:text-white border-t-2 border-blood nm-flat-ash border-0 py-2 px-8 focus:outline-none hover:bg-blood rounded text-lg flex justify-center items-center space-x-8'
      >
        Register
      </button>
    </form>
  );

  return (
    <>
      <section className='text-gray-600 body-font font-rajdhani lg:h-screen h-auto lg:mt-20 mt-auto lg:-mb-60 mb-0'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='w-full flex flex-wrap justify-center items-center'>
            <div className='xl:w-1/3 lg:w-2/4 md:w-1/2 w-full nm-flat-ash rounded-lg p-8 flex flex-col mt-10 md:mt-0'>
              <h2 className='text-black text-xl font-semibold title-font mb-2 self-center text-center'>
                Sign Up
              </h2>
              <p className='text-black text-base mb-5 self-center text-center'>
                Enter your email id to continue.
              </p>
              {signUpForm()}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;

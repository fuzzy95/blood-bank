import React, { useEffect, useState } from 'react';
import { auth } from '../../firebase';
import { toast } from 'react-toastify';

const SignUpComplete = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassaword] = useState('');

  useEffect(() => {
    setEmail(window.localStorage.getItem('emailForRegistration'));
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // validation
    if (!email || !password) {
      toast.error('Email and password is required');
      return;
    }

    if (password.length < 6) {
      toast.error('Password must be 6 character long.');
      return;
    }

    try {
      const result = await auth.signInWithEmailLink(
        email,
        window.location.href
      );
      if (result.user.emailVerified) {
        window.localStorage.removeItem('emailForRegistration');
        let user = auth.currentUser;
        await user.updatePassword(password);
        const idTokenResult = await user.getIdTokenResult();
        //redux store

        // history.push('/blooddonorreg');
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const completeSignUpForm = () => (
    <form onSubmit={handleSubmit} className='relative mb-4'>
      <input
        type='email'
        id='email'
        name='email'
        value={email}
        placeholder='Enter your email address'
        className='w-full bg-ash nm-flat-ash rounded focus:border-red-100 focus:ring-1 focus:ring-blood text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out'
      />
      <label
        htmlFor='password'
        className='leading-7 font-medium text-base text-gray-800'
      >
        password
      </label>
      <input
        type='password'
        id='password'
        name='password'
        value={password}
        onChange={(e) => setPassaword(e.target.value)}
        placeholder='Enter your password'
        className='w-full bg-ash nm-inset-ash rounded focus:border-red-100 focus:ring-1 focus:ring-blood text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out'
      />
      <button
        type='submit'
        className=' mt-4 w-full transition duration-300 font-semibold text-blood hover:text-white border-t-2 border-blood nm-flat-ash border-0 py-2 px-8 focus:outline-none hover:bg-blood rounded text-lg flex justify-center items-center space-x-8'
      >
        Complete Registration
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
                Complete Sign Up
              </h2>
              <p className='text-black text-base mb-5 self-center text-center'>
                Enter your password to complete the sign up process.
              </p>
              {completeSignUpForm()}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUpComplete;

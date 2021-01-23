import { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import loginOutlined from '@iconify-icons/ant-design/login-outlined';
import { auth } from '../../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const SignIn = ({ history }) => {
  const [email, setEmail] = useState('eshaq.asif@gmail.com');
  const [password, setPassword] = useState('123456');
  const [loading, setLoading] = useState(false);

  let dispatch = useDispatch();
  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    if (user && user.token) history.push('/');
    // eslint-disable-next-line
  }, [user]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const result = await auth.signInWithEmailAndPassword(email, password);
      const { user } = result;
      const idTokenResult = await user.getIdTokenResult();
      dispatch({
        type: 'LOGGED_IN_USER',
        payload: {
          email: user.email,
          token: idTokenResult.token,
        },
      });
      history.push('/userdashboard');
    } catch (error) {
      console.log(error);
      toast.error(error.message);
      setLoading(false);
    }
  };

  const loginForm = () => (
    <form onSubmit={handleSubmit}>
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Your email'
          className='w-full bg-white nm-inset-ash rounded border border-gray-300 focus:border-red-100 focus:ring-1 focus:ring-blood text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out'
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Your password'
          className='w-full bg-white nm-inset-ash rounded border border-gray-300 focus:border-red-100 focus:ring-1 focus:ring-blood text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out'
        />
      </div>
      <button
        onClick={handleSubmit}
        className='w-full transition duration-300 font-semibold text-black hover:text-white border-t-2 border-black nm-flat-ash border-0 py-2 px-8 focus:outline-none hover:bg-black rounded text-lg flex justify-center items-center space-x-8'
      >
        <Icon className='mr-2' icon={loginOutlined} />
        Login
      </button>
    </form>
  );

  return (
    <>
      <section className='text-gray-600 body-font font-rajdhani h-screen mt-20 -mb-60'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='w-full flex flex-wrap justify-center items-center'>
            <div className='xl:w-1/3 lg:w-2/4 md:w-1/2 w-full nm-flat-ash rounded-lg p-8 flex flex-col mt-10 md:mt-0'>
              {loading ? (
                <h2 className='text-gray-800 text-xl font-semibold title-font mb-2 self-center text-center'>
                  Sign In
                </h2>
              ) : (
                <h2 className='text-blood text-xl font-semibold title-font mb-2 self-center text-center'>
                  Loading...
                </h2>
              )}
              <p className='text-black text-base mb-5 self-center text-center'>
                Enter your email id and password to sign in.
              </p>
              {loginForm()}
              <p className='text-blood text-base self-end font-semibold mt-5'>
                <Link to='/forgot/password'>*Forgot password.</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignIn;

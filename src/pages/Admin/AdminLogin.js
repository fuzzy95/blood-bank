import { Icon } from '@iconify/react';
import loginOutlined from '@iconify-icons/ant-design/login-outlined';
import { auth } from '../../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useState, useEffect } from 'react';

const AdminLogin = ({ history }) => {
  const [email, setEmail] = useState('eshaq.asif@gmail.com');
  const [password, setPassword] = useState('123456');

  let dispatch = useDispatch();
  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    if (user && user.token) history.push('/');
    // eslint-disable-next-line
  }, [user]);

  const handleSubmit = async (event) => {
    event.preventDefault();

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
      history.push('/admindashboard');
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const adminLoginForm = () => (
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
          placeholder='Enter email'
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
          placeholder='Enter Password'
          className='w-full bg-white nm-inset-ash rounded border border-gray-300 focus:border-red-100 focus:ring-1 focus:ring-blood text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out'
        />
      </div>
      <button className='w-full transition duration-300 font-semibold text-black hover:text-white border-t-2 border-black nm-flat-ash border-0 py-2 px-8 focus:outline-none hover:bg-black rounded text-lg flex justify-center items-center space-x-8'>
        <Icon className='mr-2' icon={loginOutlined} />
        Login
      </button>
    </form>
  );

  return (
    <>
      <div>
        <section className='text-gray-600 body-font font-maven lg:h-screen h-auto lg:mt-20 mt-8 lg:-mb-60 mb-0'>
          <div className='container px-5 py-24 mx-auto'>
            <div className='w-full flex flex-wrap justify-center items-center'>
              <div className='xl:w-1/3 lg:w-2/4 md:w-1/2 w-full nm-flat-ash rounded-lg border-t-2 border-l-2 border-gray-700 p-8 flex flex-col mt-10 md:mt-0'>
                <h2 className='text-black text-xl font-semibold title-font mb-2 self-center text-center'>
                  Admin Login
                </h2>
                {adminLoginForm()}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AdminLogin;

import userAddOutlined from '@iconify-icons/ant-design/user-add-outlined';
import userOutlined from '@iconify-icons/ant-design/user-outlined';
import logoutOutlined from '@iconify-icons/ant-design/logout-outlined';
import { Link, useHistory } from 'react-router-dom';
import { Icon } from '@iconify/react';
import PrimaryButton from '../Buttons/PrimaryButton';
import { useDispatch, useSelector } from 'react-redux';
import firebase from 'firebase';

const Navbar = () => {
  let dispatch = useDispatch();
  let history = useHistory();
  // access data from redux state
  let { user } = useSelector((state) => ({ ...state }));

  const logout = () => {
    firebase.auth().signOut();
    dispatch({
      type: 'LOGOUT',
      payload: null,
    });
    history.push('/signin');
  };

  return (
    <>
      <header className='text-gray-600 font-maven body-font'>
        <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
          <Link
            to='/'
            className='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0'
          >
            <img className='w-16' src='/img/blood_logo.png' alt='' />
            <span className='ml-3 font-lobster text-xl'>Blood Bank</span>
          </Link>
          <nav className='md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center'>
            <Link to='/blog' className='mr-5 hover:text-gray-900'>
              Blogs
            </Link>
            <Link to='/support' className='mr-5 hover:text-gray-900'>
              Support
            </Link>
          </nav>
          <div className='flex justify-between items-center space-x-4'>
            {!user && (
              <PrimaryButton to='/signin' text='Sign In' icon={userOutlined} />
            )}
            {!user && (
              <PrimaryButton
                to='/signup'
                text='Sign Up'
                icon={userAddOutlined}
              />
            )}
            {user && (
              <div className='flex justify-between items-center space-x-4'>
                <Link
                  to='/userdashboard'
                  className='mr-5 text-blood font-maven font-semibold hover:text-gray-900'
                >
                  {user.email && user.email.split('@')[0]}
                </Link>
                <button
                  onClick={logout}
                  className='inline-flex items-center nm-concave-ash text-blood hover:text-black border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0'
                >
                  <Icon className='mr-1' icon={logoutOutlined} />
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;

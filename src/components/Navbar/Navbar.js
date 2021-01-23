import userAddOutlined from '@iconify-icons/ant-design/user-add-outlined';
import userOutlined from '@iconify-icons/ant-design/user-outlined';
import { Link, useHistory } from 'react-router-dom';
import PrimaryButton from '../Buttons/PrimaryButton';
import { useDispatch } from 'react-redux';
import firebase from '../../firebase';

const Navbar = () => {
  let dispatch = useDispatch();
  let history = useHistory();

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
      <header className='text-gray-600 body-font'>
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
            <PrimaryButton to='/signin' text='Sign In' icon={userOutlined} />
            <PrimaryButton to='/signup' text='Sign Up' icon={userAddOutlined} />
            <PrimaryButton text='Logout' icon={userAddOutlined} />
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;

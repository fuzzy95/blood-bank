import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

const PrimaryButton = ({ text, icon, to }) => {
  return (
    <>
      <Link to={to}>
        <button className='inline-flex items-center nm-concave-ash text-blood hover:text-black border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0'>
          <Icon className='mr-1' icon={icon} />
          {text}
        </button>
      </Link>
    </>
  );
};

export default PrimaryButton;

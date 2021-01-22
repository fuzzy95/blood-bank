import { Icon } from '@iconify/react';

const PrimaryButton = ({ text, icon }) => {
  return (
    <>
      <button className='inline-flex items-center nm-concave-ash text-blood hover:text-black border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0'>
        <Icon className='mr-1' icon={icon} />
        {text}
      </button>
    </>
  );
};

export default PrimaryButton;

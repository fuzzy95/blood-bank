import { Icon } from '@iconify/react';

const SqueredButton = ({ iconName }) => {
  return (
    <>
      <div className='p-3 nm-concave-ash cursor-pointer rounded-2xl'>
        <Icon className='text-blood text-2xl' icon={iconName} />
      </div>
    </>
  );
};

export default SqueredButton;

import settingsAdjust from '@iconify-icons/carbon/settings-adjust';
import SqueredButton from '../../components/Buttons/SqueredButton';

function DonationRequest({ name, bloodGroup, relation, phNo, location, time }) {
  return (
    <div className='w-1/5 h-32 nm-flat-ash-lg rounded-2xl flex flex-col justify-center items-center'>
      <h3 className='text-xl font-bold text-blood'>{name}</h3>
      <div className='w-full flex justify-evenly'>
        <p className='text-blood font-bold'>{bloodGroup}</p>
        <p>{relation}</p>
      </div>
      <p className='text-gray-800'>{phNo}</p>
      <p className='text-blood'>{location}</p>
      <p className='text-gray-800'>{time}</p>
    </div>
  );
}

const AdminDashboard = () => {
  return (
    <>
      <div className='p-6 h-screen bg-ash mb-10 font-maven'>
        <div className='bg-white nm-flat-white h-auto p-3 rounded-3xl container mx-auto'>
          <div className='bg-ash rounded-3xl h-full w-auto flex justify-center'>
            <div className='w-5/6 rounded-br-3xl rounded-tr-3xl px-16 py-8'>
              <div className='flex flex-col space-y-8 mb-8'>
                <h3 className='text-black text-4xl font-bold tracking-tight'>
                  Blood Donation Requests
                </h3>
                <div className='w-full flex justify-between'>
                  <DonationRequest
                    name='SM Asif Bin Eshaq'
                    bloodGroup='B+'
                    relation='Brother'
                    phNo='0123456789'
                    location='Mohammadpur'
                    time='25/01/2021'
                  />
                  <DonationRequest
                    name='SM Asif Bin Eshaq'
                    bloodGroup='B+'
                    relation='Brother'
                    phNo='0123456789'
                    location='Mohammadpur'
                    time='25/01/2021'
                  />
                  <DonationRequest
                    name='SM Asif Bin Eshaq'
                    bloodGroup='B+'
                    relation='Brother'
                    phNo='0123456789'
                    location='Mohammadpur'
                    time='25/01/2021'
                  />
                  <DonationRequest
                    name='SM Asif Bin Eshaq'
                    bloodGroup='B+'
                    relation='Brother'
                    phNo='0123456789'
                    location='Mohammadpur'
                    time='25/01/2021'
                  />
                </div>
              </div>
              <div className='flex justify-between'>
                <div className='w-1/5 flex flex-col justify-center items-center'>
                  <div className='w-full flex justify-between mb-12'>
                    <h3 className='text-black font-semibold text-2xl'>
                      Donor Online
                    </h3>
                    <SqueredButton iconName={settingsAdjust} />
                  </div>
                  <div className='w-full flex flex-wrap flex-col justify-center space-y-8'>
                    <div className='w-full h-20 nm-flat-ash-lg rounded-2xl'>
                      test
                    </div>
                    <div className='w-full h-20 nm-flat-ash-lg rounded-2xl'>
                      test
                    </div>
                    <div className='w-full h-20 nm-flat-ash-lg rounded-2xl'>
                      test
                    </div>
                    <div className='w-full h-20 nm-flat-ash-lg rounded-2xl'>
                      test
                    </div>
                    <div className='w-full h-20 nm-flat-ash-lg rounded-2xl'>
                      test
                    </div>
                  </div>
                </div>
                <div className='w-3/5 flex flex-col justify-center items-center'>
                  <div className='w-full flex justify-between mb-12'>
                    <h3 className='text-black font-semibold text-2xl'>
                      Donor List
                    </h3>
                    <SqueredButton iconName={settingsAdjust} />
                  </div>
                  <div className='w-full flex flex-wrap flex-col justify-center space-y-8'>
                    <div className='w-full h-20 nm-flat-ash-lg rounded-2xl'>
                      test
                    </div>
                    <div className='w-full h-20 nm-flat-ash-lg rounded-2xl'>
                      test
                    </div>
                    <div className='w-full h-20 nm-flat-ash-lg rounded-2xl'>
                      test
                    </div>
                    <div className='w-full h-20 nm-flat-ash-lg rounded-2xl'>
                      test
                    </div>
                    <div className='w-full h-20 nm-flat-ash-lg rounded-2xl'>
                      test
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;

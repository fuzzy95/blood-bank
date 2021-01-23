import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Icon } from '@iconify/react';
import tickIcon from '@iconify-icons/subway/tick';
import { useState, useEffect } from 'react';

const RequesterRegistration = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [bgroup, setBgroup] = useState(new Date());

  useEffect(() => {
    setBgroup(window.localStorage.getItem('bloodGroup'));
  }, []);

  const handleSubmit = () => {
    window.localStorage.removeItem('emailForRegistration');
  };

  return (
    <>
      <section className='text-gray-600 body-font font-rajdhani'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='w-full flex flex-wrap justify-center items-center'>
            <form className='xl:w-1/3 lg:w-2/4 md:w-1/2 w-full nm-flat-white-sm rounded-lg border-t-2 border-l-2 border-blood p-8 flex flex-col mt-10 md:mt-0'>
              <h2 className='text-black text-xl font-semibold title-font mb-2 self-center text-center'>
                Request Form
              </h2>
              <p className='text-black text-base mb-5 self-center text-center'>
                Fill up the form to request for blood donor.
              </p>
              <p className='text-blood font-medium'>Request Details</p>
              <div className=''>
                <label
                  className='block text-sm text-gray-00'
                  htmlFor='cus_name'
                >
                  Name
                </label>
                <input
                  className='nm-inset-ash w-full px-5 py-2 text-gray-700 bg-gray-200 rounded'
                  id='cus_name'
                  name='cus_name'
                  type='text'
                  required='true'
                  placeholder='Your Name'
                  aria-label='Name'
                />
              </div>
              <div className='mt-2'>
                <label className='block text-sm text-gray-00' htmlFor='cus_tel'>
                  Mobile
                </label>
                <input
                  className='nm-inset-ash w-full px-5 py-2 text-gray-700 bg-gray-200 rounded'
                  id='cus_tel'
                  name='cus_tel'
                  type='tel'
                  required=''
                  placeholder='Phone Number'
                  aria-label='Name'
                />
              </div>
              <div className='mt-2'>
                <label className='block text-sm text-gray-00' htmlFor='cus_tel'>
                  Alternate mobile
                </label>
                <input
                  className='nm-inset-ash w-full px-5 py-2 text-gray-700 bg-gray-200 rounded'
                  id='cus_tel'
                  name='cus_tel'
                  type='tel'
                  required=''
                  placeholder='Alternate Phone Number'
                  aria-label='Name'
                />
              </div>
              <div className='mt-2'>
                <label
                  className='block text-sm text-gray-600'
                  htmlFor='cus_email'
                >
                  Relation with the patient
                </label>
                <input
                  className='nm-inset-ash w-full px-5 py-2 text-gray-700 bg-gray-200 rounded'
                  id='hero-field'
                  name='hero-field'
                  type='text'
                  required=''
                  placeholder='Your relation'
                  aria-label='Relation'
                />
              </div>
              <div className='mt-2 flex justify-between'>
                <div className='w-1/2'>
                  <label className='block'>
                    <span className='block text-sm text-gray-600'>
                      Blood Group
                    </span>
                    <input
                      className='nm-flat-ash w-full px-5 py-2 text-gray-700 bg-gray-200 rounded'
                      id='cus_email'
                      name='cus_email'
                      type='text'
                      required=''
                      placeholder='Your Email'
                      aria-label='Email'
                      value={bgroup}
                    />
                  </label>
                </div>
                <div>
                  <label
                    className='block text-sm text-gray-600'
                    htmlFor='cus_email'
                  >
                    Date of Donation
                  </label>
                  <DatePicker
                    className='w-full nm-inset-ash px-2 py-2 text-gray-700 bg-gray-200 rounded'
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    minDate={new Date()}
                    showYearDropdown
                    scrollableMonthYearDropdown
                  />
                </div>
              </div>
              {/* Addreess input starts */}
              <p className='text-base mt-2 -mb-1'>Address</p>
              <div className='mt-2 flex'>
                <div className='inline-block w-1/2 pr-1'>
                  <label className='text-sm text-gray-600' htmlFor='cus_email'>
                    Union
                  </label>
                  <input
                    className='nm-inset-ash w-full px-2 py-2 text-gray-700 bg-gray-200 rounded'
                    id='cus_email'
                    name='cus_email'
                    type='text'
                    required=''
                    placeholder='Union'
                    aria-label='Email'
                  />
                </div>
                <div className='inline-block pl-1 w-1/2'>
                  <label className='text-sm text-gray-600' htmlFor='cus_email'>
                    Postoffice
                  </label>
                  <input
                    className='nm-inset-ash w-full px-2 py-2 text-gray-700 bg-gray-200 rounded'
                    id='cus_email'
                    name='cus_email'
                    type='text'
                    required=''
                    placeholder='Postoffice'
                    aria-label='Email'
                  />
                </div>
              </div>
              <div className='mt-2'>
                <label
                  className=' block text-sm text-gray-600'
                  htmlFor='cus_email'
                >
                  Police Station
                </label>
                <input
                  className='nm-inset-ash w-full px-2 py-2 text-gray-700 bg-gray-200 rounded'
                  id='cus_email'
                  name='cus_email'
                  type='text'
                  required=''
                  placeholder='Your Police Station'
                  aria-label='address'
                />
              </div>
              <div className='mt-2'>
                <label className='text-sm text-gray-600' htmlFor='cus_email'>
                  District
                </label>
                <input
                  className='nm-inset-ash w-full px-2 py-2 text-gray-700 bg-gray-200 rounded'
                  id='cus_email'
                  name='cus_email'
                  type='text'
                  required=''
                  placeholder='Your District'
                  aria-label='Email'
                />
              </div>
              <button
                onClick={handleSubmit}
                className='mt-4 transition duration-300 font-semibold text-black hover:text-white border-t-2 border-blood nm-flat-white-sm border-0 py-2 px-8 focus:outline-none hover:bg-blood rounded text-lg flex justify-center items-center space-x-8'
              >
                <Icon className='mr-1' icon={tickIcon} />
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default RequesterRegistration;

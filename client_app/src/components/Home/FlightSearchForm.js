import React from 'react';
import FlightIcon from '@mui/icons-material/Flight';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import EventIcon from '@mui/icons-material/Event';

const FlightSearchForm = () => {
  return (
    <div className='bg-white rounded-lg min-h-[150px] p-4'>
      <form>
        <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
          <div className='flex items-center gap-2'>
            <div className='rotate-90'><FlightIcon /></div>
            <div className='font-bold text-lg'>BOOK YOUR FLIGHT</div>
          </div>
          <div className='flex'>
            <button disabled className='bg-purple-900 text-white text-sm py-2 px-4 rounded-l-full cursor-pointer'>Round trip</button>
            <button disabled className='bg-gray-200 text-purple-900 text-sm py-2 px-4 rounded-r-full cursor-pointer'>One Way</button>
          </div>
        </div>
        <div className='flex flex-col md:flex-row gap-4 mt-4'>
          <div className='flex flex-col md:flex-row gap-1'>
            <div className='border py-2 px-3 border-gray-300 shadow-sm rounded-r-full rounded-l-full md:rounded-r-none flex items-center'>
              <FlightTakeoffIcon sx={{ color: '#4b1c7d' }} />
              <input placeholder='Istanbul' className='focus:outline-none ml-2' type="text" />
            </div>
            <div className='border py-2 px-3 border-gray-300 shadow-sm rounded-r-full rounded-l-full md:rounded-l-none flex items-center'>
              <FlightLandIcon sx={{ color: '#4b1c7d' }} />
              <input placeholder='Paris' className='focus:outline-none ml-2' type="text" />
            </div>
          </div>
          <div className='flex flex-col md:flex-row gap-1'>
            <div className='border py-2 px-3 lg:px-14 border-gray-300 shadow-sm rounded-r-full rounded-l-full md:rounded-r-none flex items-center'>
              <EventIcon sx={{ color: '#4b1c7d' }} />
              <input type='date' />
            </div>
            <div className='border py-2 px-3 lg:px-14 border-gray-300 shadow-sm rounded-r-full rounded-l-full md:rounded-l-none flex items-center'>
              <EventIcon sx={{ color: '#4b1c7d' }} />
              <input type='date' />
            </div>
          </div>
        </div>
        <div className='mt-4'>
          <button disabled className='bg-purple-900 cursor-pointer text-white text-sm font-medium px-4 py-2 rounded-lg' type="submit">Show flights</button>
        </div>
      </form>
    </div>
  );
};

export default FlightSearchForm;

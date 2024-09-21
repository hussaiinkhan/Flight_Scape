import React from 'react';
import FlightIcon from '@mui/icons-material/Flight';

const Footer = () => {
  return (
    <div className='bg-gray-100 w-full text-gray-600 py-2 sm:py-4 flex flex-col justify-center items-center'>
      <div className="flex items-center justify-center mb-1 text-center ml-9">
        <FlightIcon className='rounded-full' style={{ fontSize: 25, transform: 'rotate(90deg)', color: 'white', backgroundColor: "#4b1c7d" }} />
        <h1 className='text-2xl font-semibold text-gray-700 ml-2 mr-12 '>Plane Scape</h1>
      </div>
      <p className='text-sm'>Created by Hussain Mehboob</p>
    </div>
  );
};

export default Footer;

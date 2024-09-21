import React from 'react';
import { useLocation } from 'react-router-dom';
import FlightIcon from '@mui/icons-material/Flight';

const FlightDetails = () => {
  const location = useLocation();
  const { flight, price, duration, departureTime, arrivalTime, departureAirport, arrivalAirport, airline } = location.state;

  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-100 font-mono'>
      <div className='bg-white shadow-lg rounded-lg p-16 max-w-lg w-full mx-4'>
        {/* Brand Header */}
        <div className="flex items-center justify-center mb-4">
          <FlightIcon className='rounded-full' style={{ fontSize: 40, transform: 'rotate(90deg)', color: 'white', backgroundColor: "#4b1c7d" }} />
          <h1 className='text-3xl font-bold text-gray-900 ml-2 mr-12'>Plane&nbsp;Scape</h1>
        </div>

        {/* Main Heading */}
        <h2 className='text-2xl font-bold text-purple-900 mb-6 text-center'>
            Flight Details
        </h2>

        {/* Airline Information */} 
        <div className='mb-4'>
          <p className='font-bold text-lg text-gray-800'>{airline}</p>
          <p className='text-gray-600'>Flight Number: {flight.flightNumber}</p>
        </div>

        {/* Departure and Arrival Information */}
        <div className='flex justify-between mb-4'>
          <div>
            <p className='text-gray-500'>Departure</p>
            <p className='font-bold text-lg'>{departureTime} AM</p>
            <p className='text-sm text-gray-500'>{departureAirport}</p>
          </div>
          <FlightIcon style={{ fontSize: 24, color: '#26ac81',transform: 'rotate(90deg)' }} className='self-center' />
          <div>
            <p className='text-gray-500'>Arrival</p>
            <p className='font-bold text-lg'>{arrivalTime} PM</p>
            <p className='text-sm text-gray-500'>{arrivalAirport?arrivalAirport:'XYZ'}</p>
          </div>
        </div>

        {/* Duration and Price */}
        <div className='mb-4'>
          <p className='font-bold text-lg'>
            Flight Duration: <span className='text-gray-700'>{duration}</span>
          </p>
        </div>
        <div className='mb-4'>
          <p className='font-bold text-lg'>
            Price: <span className='text-green-600'>${price}</span>
          </p>
        </div>

        {/* Additional Message */}
        <div className='text-center'>
          <p className='text-gray-600 font-semibold'>Wishing you a safe and pleasant journey with Plane Scape!</p>
        </div>
      </div>
    </div>
  );
};

export default FlightDetails;

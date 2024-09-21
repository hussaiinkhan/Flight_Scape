import React, { useEffect, useState } from 'react';
import BookedFlightsFilters from './BookedFlightsFilters';
import BookedFlightCard from './BookedFlightCard';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Loading from '../Other/Loading';
import axios from 'axios';

const MyFlights = () => {
  const [bookedFlights, setBookedFlights] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  // Fetch booked flights on component mount
  useEffect(() => {
    const fetchBookedFlights = async () => {
      try {
        const token = localStorage.getItem('token'); // Get token from local storage
        const response = await axios.get('http://localhost:5001/api/flights/booked-flights', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setBookedFlights(response.data); // Set the booked flights data
      } catch (error) {
        console.error('Error fetching booked flights:', error);
      } finally {
        setLoading(false); // Set loading to false after data fetch
      }
    };

    fetchBookedFlights();
  }, []);

  return (
    <div className={`flex flex-col gap-6 mb-12 ${bookedFlights.length>3?'h-full':'h-screen'}`}>
      <BookedFlightsFilters />
      <div className='flex px-4 sm:px-12 justify-between'>
        <p className='text-gray-600'>
          Sort by: <span className='font-bold text-gray-800'>Recommended</span> <ArrowDropDownIcon />
        </p>
        <div className='flex justify-center items-center gap-1'>
          <InfoOutlinedIcon sx={{ color: '#33aaff' }} />
          <p className='text-gray-600'>
            Avg Fare: <span className='font-bold text-gray-800'>$225</span>
          </p>
        </div>
      </div>
      <div className='px-12 flex flex-col gap-4'>
        {/* Show loading message if data is being fetched */}
        {loading ? (
          <div className='flex justify-center items-center'>
           <Loading/>
          </div>
        ) : bookedFlights.length === 0 ? (
          <div className='flex justify-center items-center py-60'>
            <p className='text-center text-gray-600'>You have not booked any flight yet!</p>
          </div>
        ) : (
          // Map over the bookedFlights array and render a BookedFlightCard for each flight
          bookedFlights.map(flight => (
            <BookedFlightCard key={flight._id} flight={flight} />
          ))
        )}
      </div>
    </div>
  );
};

export default MyFlights;

import React, { useContext } from 'react';
import FlightIcon from '@mui/icons-material/Flight';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../../contexts/UserContext';
import Swal from 'sweetalert2';
const FlightsCard = ({ flight }) => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  // Extract relevant details from flight data
  const departureTime = new Date(flight.scheduleDateTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const arrivalTime = new Date(flight.estimatedLandingTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const departureAirport = flight.route.destinations[0]; // Assuming the first destination is the departure airport
  const arrivalAirport = flight.route.destinations[1]; // Assuming the second destination is the arrival airport
  const airline = flight.flightName; // Using the flight name as the airline name

  // Function to generate a random price
  const getRandomPrice = () => {
    return (Math.random() * (500 - 100) + 100).toFixed(2); // Random price between $100 and $500
  };

  // Function to generate a random duration
  const getRandomDuration = () => {
    const hours = Math.floor(Math.random() * 4); // Random hours between 0 and 3
    const minutes = Math.floor(Math.random() * 60); // Random minutes between 0 and 59
    return `${hours === 0 ? 2 : hours}h ${minutes}min`;
  };

  const price = getRandomPrice();
  const duration = getRandomDuration();

  // Handle booking flight
  const handleBookFlight = async () => {
    if (!user) {
      // If the user is not logged in, navigate to the signin page
      navigate('/signin');
      return;
    }
  
    // If the user is logged in, proceed with booking the flight
    const flightDetails = {
        flightNumber : airline,
        departureTime ,
        arrivalTime ,
        duration ,
        price ,
        from : departureAirport,
        to : arrivalAirport
    };
  
    try {
      // Include token in the Authorization header
      const token = localStorage.getItem('token'); // Retrieve the token from localStorage
      const response = await axios.post('http://localhost:5001/api/flights/book', flightDetails, {
        headers: {
          'Authorization': `Bearer ${token}` // Send the token with the request
        }
      });
  
      if (response.status === 201) {
        Swal.fire({
          title: 'Success!',
          text: 'Flight booked successfully!',
          icon: 'success',
          confirmButtonText: 'OK',
        });
        navigate('/myflights')
      } else {
        Swal.fire({
          title: 'Error!',
          text: 'Failed to book the flight.',
          icon: 'error',
          confirmButtonText: 'Try Again',
        });
      }
    } catch (error) {
      console.error('Error booking flight:', error);
      Swal.fire({
        title: 'Error!',
        text: 'An error occurred while booking the flight.',
        icon: 'error',
        confirmButtonText: 'Try Again',
      });
    }
  };

    // Function to handle viewing flight details
    const handleViewDetails = () => {
      navigate('/flightdetails', { state: { flight, price, duration, departureTime, arrivalTime, departureAirport, arrivalAirport, airline } });
    };
  

  return (
    <div>
      <div className='bg-white mt-6 lg:min-w-[600px] max-w-[700px] rounded-lg rounded-bl-none min-h-[200px]'>
        <div className='flex flex-col gap-6'>
          <div className='font-bold px-4 text-sm mt-4 text-gray-800'>{departureAirport} - {arrivalAirport ? arrivalAirport : 'XYZ'}</div>
          <div className='flex items-center justify-between'>
            <div className='flex flex-col justify-center px-4'>
              <div className='text-xs text-gray-500 flex items-center gap-2'>
                <div><FlightTakeoffIcon /></div>
                <div>Departure</div>
              </div>
              <div className='font-bold text-sm'>{departureTime}</div>
              <div className='text-sm text-gray-500'>Airport: {departureAirport}</div>
            </div>
            <div className='text-gray-400'>______</div>
            <div className='flex flex-col justify-center'>
              <div className='text-sm font-bold text-green-700'>
                {airline}
              </div>
              <div><FlightIcon sx={{ color: '#4b1c7d', transform: 'rotate(90deg)' }} /></div>
              <div className='text-sm text-gray-500'>{duration}</div>
            </div>
            <div className='text-gray-400'>______</div>
            <div className='flex flex-col justify-center px-4'>
              <div className='text-xs text-gray-500 flex items-center gap-2'>
                <div><FlightLandIcon /></div>
                <div>Arrival</div>
              </div>
              <div className='font-bold text-sm'>{arrivalTime}</div>
              <div className='text-sm text-gray-500'>Airport: {arrivalAirport ? arrivalAirport : 'XYZ'}</div>
            </div>
          </div>
          <div className='flex justify-between'>
            <div className='flex flex-col gap-1 px-4'>
              <div className='text-purple-900 font-bold text-sm'>Price: ${price}</div> {/* Random price */}
              <div className='text-xs text-gray-500'>{arrivalAirport ? 'One Way Trip' : 'Round Trip'}</div> {/* Trip type based on availability */}
            </div>
            <div>
              <button onClick={handleBookFlight} className='bg-purple-900 py-4 px-8 text-white text-sm font-medium rounded-br-md rounded-tl-md'>
                Book Flight
              </button>
            </div>
          </div>
        </div>
      </div>
      <button onClick={handleViewDetails} className='bg-gray-200 px-4 py-2 rounded-b-md text-xs text-purple-900 underline'>Check the details</button>
    </div>
  );
};

export default FlightsCard;

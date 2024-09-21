import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import FlightSearchForm from './FlightSearchForm';
import Facilities from './Facilities';
import FlightsComponent from './FlightsComponent';
import FlightsFilter from './FlightsFilter';
import { UserContext } from '../../contexts/UserContext';

const Home = () => {
  const { user, setUser } = useContext(UserContext);
  const [filters, setFilters] = useState({ direction: '', date: '' });

  // Function to get user info from the database
  const getUserdata = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      console.error('No token found, cannot authenticate user.');
      return;
    }

    try {
      const response = await axios.get('http://localhost:5001/api/users/profile', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      const userData = { firstName: response.data.firstName, lastName: response.data.lastName, email: response.data.email, photo: response.data.photo };
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
    } catch (error) {
      console.error('Error fetching user data:', error.response ? error.response.data : error.message);
    }
  };

  // Load user data from localStorage on component mount
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    } else {
      getUserdata();
    }
  }, [setUser]);

  // Handle filter apply
  const handleFilterApply = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className="mt-4 p-4 mx-auto grid grid-cols-1 md:grid-cols-12 gap-4">
      <div className="md:col-span-9">
        <div className="flex flex-col gap-4">
          <div className="mt-12">
            <FlightSearchForm />
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <FlightsComponent direction={filters.direction} date={filters.date} />
            </div>
            <div className="hidden md:block md:w-1/3">
              <FlightsFilter onFilterApply={handleFilterApply} />
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:block md:col-span-3">
        <Facilities />
      </div>
    </div>
  );
};

export default Home;

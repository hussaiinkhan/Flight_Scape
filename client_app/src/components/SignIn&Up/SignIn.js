import React, { useState } from 'react';
import axios from 'axios';
import FlightIcon from '@mui/icons-material/Flight';
import { Link, useNavigate } from 'react-router-dom';

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    try {
      const response = await axios.post('http://localhost:5001/api/users/login', 
      { email, password });
      
      if (response.status === 200) {
        // Store the token in local storage
        localStorage.setItem('token', response.data.token);
        
        setFormData({ email: '', password: '' }); // Clear inputs
        navigate('/'); // Redirect to home page
      }
    } catch (error) {
      alert('Login failed. Please check your email and password.');
      console.error(error);
    }
  };

  return (
    <section className="bg-gray-100 h-screen px-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
        
        {/* Headings and Paragraph parts; only visible on desktop devices */}
        <div className="hidden lg:flex flex-col justify-center items-start">
          <div className="text-5xl flex justify-center items-center gap-2 font-bold mb-4 text-purple-900">
            <FlightIcon className='bg-purple-900 rounded-full' fontSize="large" sx={{ transform: 'rotate(90deg)', color: 'white' }} />
            <p>Plane Scape</p>
          </div>
          <h1 className="text-4xl font-bold mb-4 text-purple-900">
            Book Your Flight with Ease
          </h1>
          <p className="text-lg text-gray-700 mb-4">
            Discover a seamless and secure way to book your next flight with us. Manage your bookings, track flights, and enjoy a hassle-free travel experience.
          </p>
          <p className="text-lg text-gray-700">
            Sign in now to unlock exclusive deals and discounts on flights to your favorite destinations. It's fast, easy, and secure.
          </p>
        </div>
        
        {/* Sign In card */}
        
        <div className="flex justify-center items-center w-full lg:block">
          <div className="bg-white rounded-lg shadow sm:max-w-md xl:p-0 w-full">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <div className="text-xl flex justify-start items-center gap-2 font-bold mb-4 text-purple-900">
                <FlightIcon className='bg-purple-900 rounded-full' fontSize="large" sx={{ transform: 'rotate(90deg)', color: 'white' }} />
                <p>Plane Scape</p>
              </div>
              <h1 className="text-xl font-bold leading-tight tracking-tight text-purple-900 md:text-2xl">
                Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                    placeholder="name@email.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-purple-900 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Sign in
                </button>
                <p className="text-sm font-light text-gray-500">
                  Don’t have an account yet? <Link to='/signup' className="font-medium text-purple-900 hover:underline">Sign up</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default SignIn;

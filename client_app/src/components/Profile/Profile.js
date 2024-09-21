import React, { useContext,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import FlightIcon from '@mui/icons-material/Flight';
import { UserContext } from '../../contexts/UserContext'; // Import your UserContext

const Profile = () => {
    const { user, setUser } = useContext(UserContext); // Access user and setUser from UserContext
    const navigate = useNavigate(); // useNavigate for navigation

    // Handle logout
    const handleLogout = () => {
        // Remove token and user data from localStorage
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    
        // Clear the user context
        setUser(null);
        navigate('/')
    };

    
    return (
        <div className='flex flex-col justify-center items-center h-screen bg-gray-100 text-center'>
            <div className=" text-3xl sm:text-4xl md:text-5xl flex justify-center items-center gap-2 font-bold mb-4 text-purple-900">
                <FlightIcon className='bg-purple-900 rounded-full' fontSize="large" sx={{ transform: 'rotate(90deg)', color: 'white' }} />
                <p>Plane Scape</p>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-purple-900">Book Your Flight with Ease</h1>
            
            {/* User Profile Picture */}
            {user?.photo && (
                <img
                    src={`http://localhost:5001/${user.photo}`}
                    alt={`${user.firstName}'s profile`}
                    className="w-32 h-32 rounded-full object-cover mb-4"
                />
            )}
            
            {/* Welcome Message */}
            <p className="text-2xl font-bold text-gray-700 mb-1">
                Welcome {user?.firstName} {user?.lastName}
            </p>
            <p className="text-xl text-gray-700 mb-4">({user?.email})</p>

            {/* Logout Button */}
            <button 
                onClick={handleLogout} 
                className='bg-purple-900 px-16 font-bold text-sm py-4 rounded-full text-white'>
                Logout
            </button>
        </div>
    );
};

export default Profile;

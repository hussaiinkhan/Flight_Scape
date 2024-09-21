import React, { useState, useEffect  } from "react";
import Navbar from "./components/Other/Navbar";
import SignIn from "./components/SignIn&Up/SignIn";
import SignUp from "./components/SignIn&Up/SignUp";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import { UserContext } from './contexts/UserContext';
import MyFlights from "./components/MyFlights/MyFlights";
import FlightDetails from "./components/Home/FlightDetails";
import Footer from "./components/Other/Footer";



function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {

    // Rehydrate user from localStorage. Always do in App js so that when other pages are refreshed the variable must not lose it's value
    const storedUser = localStorage.getItem('user');
    if (storedUser!==null) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Error parsing user data:', error);
        localStorage.removeItem('user'); // Remove invalid data
      }
    }
  }, []);


  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route exact path='/signin' element={<SignIn />} />
            <Route exact path='/signup' element={<SignUp />} />
            <Route exact path='/' element={<Home />} />
            <Route exact path='/profile' element={<Profile />} />
            <Route exact path='/myflights' element={<MyFlights/>} />
            <Route path="/flightdetails" element={<FlightDetails />} />
          </Routes>
          <Footer/>
        </Router>
      </div>
    </UserContext.Provider>
  );
}

export default App;

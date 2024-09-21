const axios = require('axios');
const Flight = require('../models/Flight');


// Controller to get flights from the API

const getFlights = async (req, res) => {
  try {
    // Extract query parameters from the request
    const { flightDirection, scheduleDate } = req.query;

    // Construct the query parameters dynamically
    const apiUrl = 'https://api.schiphol.nl/public-flights/flights';
    const params = {};
    
    if (flightDirection) {
      params.flightDirection = flightDirection; // 'A' for arrival, 'D' for departure
    }

    if (scheduleDate) {
      params.scheduleDate = scheduleDate; // Format should be yyyy-MM-dd
    }

    // Make the API request with query parameters
    const response = await axios.get(apiUrl, {
      headers: {
        'Accept': 'application/json',
        'app_id': 'a98eaad9',  // Use environment variables
        'app_key': '798b664585b73309d292ca6b5e194328', // Use environment variables
        'ResourceVersion': 'v4',
      },
      params, // Pass the constructed params object here
    });

    // Send back the data to the client
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching flight data:", error);
    res.status(500).json({ error: "Failed to fetch flight data" });
  }
};

// Controller to save a booked flight
const bookFlight = async (req, res) => {
    const {flightNumber, departureTime, arrivalTime, duration, price, from, to } = req.body;
    const userId = req.user.id;  // Assuming user is authenticated and user ID is available in req.user

    try {
        const newFlight = new Flight({
            user: userId,
            flightNumber,
            departureTime,
            arrivalTime,
            duration,
            price,
            from,
            to,
           
        });

        await newFlight.save();
        res.status(201).json({ message: 'Flight booked successfully', flight: newFlight });
    } catch (error) {
        res.status(500).json({ message: 'Failed to book flight', error: error.message });
    }
};

// Controller to get the booked flights of the signed-in user
const getBookedFlights = async (req, res) => {
  const userId = req.user.id;  // Assuming user is authenticated and user ID is available in req.user

  try {
      const flights = await Flight.find({ user: userId });
      res.status(200).json(flights);
  } catch (error) {
      res.status(500).json({ message: 'Failed to retrieve booked flights', error: error.message });
  }
};


module.exports = {
  bookFlight,
  getBookedFlights,
  getFlights,

};




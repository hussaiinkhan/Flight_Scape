const express = require('express');
const { bookFlight, getBookedFlights,getFlights } = require('../controllers/flightController');
const { validateToken } = require('../middleware/authMiddleware');  // Middleware to validate user token
const router = express.Router();


router.get('/', getFlights);

// Route to book a flight
router.post('/book', validateToken, bookFlight);

// Route to fetch booked flights
router.get('/booked-flights', validateToken, getBookedFlights);

module.exports = router;
 
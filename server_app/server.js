const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const userRoutes = require('./routes/userRoutes');
const flightRoutes = require('./routes/flightRoutes'); // Import the flight routes
const connectDB = require('./config/dbConnection'); // Add MongoDB connection here
const cors = require('cors');
const path = require('path');

dotenv.config();
connectDB(); // MongoDB connection function

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({      //this is used to access the backend apis from front-end
    origin: 'http://localhost:3000',  //since our front-end will run on port 3000
    credentials: true
}));
app.use(cookieParser()); // Middleware to handle cookies

// Routes
app.use('/api/users', userRoutes);
app.use('/api/flights', flightRoutes); // Use the flight routes

// Static folder for profile images
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

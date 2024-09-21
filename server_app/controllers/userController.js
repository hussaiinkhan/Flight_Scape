const User = require('../models/User');
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Register a new user
const registerUser = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    firstName,
    lastName,
    email,
    password: hashedPassword,
    photo: req.file ? req.file.path : null,
  });

  res.status(201).json({
    _id: user._id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    photo: user.photo,
  });
});

// Login a user and generate a token
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Find the user by email
  const user = await User.findOne({ email });

  // Check if user exists and password is correct
  if (user && (await bcrypt.compare(password, user.password))) {
    // Create a JWT token
    const token = jwt.sign({ user: {
     
      email: user.email,
      id: user.id
  } }, process.env.JWT_SECRET, { expiresIn: '45m' });

    // Respond with user data and token
    res.status(200).json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      photo: user.photo,
      token, // Include the token in the response
    });
  } else {
    // Respond with an error if credentials are invalid
    res.status(401).json({ message: "Invalid email or password" });
  }
});

  

// Get user profile info
const infoUser = asyncHandler(async (req, res) => {
  try {
      // Assuming req.user contains the user ID from the token
      const user = await User.findById(req.user.id).select('-password');

      if (!user) {
          res.status(404);
          throw new Error('User not found');
      }

      // Send the user's name and email as a response
      res.json({ firstName: user.firstName, lastName: user.lastName, email: user.email, photo:user.photo });
  } catch (error) {
      res.status(500);
      throw new Error('Server Error');
  }
});


module.exports = {
  registerUser,
  loginUser,
  infoUser
};

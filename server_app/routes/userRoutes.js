const express = require('express');
const { registerUser, loginUser, infoUser,test } = require('../controllers/userController');
const { validateToken } = require('../middleware/authMiddleware');
const multer = require('multer');

const router = express.Router();

// Multer setup for photo upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});
const upload = multer({ storage });

// User routes
router.post('/register', upload.single('photo'), registerUser);
router.post('/login', loginUser);
router.get('/profile', validateToken, infoUser);

module.exports = router;

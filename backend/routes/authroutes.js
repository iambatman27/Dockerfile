const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/authcontroller');
const { protect } = require('../middleware/authmiddleware');

router.post('/register', registerUser);
router.post('/login', loginUser);

// Example protected route
router.get('/profile', protect, (req, res) => {
  res.json({ message: `Welcome ${req.user.name}` });
});

module.exports = router;

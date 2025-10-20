const express = require('express');
const { register, login, forgotPassword } = require('../controllers/authcontroller');

const router = express.Router();

router.post('/register', register);
router.post('/signup', register);
router.post('/login', login);
router.post('/forgot-password', forgotPassword);

module.exports = router;
// POST route for signup
router.post('/signup', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log('Signup attempt:', email);
    
    // Your signup logic here
    res.json({ success: true, message: 'User created successfully!' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
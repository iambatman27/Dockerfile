const express = require('express');
const { register, login, forgotPassword } = require('../controllers/authcontroller');

const router = express.Router();

router.post('/register', register);
router.post('/signup', register); // Use same function as register
router.post('/login', login);
router.post('/forgot-password', forgotPassword);

module.exports = router;
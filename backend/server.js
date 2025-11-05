require('dotenv').config(); // Loads env variables locally
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/authroutes');

const app = express();

// ⚠️ CRITICAL: Add these middleware FIRST
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// CORS middleware
app.use(cors({
    origin: ['https://infohub.net.in', 'http://localhost:3000'],
    credentials: true
}));

// Request logging middleware
app.use((req, res, next) => {
    console.log(`📦 ${req.method} ${req.path}`, req.body);
    next();
});

// MongoDB Connection
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('✅ MongoDB Connected Successfully'))
.catch(err => console.log('❌ MongoDB Connection Error:', err));

// Routes
app.get('/', (req, res) => {
    res.json({ message: 'InfoHub Backend is running!' });
});

app.get('/api/test', (req, res) => {
    res.json({ message: 'INFO HUB API is working!' });
});

// Auth routes
app.use('/api/auth', authRoutes);

// Test route
app.post('/api/auth/test-signup', (req, res) => {
    console.log('📦 Test route - Request body:', req.body);
    res.json({ 
        success: true, 
        message: 'Test successful',
        received: req.body 
    });
});
app.use(cors({
    origin: ['https://infohub.net.in', 'http://localhost:3000'],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
// Port configuration
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
// Handle preflight requests
app.options('/*', cors());
const userRoutes = require('./routes/userRoutes');

// Add this with your other app.use routes
app.use('/api/user', userRoutes);
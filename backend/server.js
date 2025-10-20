require('dotenv').config(); // Loads env variables locally
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/authroutes'); // Keep your existing routes

const app = express();

// Middleware
app.use(cors({
    origin: ['https://infohub.net.in', 'http://localhost:3000'],
    credentials: true
}));
// Add this ABOVE your existing routes
app.get('/', (req, res) => {
    res.json({ message: 'InfoHub Backend is running!' });
});

// Your existing test route
app.get('/api/test', (req, res) => {
    res.json({ message: 'INFO HUB API is working!' });
});
// MongoDB Connection (Atlas)
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB Connected Successfully'))
.catch(err => console.log('❌ MongoDB Connection Error:', err));

// Routes
app.use('/api/auth', authRoutes);


// Port from Render or fallback to 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});

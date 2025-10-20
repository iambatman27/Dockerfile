const express = require('express');
const User = require('../models/user');
const auth = require('../middleware/auth'); // We'll create this

const router = express.Router();

// Get user profile
router.get('/profile', async (req, res) => {
    try {
        // For now, we'll get user by email. Later add proper auth
        const user = await User.findOne({ email: req.query.email });
        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }

        res.json({
            success: true,
            user: {
                id: user._id,
                fullname: user.fullname,
                email: user.email,
                joinDate: user.createdAt,
                favorites: user.favorites
            }
        });
    } catch (error) {
        console.error('Profile error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error'
        });
    }
});

// Add to favorites
router.post('/favorites', async (req, res) => {
    try {
        const { email, toolId, toolName, category } = req.body;
        
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }

        // Check if already favorited
        const existingFavorite = user.favorites.find(fav => fav.toolId === toolId);
        if (existingFavorite) {
            return res.json({
                success: true,
                message: 'Already in favorites'
            });
        }

        // Add to favorites
        user.favorites.push({ toolId, toolName, category });
        await user.save();

        res.json({
            success: true,
            message: 'Added to favorites',
            favorites: user.favorites
        });
    } catch (error) {
        console.error('Add favorite error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error'
        });
    }
});

module.exports = router;
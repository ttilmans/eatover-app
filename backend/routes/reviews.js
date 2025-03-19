const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const reviewSchema = new mongoose.Schema({
    guestName: String,
    hostId: String,
    mealId: String,
    rating: Number,
    comment: String
});

const Review = mongoose.model('Review', reviewSchema);

router.post('/api/review', async (req, res) => {
    const { guestName, hostId, mealId, rating, comment } = req.body;
    try {
        const newReview = new Review({ guestName, hostId, mealId, rating, comment });
        await newReview.save();
        res.json({ message: 'Review submitted successfully!' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
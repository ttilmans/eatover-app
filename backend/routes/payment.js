const express = require('express');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const router = express.Router();

router.post('/api/payment', async (req, res) => {
    const { amount, paymentMethodId } = req.body;
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: 'eur',
            payment_method: paymentMethodId,
            confirm: true,
        });
        res.json({ success: true, paymentIntent });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
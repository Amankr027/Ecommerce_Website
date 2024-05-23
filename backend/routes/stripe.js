const router = require("express").Router();
// const stripe = require("stripe")(process.env.STRIPE_KEY);
const KEY = process.env.STRIPE_KEY
const stripe = require("stripe")(KEY);

router.post("/payment", async (req, res) => {
   await stripe.paymentIntents.create(
    {
      // source: req.body.tokenId,
      amount: req.body.amount,
      currency: "inr",
      automatic_payment_methods: {
        enabled: true,
      },
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        
        res.status(200).json(stripeRes);
      }
    }
  );
  

  
});

module.exports = router;

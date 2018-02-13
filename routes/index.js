const express = require('express');
const router = express.Router();
const request = require('request');

/* GET home page. */
router.get('/', (req, res, next) => {
  // the URL for the JSON api
  const url = 'https://offersvc.expedia.com/offers/v2/getOffers?scenario=deal-finder&page=foo&uid=foo&productType=Hotel';
  // Callback for when the request is complete
  const loaded = (error, response, body) => {
    // Check for errors
    if (!error && response.statusCode == 200) {
      // JSON parse the body
      const body_json = JSON.parse(body);
      // Get the Hotel offers from the body
      const hotel_offers = body_json['offers']['Hotel'];
      // Render home page with passing offers array
      res.render('index', {
        title: 'Hotel Deals',
        offers: hotel_offers
      });
    } else {
      // Handle error
      res.send('error');
    }
  }
  // Execute the HTTP Request
  request(url, loaded);
});

module.exports = router;

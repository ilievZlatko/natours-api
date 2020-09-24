const express = require('express');
const {
  getOverview,
  getTour,
  getLoginForm,
} = require('../controllers/viewsController');

const router = express.Router();

// TEMPLATE ROUTES
router.get('/', getOverview);
router.get('/tours/:slug', getTour);
router.get('/login', getLoginForm);

module.exports = router;

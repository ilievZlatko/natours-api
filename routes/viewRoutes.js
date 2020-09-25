const express = require('express');
const {
  getOverview,
  getTour,
  getLoginForm,
} = require('../controllers/viewsController');
const authController = require('../controllers/authController');

const router = express.Router();

router.use(authController.isLoggedIn);

// TEMPLATE ROUTES
router.get('/', getOverview);
router.get('/tours/:slug', getTour);
router.get('/login', getLoginForm);

module.exports = router;

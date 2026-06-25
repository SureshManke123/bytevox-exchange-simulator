const express = require("express");
const router = express.Router();

const {
  createOrder,
  getOrderBook,
  getTrades,
  getStats,
} = require("../controllers/orderController");

router.post("/", createOrder);

// GET APIs
router.get("/orderbook", getOrderBook);
router.get("/trades", getTrades);
router.get("/stats", getStats);

module.exports = router;
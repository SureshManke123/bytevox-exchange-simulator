const { orders, trades } = require("../data/store");
const matchOrders = require("../services/matchingEngine");

// Create BUY/SELL Order
const createOrder = (req, res) => {
  const { side, price, quantity } = req.body;

  // Validation
  if (!side || !price || !quantity) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  if (side !== "BUY" && side !== "SELL") {
    return res.status(400).json({
      message: "Side must be BUY or SELL",
    });
  }

  const newOrder = {
    id: Date.now(),
    side,
    price,
    quantity,
    createdAt: new Date(),
  };

  // Store order
  orders[side].push(newOrder);

  // Run matching engine
  matchOrders();

  res.status(201).json({
    message: "Order added successfully",
    order: newOrder,
  });
};

// Get current Order Book
const getOrderBook = (req, res) => {
  res.json({
    buyOrders: orders.BUY,
    sellOrders: orders.SELL,
  });
};

// Get completed Trades
const getTrades = (req, res) => {
  res.json(trades);
};

// Get system statistics
const getStats = (req, res) => {
  res.json({
    totalBuyOrders: orders.BUY.length,
    totalSellOrders: orders.SELL.length,
    totalTradesExecuted: trades.length,
  });
};

// Export all functions
module.exports = {
  createOrder,
  getOrderBook,
  getTrades,
  getStats,
};
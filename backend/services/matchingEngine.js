const { orders, trades } = require("../data/store");

const matchOrders = () => {
  // BUY highest price first
  orders.BUY.sort((a, b) => b.price - a.price);

  // SELL lowest price first
  orders.SELL.sort((a, b) => a.price - b.price);

  while (orders.BUY.length && orders.SELL.length) {
    const buyOrder = orders.BUY[0];
    const sellOrder = orders.SELL[0];

    // Match condition
    if (buyOrder.price >= sellOrder.price) {

      const tradeQuantity = Math.min(
        buyOrder.quantity,
        sellOrder.quantity
      );

      // Save trade
      trades.push({
        price: sellOrder.price,
        quantity: tradeQuantity,
        timestamp: new Date(),
      });

      // Update remaining quantity
      buyOrder.quantity -= tradeQuantity;
      sellOrder.quantity -= tradeQuantity;

      // Remove completed orders
      if (buyOrder.quantity === 0) {
        orders.BUY.shift();
      }

      if (sellOrder.quantity === 0) {
        orders.SELL.shift();
      }

    } else {
      break;
    }
  }
};

module.exports = matchOrders;
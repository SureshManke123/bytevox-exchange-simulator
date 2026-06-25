function OrderBook({ orderBook }) {
  return (
    <div className="order-book">
      <h2>Order Book</h2>

      <div className="orders-container">

        {/* BUY Orders */}
        <div>
          <h3>BUY Orders</h3>

          <table>
            <thead>
              <tr>
                <th>Price</th>
                <th>Quantity</th>
              </tr>
            </thead>

            <tbody>
              {orderBook.buyOrders?.length > 0 ? (
                orderBook.buyOrders.map((order) => (
                  <tr key={order.id}>
                    <td>{order.price}</td>
                    <td>{order.quantity}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="2">No BUY Orders</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>


        {/* SELL Orders */}
        <div>
          <h3>SELL Orders</h3>

          <table>
            <thead>
              <tr>
                <th>Price</th>
                <th>Quantity</th>
              </tr>
            </thead>

            <tbody>
              {orderBook.sellOrders?.length > 0 ? (
                orderBook.sellOrders.map((order) => (
                  <tr key={order.id}>
                    <td>{order.price}</td>
                    <td>{order.quantity}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="2">No SELL Orders</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}

export default OrderBook;
function TradeHistory({ trades }) {
  return (
    <div className="trade-history">
      <h2>Trade History</h2>

      <table>
        <thead>
          <tr>
            <th>Price</th>
            <th>Quantity</th>
            <th>Time</th>
          </tr>
        </thead>

        <tbody>
          {trades.length > 0 ? (
            trades.map((trade, index) => (
              <tr key={index}>
                <td>{trade.price}</td>
                <td>{trade.quantity}</td>
                <td>
                  {new Date(trade.timestamp).toLocaleTimeString()}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">
                No Trades Executed
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default TradeHistory;
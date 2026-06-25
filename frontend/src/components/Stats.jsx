function Stats({ stats }) {
  return (
    <div className="stats">
      <h2>System Overview</h2>

      <div className="stats-container">

        <div className="card">
          <h3>Total BUY Orders</h3>
          <p>{stats.totalBuyOrders}</p>
        </div>

        <div className="card">
          <h3>Total SELL Orders</h3>
          <p>{stats.totalSellOrders}</p>
        </div>

        <div className="card">
          <h3>Total Trades Executed</h3>
          <p>{stats.totalTradesExecuted}</p>
        </div>

      </div>
    </div>
  );
}

export default Stats;
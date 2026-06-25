import { useState, useEffect } from "react";
import API from "./api";
import "./App.css";
import Navbar from "./components/Navbar";

import OrderForm from "./components/OrderForm";
import OrderBook from "./components/OrderBook";
import TradeHistory from "./components/TradeHistory";
import Stats from "./components/Stats";
import Footer from "./components/Footer";
function App() {
  const [orderBook, setOrderBook] = useState({
    buyOrders: [],
    sellOrders: [],
  });

  const [trades, setTrades] = useState([]);
  
  const [stats, setStats] = useState({
    totalBuyOrders: 0,
    totalSellOrders: 0,
    totalTradesExecuted: 0,
  });

  // Fetch all data from backend
  const refreshData = async () => {
    try {
      const orderBookRes = await API.get("/orderbook");
      const tradesRes = await API.get("/trades");
      const statsRes = await API.get("/stats");

      setOrderBook(orderBookRes.data);
      setTrades(tradesRes.data);
      setStats(statsRes.data);

    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  // Load data when app starts
  useEffect(() => {
    refreshData();
  }, []);

  return (
    <div className="App">
     
      <Navbar />

      <Stats stats={stats} />

      <OrderForm refreshData={refreshData} />

      <OrderBook orderBook={orderBook} />

      <TradeHistory trades={trades} />

      <Footer />
    </div>
    
  );
}

export default App;
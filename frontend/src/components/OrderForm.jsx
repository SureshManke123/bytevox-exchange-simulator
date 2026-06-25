import { useState } from "react";
import API from "../api";

function OrderForm({ refreshData }) {
  const [side, setSide] = useState("BUY");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/", {
        side,
        price: Number(price),
        quantity: Number(quantity),
      });

      alert("Order submitted successfully!");

      // Clear inputs
      setPrice("");
      setQuantity("");

      // Update Order Book & Trades
      refreshData();

    } catch (error) {
      console.log(error);
      alert("Error submitting order");
    }
  };

  return (
    <div className="order-form">
      <h2>Place BYTE Order</h2>

      <form onSubmit={handleSubmit}>
        <select
          value={side}
          onChange={(e) => setSide(e.target.value)}
        >
          <option value="BUY">BUY</option>
          <option value="SELL">SELL</option>
        </select>

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
        />

        <button type="submit">
          Submit Order
        </button>
      </form>
    </div>
  );
}

export default OrderForm;
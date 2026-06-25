# BYTE Exchange Simulator

## Overview

BYTE Exchange Simulator is a full-stack trading platform built with React, Node.js, and Express. The application allows users to place BUY and SELL orders, automatically matches orders using a matching engine, and displays real-time order book and trade history information.

## Features

* Create BUY and SELL Orders
* Automatic Order Matching Engine
* Trade History Tracking
* Order Book Visualization
* Statistics Dashboard
* Responsive User Interface
* REST API Backend

## Tech Stack

### Frontend

* React
* Axios
* CSS
* Framer Motion

### Backend

* Node.js
* Express.js
* CORS

## Project Structure

backend/

* server.js
* routes/
* controllers/
* services/
* data/

frontend/

* src/components
* App.jsx
* App.css
* api.js

## API Endpoints

### Create Order

POST /orders

Example:

{
"side": "BUY",
"price": 100,
"quantity": 10
}

### Get Order Book

GET /orders/orderbook

### Get Trades

GET /orders/trades

### Get Statistics

GET /orders/stats

## Matching Engine Logic

* BUY orders are matched with SELL orders.
* A trade is executed when BUY price is greater than or equal to SELL price.
* Partial order execution is supported.
* Remaining quantities stay in the order book.

## Installation

### Backend

npm install

npm run dev

### Frontend

npm install

npm run dev

## Future Improvements

* WebSocket Real-Time Updates
* Order Cancellation
* Database Integration
* Docker Support
* Market Orders

## Author

Suresh Manke
BE Computer Science & Engineering

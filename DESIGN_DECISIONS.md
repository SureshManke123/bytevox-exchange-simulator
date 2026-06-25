# Design Decisions

## Architecture

The project follows a client-server architecture:

* React frontend for user interface
* Node.js and Express backend for API handling
* In-memory data storage for orders and trades

## Matching Engine

The matching engine executes trades when:

BUY Price >= SELL Price

Features:

* Supports partial order matching
* Maintains remaining quantities
* Updates trade history automatically

## Frontend Design

* Component-based React architecture
* Reusable UI components
* Responsive layout
* Framer Motion animations for enhanced user experience

## Backend Design

* RESTful API structure
* Controllers for request handling
* Services for business logic
* Separate data store module

## Trade-offs

For simplicity and assignment requirements:

* In-memory storage used instead of a database
* No authentication system
* No WebSocket implementation

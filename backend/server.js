const express = require("express");
const cors = require("cors");
const orderRoutes = require("./routes/orderRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.use("/orders", orderRoutes);

// Test API
app.get("/", (req, res) => {
    res.json({
        message: "BYTE Exchange API is running 🚀"
    });
});

// Server Start
const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
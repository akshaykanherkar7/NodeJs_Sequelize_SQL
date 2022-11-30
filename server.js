const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

const corOption = {
  origin: "https://localhost:8080",
};

// Middlewares
app.use(cors(corOption));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Router
const router = require("./Routes/productRouter.js");
app.use("/api/products", router);

//Testing API
app.get("/", (req, res) => {
  res.json({ message: "hello from api" });
});

//Port
const PORT = process.env.PORT || 8080;

//Server Connection
app.listen(PORT, () => {
  console.log("Server is listening on port:", PORT);
});

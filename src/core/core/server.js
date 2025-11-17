// src/server.js

const express = require("express");
const { getShopInfo } = require("./core/shopInfo");
const { getOpeningHours, isOpenNow } = require("./core/openingHours");
const { getFullMenu } = require("./core/menu");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/status", (req, res) => {
  const info = getShopInfo();
  const hours = getOpeningHours();
  const open = isOpenNow();

  res.json({
    service: "cafeteria-backend",
    shop: info,
    openingHours: hours,
    isOpenNow: open,
    uptimeSeconds: process.uptime(),
    timestamp: new Date().toISOString(),
  });
});

app.get("/menu", (req, res) => {
  res.json(getFullMenu());
});

app.get("/", (req, res) => {
  res.json({
    message: "Sakura Coffee & Sushi API",
    docs: "/status, /menu",
  });
});

app.listen(PORT, () => {
  console.log(`Backend rodando na porta ${PORT}`);
});
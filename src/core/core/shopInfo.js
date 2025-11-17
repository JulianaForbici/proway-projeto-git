// src/core/shopInfo.js

const shopInfo = {
  name: "Sakura Coffee & Sushi",
  slogan: "Café especial e sushi fresco em um só lugar",
  address: "Rua das Cerejeiras, 123 - Centro",
  city: "Blumenau",
  phone: "+55 (47) 99999-9999",
};

function getShopInfo() {
  return shopInfo;
}

module.exports = {
  getShopInfo,
};
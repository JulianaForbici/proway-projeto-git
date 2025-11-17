// src/core/menu.js

const menu = {
  coffees: [
    {
      id: "espresso-classico",
      name: "Espresso Clássico",
      description: "Café 100% arábica, extraído na pressão ideal.",
      price: 8.0,
    },
    {
      id: "latte-sakura",
      name: "Latte Sakura",
      description: "Espresso duplo, leite vaporizado e toque de baunilha.",
      price: 14.0,
    },
  ],
  sushi: [
    {
      id: "combo-12-pecas",
      name: "Combo Sushi 12 peças",
      description: "Nigiri, sashimi e uramaki em combinação clássica.",
      price: 42.0,
    },
    {
      id: "combo-sushi-cafe",
      name: "Combo Sushi & Café",
      description: "8 peças de sushi + 1 café à escolha.",
      price: 34.0,
    },
  ],
};

function getFullMenu() {
  return menu;
}

function getItemById(id) {
  const allItems = [...menu.coffees, ...menu.sushi];
  return allItems.find((item) => item.id === id) || null;
}

module.exports = {
  getFullMenu,
  getItemById,
};

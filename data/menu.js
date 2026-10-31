const coffee = "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=700&q=80";
const icedCoffee = "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=700&q=80";
const frappe = "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=700&q=80";
const breakfast = "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=700&q=80";

export const menuCategories = [
  {
    id: "signature",
    label: "Signature",
    items: [
      { name: "The Melting Pot", image: icedCoffee },
      { name: "Queens", image: frappe },
      { name: "Manhattan Special", image: coffee },
      { name: "Greatest of All Time", image: icedCoffee },
    ],
  },
  {
    id: "espresso-hot",
    label: "Espresso hot",
    items: [
      { name: "Americano", image: coffee },
      { name: "Cappuccino", image: breakfast },
      { name: "Caramel Macchiato", image: icedCoffee },
      { name: "Cortado", image: coffee },
      { name: "Espresso Macchiato", image: coffee },
      { name: "Espresso", image: coffee },
      { name: "Flat White", image: breakfast },
      { name: "Latte", image: icedCoffee },
      { name: "Mocha Dark & White", image: coffee },
      { name: "Spanish Latte", image: icedCoffee },
    ],
  },
  {
    id: "espresso-iced",
    label: "Espresso iced",
    items: [
      { name: "Americano", image: coffee },
      { name: "Caramel Macchiato", image: icedCoffee },
      { name: "Latte", image: icedCoffee },
      { name: "Mocha Dark & White", image: coffee },
      { name: "Spanish Latte", image: icedCoffee },
    ],
  },
  {
    id: "frappes",
    label: "Frappes",
    items: ["Caramel", "Chocolate", "Coffee", "Mocha", "Toffee", "Vanilla"].map((name) => ({ name, image: frappe })),
  },
  {
    id: "not-coffee",
    label: "Not coffee",
    items: [
      { name: "Hot Nutella", image: breakfast },
      { name: "Orange Juice", image: frappe },
      { name: "Shaken Iced Tea", image: icedCoffee },
      { name: "Smoothie Berry Blast", image: frappe },
      { name: "Smoothie Paradise Passion", image: frappe },
      { name: "Stash Tea", image: breakfast },
    ],
  },
  {
    id: "breakfast",
    label: "Breakfast",
    items: [
      { name: "Cheesy Beef & Egg Hash", image: breakfast },
      { name: "Chickpeas in Tomato Sauce", image: breakfast },
      { name: "Classic Pancakes", image: breakfast },
      { name: "Club Omelette", image: breakfast },
      { name: "Eggs Benedict", image: breakfast },
      { name: "English Waffle", image: breakfast },
      { name: "Farmhouse Crepe", image: breakfast },
      { name: "Four Cheese Omelette", image: breakfast },
      { name: "Fresh Mushroom Omelette", image: breakfast },
      { name: "Fused English Breakfast", image: breakfast },
      { name: "Scrambled Eggs", image: breakfast },
      { name: "Spicy Egg & Potatoes", image: breakfast },
      { name: "Stuffed Croissant", image: breakfast },
    ],
  },
  { id: "eats", label: "Appetizers, crepes & sandwiches", items: [], needsClientData: true },
  { id: "sweet-affairs", label: "Sweet affairs", items: [], needsClientData: true },
  { id: "pakistan-favourites", label: "Pakistan favourites", items: [], needsClientData: true },
];

export const menuDisclaimer =
  "Menu names are based on the global New York Coffee menu and may not be available at every Pakistan location. Pakistan-specific items, photos and prices need client confirmation.";

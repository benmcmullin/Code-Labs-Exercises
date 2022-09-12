drinks = [
    { name: "lemonade", price: 50 },
    { name: "lime", price: 10 },
    { name: "tea", price: 15 },
    { name: "water", price: 5}
  ]
  const drinkByPrice = drinks.sort((a, b) => a.price - b.price);
  console.log("Drink Prices in Ascending Order: ", drinkByPrice);
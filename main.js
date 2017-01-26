// average price

var itemPrices = items.map(function(amount, index){
  var prices = [];
  prices = items[index].price;
  return prices;
});
// console.log(itemPrices);

var sum = itemPrices.reduce(function(price, priceB){
  return price + priceB;
});
// console.log(sum);

var average = sum / itemPrices.length
var result = average.toFixed(2);
console.log(result);

// items between $14.00 and $18.00 USD

var between = items.filter(function(item){
  return item.price > 14 && item.price < 18;
});
console.log(between);

// GBP currency_code

var pounds = items.filter(function(item){
  return item.currency_code == "GBP";
});
// console.log(pounds);

var poundsName = pounds[0].title;
var poundsPrice = pounds[0].price;

console.log(poundsName, poundsPrice);

// made of wood

var itemMaterials = items.filter(function(item){
  return item.materials.includes("wood");
})
console.log(itemMaterials);

// eight or more materials

var eightMaterials = items.filter(function(item){
  return item.materials.length > 8;
})

console.log(eightMaterials);

// made by sellers

var madeBySeller = items.filter(function(item){
  return  item.who_made == 'i_did';
})

// console.log(madeBySeller);

var numMadeBySeller = madeBySeller.length;
console.log(numMadeBySeller);

import data from "./food.json" assert { type: "json" };

// list all the food items

function foodItems(arr) {
  // return arr.map(data => data)
  return data;
}

console.log(foodItems(data));

// list all the food items with category vegetables

function getVegetables() {
  return data.filter( food => food.category === "Vegetable" )
}

console.log(getVegetables(data));

// list all the food items with category fruit

function getFruits() {
  return data.filter( food => food.category === "Fruit" )
}

console.log(getFruits(data));

// list all the food items with category protien

function getProtein() {
  return data.filter( food => food.category === "Protein" )
}

console.log(getProtein(data));

// list all the food items with category nuts

function getNuts() {
  return data.filter( food => food.category === "Nuts" )
}

console.log(getNuts(data));

// list all the food items with category grains

function getGrains() {
  return data.filter( food => food.category === "Grain" )
}

console.log(getGrains(data));

// list all the food items with category dairy

function getDairy() {
  return data.filter( food => food.category === "Dairy" )
}

console.log(getDairy(data));

// list all the food items with calorie above 100

function getAboveCalorie(calorie) {
    return data.filter( food => food.calorie > calorie)
}

console.log(getAboveCalorie(100))

// list all the food items with calorie below 100

function getBelowCalorie(calorie) {
  return data.filter( food => food.calorie < calorie)
}

console.log(getBelowCalorie(100))

// list all the food items with highest protien content to lowest

function getHighestProtein() {
  return data.sort((a,b) => b.protiens - a.protiens)
}

console.log(getHighestProtein())

// list all the food items with lowest cab content to highest

function getLowestCab() {
  return data.sort((a,b) => a.cab - b.cab)
}

console.log(getLowestCab())

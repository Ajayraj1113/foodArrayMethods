const foodData = require("./food.json")
// console.log(foodData)


// FUNCTION FOR FOOD CATEGORY

function foodItems(food="") {
    if(food.length > 0) {
        return foodData.filter(foodItem => foodItem.category === food)
    }
    else {
        return foodData;
    }
}

// console.log(foodItems("Vegetable"))
// console.log(foodItems("Fruits"))
// console.log(foodItems("Protein"))
// console.log(foodItems("Nuts"))
// console.log(foodItems("Grains"))
// console.log(foodItems("Dairy"))
// console.log(foodItems())


// FUNCTION FOR CALORIE

function sortCalorie(calorie) {
    if(calorie === "above > 100") {
        return foodData.filter(foodItem => foodItem.calorie > 100)
    }
    else if(calorie === "below < 100") {
        return foodData.filter(foodItem => foodItem.calorie < 100)
    }
}

// console.log(sortCalorie("above > 100"))
// console.log(sortCalorie("below < 100"))


// FUNCTION FOR HIGHEST & LOWEST CONTENT

function sortContent(type) {
    if(type === "Protein") {
        return foodData.sort((a,b) => b.protiens - a.protiens)
    }
    else if(type === "Cab") {
        return foodData.sort((a,b) => a.cab - b.cab)
    }
}

// console.log(sortContent("Protein"))
// console.log(sortContent("Cab"))
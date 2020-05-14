"use strict";
let mountains = [
    { name: "kilimanjaro", height: 19341 },
    { name: "Everest", height: 29029 },
    { name: "Denali", height: 20310 }
];
const findNameOfTallestMountain = (array) => {
    let tallest = mountains[0];
    array.forEach((mountain) => {
        if (mountain.height > tallest.height) {
            tallest = mountain;
        }
    });
    return tallest.name;
};
let tallestM = findNameOfTallestMountain(mountains);
console.log(tallestM);
let products = [
    { name: "charlie", price: 0 },
    { name: "stick", price: 10 },
    { name: "rock", price: 20 }
];
const calcAverageProductPrice = (products) => {
    let total = 0;
    for (let price of products) {
        total += price.price;
    }
    return total / products.length;
};
let averagePrice = calcAverageProductPrice(products);
console.log(averagePrice);
let inventory = [
    { product: { name: "motor", price: 10.00 }, quantity: 10 },
    { product: { name: "sensor", price: 12.50 }, quantity: 4 },
    { product: { name: "LED", price: 1.00 }, quantity: 20 }
];
const calcInventoryValue = (inventory) => {
    let totalIn = 0;
    inventory.forEach((item) => {
        totalIn += (item.product.price * item.quantity);
    });
    return totalIn;
};
let inventoryVal = calcInventoryValue(inventory);
console.log(inventoryVal);
// console.log("hi");

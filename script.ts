//tallest mountain
interface Mountain {
    name: string,
    height: number
}

let mountains: Mountain[] = [
    { name: "kilimanjaro", height: 19341 },
    { name: "Everest", height: 29029 },
    { name: "Denali", height: 20310 }
]


const findNameOfTallestMountain = (array: Mountain[]): string => {
    let tallest = mountains[0];
    array.forEach((mountain) => {
        if (mountain.height > tallest.height) {
            tallest = mountain;
        }
    });
    return tallest.name;
}
let tallestM = findNameOfTallestMountain(mountains);
console.log(tallestM);

//producr average

interface Product {
    name: string,
    price: number
}

let products: Product[] = [
    { name: "charlie", price: 0 },
    { name: "stick", price: 10 },
    { name: "rock", price: 20 }
]



const calcAverageProductPrice = (products: Product[]): number => {
    let total = 0;
    for (let price of products) {
        total += price.price;
    }
    return total / products.length;
}
let averagePrice = calcAverageProductPrice(products);
console.log(averagePrice);


//inventory

interface InventoryItem {
    product: Product,
    quantity: number
}

let inventory: InventoryItem[] = [
    { product: { name: "motor", price: 10.00 }, quantity: 10 },
    { product: { name: "sensor", price: 12.50 }, quantity: 4 },
    { product: { name: "LED", price: 1.00 }, quantity: 20 }
]



const calcInventoryValue = (inventory: InventoryItem[]): number => {
    let totalIn = 0;
    inventory.forEach((item) => {

        totalIn += (item.product.price * item.quantity);

    });
    return totalIn;
}
let inventoryVal = calcInventoryValue(inventory);
console.log(inventoryVal);
// console.log("hi");





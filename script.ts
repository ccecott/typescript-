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
console.log(findNameOfTallestMountain(mountains));

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
console.log(calcAverageProductPrice(products));


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

let totalIn: number = 0;

const calcInventoryValue = (inventory: InventoryItem[]): void => {
    inventory.forEach((item) => {

        totalIn += (item.product.price * item.quantity);
        return totalIn;
    });

}
calcInventoryValue(inventory);
console.log(totalIn);
// console.log("hi");




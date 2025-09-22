// task 25 Scenerio based ques: online food ordering system
let food = [
    {
        id: 10,
        name: "Pizza",
        price: 400,
        available: 8
    },
    {
        id: 11,
        name: "burger",
        price: 350,
        available: 10
    },
    {
        id: 12,
        name: "fries",
        price: 300,
        available: 12
    },
    {
        id: 13,
        name: "fried chicken",
        price: 500,
        available: 6
    },
    {
        id: 14,
        name: "chicken roll",
        price: 250,
        available: 16
    },
    {
        id: 15,
        name: "club sandwich",
        price: 450,
        available: 14
    },
    {
        id: 16,
        name: "ice cream",
        price: 200,
        available: 18
    }
]

let total = 0
function orderhere(allorder) {
    for (let order of allorder) {
        let fooditem = null;
        for (let item of food) {
            if (item.id === order.id) {
                fooditem = item;
                break;
            }
        }
        if (fooditem !== null) {
            if (order.quantity <= fooditem.available) {
                console.log(`You bought: ${order.quantity} x ${fooditem.name}`);
                fooditem.available -= order.quantity;
                total += fooditem.price * order.quantity;
            } else {
                console.log(`Order rejected: Not enough stock for ${fooditem.name}`);
            }
        } else {
            console.log(`Item with id ${order.id} not found`);
        }
    }
    let finalBill = Math.floor(total * 1.10);
    console.log(`Bill with 10% gst Rs: ${finalBill}`)
}
let allorder = [
    {
        id: 12,
        quantity: 5
    },
    {
        id: 13,
        quantity: 4
    }
];
orderhere(allorder)


// Leet code question task 25
let arr = [2, 7, 11, 15];
function find(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                return [i + 1, j + 1]
            }
        }
    }
}
console.log(find(arr, 9));

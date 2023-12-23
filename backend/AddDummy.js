const mongoose = require('mongoose');
const Pizza = require('./models/Pizza')
require('dotenv').config()
async function main() {
    await mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
}

const data = [
    {
        "name": "Margherita",
        "image": "/images/margherita.jpg",
        "description": "Classic Margherita Pizza with Tomato Sauce and Mozzarella Cheese",
        "price": 109.00,
        "category": "Vegetarian",
        "ingredients": {
            "base": ["Thin Crust"],
            "sauce": ["Tomato"],
            "cheese": ["Mozzarella"],
            "veggies": ["Basil"]
        }
    },
    {
        "name": "Pepperoni",
        "image": "/images/pepperoni.jpg",
        "description": "Delicious Pepperoni Pizza with Tomato Sauce and Mozzarella Cheese",
        "price": 129.00,
        "category": "Non-Vegetarian",
        "ingredients": {
            "base": ["Hand Tossed"],
            "sauce": ["Tomato"],
            "cheese": ["Mozzarella"],
            "meat": ["Pepperoni"]
        }
    },
    {
        "name": "Veggie Delight",
        "image": "/images/veggie_delight.jpg",
        "description": "Healthy Veggie Delight Pizza with Tomato Sauce, Mozzarella Cheese, and Fresh Veggies",
        "price": 119.00,
        "category": "Vegetarian",
        "ingredients": {
            "base": ["Pan"],
            "sauce": ["Tomato"],
            "cheese": ["Mozzarella"],
            "veggies": ["Bell Peppers", "Onions", "Mushrooms", "Olives"]
        }
    },
    {
        "name": "Chicken Supreme",
        "image": "/images/chicken_supreme.jpg",
        "description": "Tasty Chicken Supreme Pizza with Tomato Sauce, Mozzarella Cheese, and Grilled Chicken",
        "price": 139.00,
        "category": "Non-Vegetarian",
        "ingredients": {
            "base": ["Thin Crust"],
            "sauce": ["Tomato"],
            "cheese": ["Mozzarella"],
            "meat": ["Grilled Chicken"]
        }
    },
    {
        "name": "Cheese Burst",
        "image": "/images/cheese_burst.jpg",
        "description": "Cheesy Cheese Burst Pizza with Extra Cheese on a Cheese-filled Crust",
        "price": 149.00,
        "category": "Vegetarian",
        "$ingredients": {
            "base": ["Cheese Burst"],
            "sauce": ["Tomato"],
            "cheese": ["Mozzarella", "Cheddar"],
            "veggies": []
        }
    }
]


const addData = async () => {

    for (var pizza of data) {
        let p = new Pizza(pizza)
        await p.save()
    }
}

main().catch(err => console.log(err));
console.log("connected to mongoDB");
addData().catch(err => console.log(err))
console.log("added data to mongo");

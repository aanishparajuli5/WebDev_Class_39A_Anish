
// 1. Shopping Discount

let purchaseAmount = 120;
let finalPrice;

if (purchaseAmount >= 100) {
    finalPrice = purchaseAmount * 0.80;
} else if (purchaseAmount >= 50) {
    finalPrice = purchaseAmount * 0.90;
} else {
    finalPrice = purchaseAmount;
}

console.log("Final Price: $" + finalPrice);



// 2. Time-Based Greeting


let hour = 14;

if (hour >= 5 && hour <= 11) {
    console.log("Good morning");
} else if (hour >= 12 && hour <= 17) {
    console.log("Good afternoon");
} else {
    console.log("Good evening");
}


// 3. Leap Year Checker

let year = 2024;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log("Leap Year");
} else {
    console.log("Not a Leap Year");
}



// 4. Login & Role Check

let isLoggedIn = true;
let role = "admin";

if (!isLoggedIn) {
    console.log("Please log in");
} else if (role === "admin") {
    console.log("Welcome, Admin");
} else {
    console.log("Welcome, User");
}


// 5. Largest of Three Numbers

let a = 10;
let b = 25;
let c = 15;

if (a >= b && a >= c) {
    console.log("Largest number is: " + a);
} else if (b >= a && b >= c) {
    console.log("Largest number is: " + b);
} else {
    console.log("Largest number is: " + c);
}

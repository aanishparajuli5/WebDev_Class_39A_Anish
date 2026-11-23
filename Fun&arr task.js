
// 1.Smart Electricity Bill Calculator

const calculateBill = (units) => {
    let bill = 0;

    if (units <= 20) {
        bill = units * 5;
    } else if (units <= 50) {
        bill = (20 * 5) + ((units - 20) * 7);
    } else {
        bill = (20 * 5) + (30 * 7) + ((units - 50) * 10);
    }

    return bill + 50;
};

const displayBill = (name, units, callback) => {
    let totalBill = callback(units);

    console.log("Customer:", name);
    console.log("Units Consumed:", units);
    console.log("Total Electricity Bill: Rs.", totalBill);
};

displayBill("Ram", 65, calculateBill);



// 2.Student Result Processing System

const calculateAverage = (m1, m2, m3) => {
    return (m1 + m2 + m3) / 3;
};

const getDivision = (average) => {
    if (average >= 70) {
        return "First Division";
    } else if (average >= 60) {
        return "Second Division";
    } else if (average >= 50) {
        return "Third Division";
    } else {
        return "Fail";
    }
};

const processResult = (name, m1, m2, m3, callback) => {
    let average = calculateAverage(m1, m2, m3);
    let division = callback(average);

    console.log("Student:", name);
    console.log("Average:", average);
    console.log("Division:", division);
};

processResult("Sita", 75, 75, 75, getDivision);




// 3.Online Shopping Discount System

const calculateDiscount = (amount) => {
    if (amount >= 5000) {
        return 20;
    } else if (amount >= 3000) {
        return 15;
    } else if (amount >= 1000) {
        return 10;
    } else {
        return 0;
    }
};

const calculateFinalPrice = (amount, discount) => {
    return amount - (amount * discount / 100);
};

const checkout = (customerName, amount, callback) => {
    let discount = calculateDiscount(amount);
    let finalPrice = callback(amount, discount);

    console.log("Customer:", customerName);
    console.log("Original Price: Rs.", amount);
    console.log("Discount:", discount + "%");
    console.log("Final Price: Rs.", finalPrice);
};

checkout("Nikesh", 6000, calculateFinalPrice);



// 4.Movie Ticket Booking System

const getTicketPrice = (age) => {
    if (age < 12) {
        return 150;
    } else if (age <= 17) {
        return 200;
    } else if (age <= 59) {
        return 300;
    } else {
        return 200;
    }
};

const calculateTotal = (price, quantity) => {
    return price * quantity;
};

const applyDiscount = (total, quantity) => {
    if (quantity >= 5) {
        return total - (total * 10 / 100);
    }
    return total;
};

const bookTicket = (name, age, quantity, callback) => {
    let price = getTicketPrice(age);
    let total = calculateTotal(price, quantity);
    let finalAmount = callback(total, quantity);
    let discount = total - finalAmount;

    console.log("Customer:", name);
    console.log("Age:", age);
    console.log("Tickets:", quantity);
    console.log("Total Before Discount: Rs.", total);
    console.log("Discount: Rs.", discount);
    console.log("Final Amount: Rs.", finalAmount);
};

bookTicket("Hari", 25, 5, applyDiscount);



// 5.Employee Salary Processing System

const calculateBonus = (salary) => {
    if (salary >= 40000) {
        return salary * 10 / 100;
    } else {
        return salary * 5 / 100;
    }
};

const calculateTax = (salary) => {
    return salary * 5 / 100;
};

const calculateNetSalary = (salary, bonusCallback, taxCallback) => {
    let bonus = bonusCallback(salary);
    let tax = taxCallback(salary);

    return {
        bonus: bonus,
        tax: tax,
        netSalary: salary + bonus - tax
    };
};

const generatePayslip = (name, salary, callback) => {
    let result = callback(salary, calculateBonus, calculateTax);

    console.log("Employee:", name);
    console.log("Basic Salary: Rs.", salary);
    console.log("Bonus: Rs.", result.bonus);
    console.log("Tax: Rs.", result.tax);
    console.log("Net Salary: Rs.", result.netSalary);
};

generatePayslip("Ram", 50000, calculateNetSalary);



// 6.Food Delivery Charge Calculator

const calculateDelivery = (distance) => {
    if (distance <= 2) {
        return 30;
    } else {
        return 30 + ((distance - 2) * 15);
    }
};

const checkFreeDelivery = (orderAmount) => {
    return orderAmount >= 1000;
};

const processOrder = (customer, distance, orderAmount, callback) => {
    let deliveryCharge;

    if (checkFreeDelivery(orderAmount)) {
        deliveryCharge = 0;
    } else {
        deliveryCharge = callback(distance);
    }

    console.log("Customer:", customer);
    console.log("Order Amount: Rs.", orderAmount);
    console.log("Distance:", distance, "km");
    console.log("Delivery Charge: Rs.", deliveryCharge);
};

processOrder("Shyam", 5, 800, calculateDelivery);



// 7.ATM Withdrawal System


const validateWithdrawal = (amount, balance) => {
    if (amount <= 0) {
        return false;
    } else if (amount % 500 !== 0) {
        return false;
    } else if (amount + 25 > balance) {
        return false;
    } else {
        return true;
    }
};

const withdrawMoney = (amount, balance, callback) => {
    console.log("Account Balance: Rs.", balance);
    console.log("Withdrawal Amount: Rs.", amount);

    if (callback(amount, balance)) {
        balance = balance - amount - 25;

        console.log("Withdrawal Successful!");
        console.log("Transaction Fee: Rs. 25");
        console.log("Remaining Balance: Rs.", balance);
    } else {
        console.log("Withdrawal Failed!");
        console.log("Invalid amount or insufficient balance.");
        console.log("Remaining Balance: Rs.", balance);
    }
};

withdrawMoney(3000, 10000, validateWithdrawal);




// 8.Restaurant Order Management System

const getFoodPrice = (foodName) => {
    const menu = {
        Burger: 250,
        Pizza: 500,
        Momo: 150,
        Chowmein: 180
    };

    return menu[foodName] || 0;
};

const calculateServiceCharge = (total) => {
    return total * 5 / 100;
};

const calculateOrder = (foodName, quantity, callback) => {
    let price = getFoodPrice(foodName);

    if (price === 0 || quantity <= 0) {
        return null;
    }

    return callback(price, quantity);
};

const generateReceipt = (customerName, foodName, quantity, callback) => {
    let foodAmount = calculateOrder(
        foodName,
        quantity,
        (price, qty) => price * qty
    );

    if (foodAmount === null) {
        console.log("Invalid food item or quantity!");
        return;
    }

    let serviceCharge = calculateServiceCharge(foodAmount);
    let finalAmount = foodAmount + serviceCharge;

    console.log("Customer:", customerName);
    console.log("Food:", foodName);
    console.log("Quantity:", quantity);
    console.log("Food Amount: Rs.", foodAmount);
    console.log("Service Charge: Rs.", serviceCharge);
    console.log("Final Amount: Rs.", finalAmount);
};

generateReceipt("Suman", "Burger", 2, calculateServiceCharge);






// 9.Mobile Recharge System

const calculateBonus = (amount) => {
    if (amount >= 1000) {
        return amount * 15 / 100;
    } else if (amount >= 500) {
        return amount * 10 / 100;
    } else if (amount >= 100) {
        return amount * 5 / 100;
    } else {
        return 0;
    }
};

const calculateTotalBalance = (amount, bonus) => {
    return amount + bonus;
};

const recharge = (number, amount, callback) => {
    let bonus = calculateBonus(amount);
    let totalBalance = callback(amount, bonus);

    console.log("Mobile Number:", number);
    console.log("Recharge Amount: Rs.", amount);
    console.log("Bonus Received: Rs.", bonus);
    console.log("Total Balance: Rs.", totalBalance);
};

recharge("9800000000", 1000, calculateTotalBalance);



// 10.Smart Function Based Calculator


const add = (a, b) => {
    return a + b;
};

const subtract = (a, b) => {
    return a - b;
};

const multiply = (a, b) => {
    return a * b;
};

const divide = (a, b) => {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
};

const calculate = (a, b, operationCallback) => {
    return operationCallback(a, b);
};

console.log("Addition: 20 + 10 =", calculate(20, 10, add));

console.log("Subtraction: 20 - 10 =", calculate(20, 10, subtract));

console.log("Multiplication: 20 * 10 =", calculate(20, 10, multiply));

console.log("Division: 20 / 10 =", calculate(20, 10, divide));
// Task 1 - Function Decraltion 
function calculateInvoice(subtotal, taxRate, discount) {     //declare a function thatwillcalculate invoice
    let total = (subtotal + (subtotal * taxRate)) - discount;
    console.log(`Total Invoice: $${total}`); //log the invoice
}

calculateInvoice(100, 0.08, 5);     
calculateInvoice(500, 0.1, 20);

// Task 2 - Function Express
const calculateHourlyWage = function (salary, hoursPerWeek) {  // make a constant function to calculate hour wage 
    let hourlyWage = salary / (hoursPerWeek * 52);
    console.log(`Hourly Wage: $${hourlyWage}`);  // log it into consolw 
};
calculateHourlyWage(52000, 40);  // calculate
calculateHourlyWage(75000, 35);

//Task 3- Arrow Function
const calculateLoyaltyDiscount = (amount, years) => { // arrow function for the amount and years
    let discountRate = 0.05;  //make a discount rate  .5 in general
    if (years >= 5) {
        discountRate = 0.15; 
    } else if (years >= 3) {     // ifits more than three yars they get 10 percent 
        discountRate = 0.10; 
    }
        else if (years < 3){
            discountRate =.05;
        }
     let discountedPrice = amount - (amount * discountRate); // how tocalculate the discounted price 
    console.log(`Discounted Price: $${discountedPrice}`);
};

calculateLoyaltyDiscount(100, 6); // Expected output: "Discounted Price: $85.00"
calculateLoyaltyDiscount(200, 2); // Expected output: "Discounted Price: $190.00"

// Task 4- Parameters and Arguments 
function calculateShippingCost(weight, location, expedited = false) {
    let cost;

    if (location === "USA") {
        cost = 5 + (0.5 * weight);
    } else if (location === "Canada") {
        cost = 10 + (0.7 * weight);
    }

    if (expedited) {
        cost += 10;
    }

    console.log(`Shipping Cost: $${cost}`);
}

calculateShippingCost(10, "USA", true); // Expected output: "Shipping Cost: $20"
calculateShippingCost(5, "Canada", false); // Expected output: "Shipping Cost: $13.5"



    //Task 5 - Returning Values 
function calculateLoanInterest(principal, rate, years) { // calculate and make a function Loanintrest 
    let interest = principal * rate * years;
    console.log(`Total Interest: $${interest}`); // log in the consle 
}
calculateLoanInterest(1000, 0.05, 3); // Expected output: "Total Interest: $150.00"
calculateLoanInterest(5000, 0.07, 5); // Expected output: "Total Interest: $1750.00"


// Task 6 - HIgh-Order Function
let transactions = [500, 1200, 3000, 800, 2200];
const filterHighValueTransactions = (transactions, filterFunction) => {
    return transactions.filter(filterFunction);
};
console.log(filterHighValueTransactions(transactions, amount => amount > 1000));


// Task 7 - Closures 
function createBudgetTracker() {
    let balance = 0;
    return function(amount) {
        balance -= amount;
        console.log(`Current Balance: -$${balance}`);
    };
}
let budget = createBudgetTracker();
budget(300); // Expected output: "Current Balance: -$300"
budget(200); // Expected output: "Current Balance: -$500"

// Task 8 - Recursion in JavaScript
function calculateGrowth(years, revenue) {
    if (years <= 0) {
        return revenue;
    }
    if (years > 10) {
        return revenue;
    }
    revenue += revenue * 0.05;
    return calculateGrowth(years - 1, revenue);
}
console.log(`Projected Revenue: $${calculateGrowth(8, 1000)}`);
console.log(`Projected Revenue: $${calculateGrowth(5, 5000)}`);

calculateGrowth(8, 1000); // Expected output: "Projected Revenue: $1102.50"
calculateGrowth(5, 5000); // Expected output: "Projected Revenue: $6381.41"
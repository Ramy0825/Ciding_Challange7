// Task 1 - Function Decraltion 
function calculateInvoice(subtotal, taxRate, discount) {     //declare a function thatwillcalculate invoice
    let total = (subtotal + (subtotal * taxRate)) - discount;
    console.log(`Total Invoice: $${total}`); //log the invoice
}

calculateInvoice(100, 0.08, 5);     
calculateInvoice(500, 0.1, 20);

// task2 - function express
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

calculateLoyaltyDiscount(100, 6); 
calculateLoyaltyDiscount(200, 2); 

// Task 4- Parameters and Arguments 











//Task 5 - Returning Values 
function calculateLoanInterest(principal, rate, years) { // calculate and make a function Loanintrest 
    let interest = principal * rate * years;
    console.log(`Total Interest: $${interest}`); // log in the consle 
}
calculateLoanInterest(1000, 0.05, 3); // Expected output: "Total Interest: $150.00"
calculateLoanInterest(5000, 0.07, 5); // Expected output: "Total Interest: $1750.00"

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
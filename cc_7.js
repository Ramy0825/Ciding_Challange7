// Task 1 - Function Decraltion 
function calculateInvoice(subtotal, taxRate, discount) {     //declare a function thatwillcalculate invoice
    let total = (subtotal + (subtotal * taxRate)) - discount;
    console.log(`Total Invoice: $${total.toFixed(2)}`); //log the invoice
}

calculateInvoice(100, 0.08, 5);     
calculateInvoice(500, 0.1, 20);

//
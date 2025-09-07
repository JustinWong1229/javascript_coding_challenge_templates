// Coding Challenge 02.a

const productName = "basketball";
let costPerUnit = 7.50;
let basePrice = 10.00;
let discountRate = 0.12;
let salesTaxRate = 0.05;
let fixedMonthlyCosts = 20;

let discountPrice = basePrice * (1- discountRate);
let finalPriceWithTax = discountPrice * (1 + salesTaxRate);
let profitPerUnit = finalPriceWithTax - costPerUnit;
let breakEvenUnits = Math.ceil(fixedMonthlyCosts / profitPerUnit);
let isProfitablePerUnit = profitPerUnit > 0;


console.log(productName);
console.log(discountPrice); 
console.log(finalPriceWithTax); 
console.log(profitPerUnit);
console.log(breakEvenUnits);
console.log(isProfitablePerUnit);


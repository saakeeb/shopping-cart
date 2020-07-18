const phonePlus = document.getElementById('phonePlus');
const phoneMinus = document.getElementById('phoneMinus');

const casePlus = document.getElementById('casePlus');
const caseMinus = document.getElementById('caseMinus');

let subtotal = document.getElementById('subtotal').value;
let tax = document.getElementById('tax').value;
let total = document.getElementById('total').value;

let subTotalPrice = parseFloat(subtotal);
let taxPrice = parseFloat(tax);
let totalPrice = parseFloat(total);

let phoneItem = document.getElementById('phoneItem').value;
let phonePrice = document.getElementById('phonePrice').innerText;
let itemP = parseInt(phoneItem);
let priceP = parseFloat(phonePrice);

let caseItem = document.getElementById('caseItem').value;
let casePrice = document.getElementById('casePrice').innerText;
let itemC = parseInt(caseItem);
let priceC = parseFloat(casePrice);

// Phone Button Listener
phoneMinus.addEventListener('click', ()=>{
   if( itemP > 0){
      itemP -= 1;
      let totalPhonePrice = priceP * itemP;
      document.getElementById('phoneItem').value = itemP;
      document.getElementById('phonePrice').innerText = totalPhonePrice;
   }
})

phonePlus.addEventListener('click', ()=>{
      itemP += 1;
      let totalPhonePrice = priceP * itemP;
      document.getElementById('phoneItem').value = itemP;
      document.getElementById('phonePrice').innerText = totalPhonePrice;
   
})

// Case Button Listener
caseMinus.addEventListener('click', ()=>{
   if(itemC > 0){
      itemC -= 1;
      let totalCasePrice = itemC * priceC;

      document.getElementById('caseItem').value = itemC;
      document.getElementById('casePrice').innerText = totalCasePrice;
   }
})

casePlus.addEventListener('click', ()=>{
   itemC += 1;
   let totalCasePrice = itemC * priceC;

   document.getElementById('caseItem').value = itemC;
   document.getElementById('casePrice').innerText = totalCasePrice;
})

// total price section
const price = ()=>{
   let subPrice = totalPhonePrice + totalCasePrice;
   let proTax = (subPrice*15)/100;
   let price = subPrice+ proTax;

   document.getElementById('subtotal').innerText= subPrice;
   document.getElementById('tax').innerText= proTax;
   document.getElementById('total').innerText= price;
}
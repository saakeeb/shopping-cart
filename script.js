// Phone Button Listener
// phoneMinus.addEventListener('click', ()=>{
//    if( itemP > 0){
//       itemP -= 1;
//       let totalPhonePrice = priceP * itemP;
//       document.getElementById('phoneItem').value = itemP;
//       document.getElementById('phonePrice').innerText = totalPhonePrice;
      
//    }
// })

// phonePlus.addEventListener('click', ()=>{
//    itemP += 1;
//    let totalPhonePrice = priceP * itemP;
//    document.getElementById('phoneItem').value = itemP;
//    document.getElementById('phonePrice').innerText = totalPhonePrice;

// })

// Pricing section
let subtotal = parseFloat(document.getElementById('subtotal').innerText);

const count = (plusId, minusId, goodsId, itemId) => {

   //button id
   const minusBtn = document.getElementById(minusId);
   const plusBtn = document.getElementById(plusId);

   //value parse
   let value = parseInt(document.getElementById(goodsId).value);
   let price = parseFloat(document.getElementById(itemId).innerText);
   
   
   //minus event handling
   minusBtn.addEventListener('click', function(){
      if(value>0){
         value -= 1;
         subtotal = subtotal-price;
         calc(value, subtotal, goodsId, itemId)
      }
   });
   
   
   //plus event handling
   plusBtn.addEventListener('click', function(){
      value += 1;
      subtotal = subtotal+price;
      calc(value, subtotal, goodsId, itemId)
   });

   //calculation function
   function calc(value, subtotal, goodsId, itemId){
      let total = value * price;
      let tax = (subtotal * 15) / 100;
      let totalPrice = subtotal + tax;
      document.getElementById(goodsId).value = value;
      document.getElementById(itemId).innerText = total;
      document.getElementById('subtotal').innerText= subtotal;
      document.getElementById('tax').innerText= tax;
      document.getElementById('total').innerText= totalPrice;
   }
}
//calling method
count('phonePlus', 'phoneMinus', 'phoneItem', 'phonePrice');
count('casePlus', 'caseMinus', 'caseItem', 'casePrice');


const remove =  (id1, id2) => {
   document.getElementById(id1).addEventListener('click', ()=>{
      document.getElementById(id2).style.display = 'none';
   })
}
remove('removePhone', 'r1')
remove('removeCase', 'r2')



document.getElementById('demo').style.display="none";
const check = document.getElementById("check");
check.addEventListener("click", () => {

   document.getElementById('main').style.display="none";
   document.getElementById('demo').style.display="block";
});
document.getElementById('backToCart').addEventListener('click', ()=>{
   document.getElementById('main').style.display="block";
   document.getElementById('demo').style.display="none";
})
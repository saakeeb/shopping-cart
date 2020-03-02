//Negative cart item
const phoneMinusBtn=document.getElementById("phone-minus");
phoneMinusBtn.addEventListener("click", function(){
   const phoneItem=document.getElementById("Phone-item").value;
   const phonePrice=document.getElementById("phone-price").innerText;
   
//subtotal
const subtotal=document.getElementById("subtotal").innerText;
var subtotalNum=parseFloat(subtotal);
//total
const total=document.getElementById("total").innerText;
var totalNum=parseFloat(total);
   var phonePriceNum=parseFloat(phonePrice);
   var PhoneItemNum=parseFloat(phoneItem);  
   if(phoneItemNum<2){
      document.getElementById("phone-minus").disabled=true;
   } 
   var phoneItemNum=phoneItemNum-1;
   var phonePrice=phonePriceNum-1219;

   
//subtotal value
subtotalNum=subtotalNum-1219;
//total value
totalNum=totalNum-1219;
   document.getElementById("phone-item").value=caseItemNum;
   document.getElementById("phone-price").innerText=phonePrice;
   document.getElementById("subtotal").innerText=subtotalNum;
   document.getElementById("total").innerText=totalNum;
})



//Positive cart item
const phonePlusBtn=document.getElementById("phone-plus");
phonePlusBtn.addEventListener("click", function(){
   const phoneItem=document.getElementById("phone-item").value;
   const phonePrice=document.getElementById("phone-price").innerText;
   
//Subtotal 
const subtotal=document.getElementById("subtotal").innerText;
var subtotalNum=parseFloat(subtotal);
//total
const total=document.getElementById("total").innerText;
var totalNum=parseFloat(total);
   var phonePriceNum=parseFloat(phonePrice);
   var phoneItemNum=parseFloat(phoneItem);
   if(phoneItemNum==0){
      document.getElementById("phone-minus").disabled=false;
   }
   var phoneItemNum=phoneItemNum+1;
   var phonePrice=1219*phoneItemNum;
//subtotal value
subtotalNum=1219+subtotalNum;
//total value
totalNum=1219+totalNum;
   document.getElementById("phone-item").value=phoneItemNum;
   document.getElementById("phone-price").innerText=phonePrice;
   document.getElementById("subtotal").innerText=subtotalNum;
   document.getElementById("total").innerText=totalNum;
})

//another cart
//Adding cart
const casePlusBtn=document.getElementById("case-plus");
      casePlusBtn.addEventListener("click", function(){
         const caseItem=document.getElementById("case-item").value;
         const casePrice=document.getElementById("case-price").innerText;
//Subtotal 
const subtotal=document.getElementById("subtotal").innerText;
var subtotalNum=parseFloat(subtotal);
//total
const total=document.getElementById("total").innerText;
var totalNum=parseFloat(total);

         var casePriceNum=parseFloat(casePrice);
         var caseItemNum=parseFloat(caseItem);
         if(caseItemNum==0){
            document.getElementById("case-minus").disabled=false;
         }
         var caseItemNum=caseItemNum+1;
         var casePrice=59*casePrice;

//subtotal value
 subtotalNum=59+subtotalNum;
//total value
totalNum=59+totalNum;
         document.getElementById("case-item").value=caseItemNum;
         document.getElementById("case-price").innerText=casePrice;
         document.getElementById("subtotal").innerText=subtotalNum;
         document.getElementById("total").innerText=totalNum;

      })
      //Removing cart item
      const caseMinusBtn=document.getElementById("case-minus");
      caseMinusBtn.addEventListener("click", function(){
         const caseItem=document.getElementById("case-item").value;
         const casePrice=document.getElementById("case-price").innerText;
//subtotal
const subtotal=document.getElementById("subtotal").innerText;
var subtotalNum=parseFloat(subtotal);
//total
const total=document.getElementById("total").innerText;
var totalNum=parseFloat(total);

         var casePriceNum=parseFloat(casePrice);
         var caseItemNum=parseFloat(caseItem);
         if(caseItemNum<2){
            document.getElementById("case-minus").disabled=true;
         } 
         var caseItemNum=caseItemNum-1;
         var casePrice2=casePrice-59;
//subtotal value
subtotalNum=subtotalNum-59;
//total value
totalNum=totalNum-59;
         document.getElementById("case-item").value=caseItemNum;
         document.getElementById("case-price").innerText=casePrice;
         document.getElementById("subtotal").innerText=subtotalNum;
         document.getElementById("total").innerText=totalNum;
      })
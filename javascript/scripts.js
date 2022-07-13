doc= document.querySelector('body');
numberPageViews= document.querySelector('.number_pageviews');
billCost= document.querySelector('.bill');
dataTime= document.querySelector('.data_time');
rangeBill= document.querySelector('#rate_views');
myTrial= document.querySelector('.dive_in');

wrapperRange= document.querySelector('.my_radio');
rangeMonthYear= document.querySelector('#switch_radio');
discount= document.querySelector('.discount_btn');

const arrayViews= ['10k','50k', '100k', '500k', '1M'];
const r=25 , p0=8;

let p;

let keepBill ={
    billAmountMonth: 16,
    billAmountYear: 0,
    billIndex: 0

};


doc.addEventListener('click',ratioNumberViewsBill);

function ratioNumberViewsBill(){
  let n, m , k;
  let discountApply, exYearBill;



  if(rangeBill.value !=='50'){
   m=rangeBill.value;
   k=parseInt(rangeBill.min);
   console.log(k);
   n=parseInt((m-k)/r);
   console.log(n);
   if(n===0 && rangeMonthYear.checked === false){
     numberPageViews.textContent='10k';
     billCost.textContent= p0;
     keepBill.billAmountMonth = parseInt(p0);
     keepBill.billIndex = n;
   }else if(n===0 && rangeMonthYear.checked === true){
    p= p0;
    keepBill.billAmountMonth= parseInt(p);
    exYearBill = keepBill.billAmountMonth*12;
    discountApply= exYearBill*(25/100);
    keepBill.billAmountYear = exYearBill - discountApply;
    billCost.textContent=keepBill.billAmountYear;
   }
   else if(n!== 0 && rangeMonthYear.checked === false) {
    numberPageViews.textContent= arrayViews[n];
    p= p0 + Math.pow(2, n+1);
    billCost.textContent=p;
    keepBill.billAmountMonth= parseInt(p);
    keepBill.billIndex = n;
   }else if(n!== 0 && rangeMonthYear.checked === true){
    p= p0 + Math.pow(2, n+1);
    keepBill.billAmountMonth= parseInt(p);
    exYearBill = keepBill.billAmountMonth*12;
    discountApply= exYearBill*(25/100);
    keepBill.billAmountYear = exYearBill - discountApply;
    billCost.textContent=keepBill.billAmountYear;
   }
  }
}

wrapperRange.addEventListener('click', activateBillAmountOrYear);

function activateBillAmountOrYear(){
  let discountApply, exYearBill;
  
  if(rangeMonthYear.checked === true){
    discount.style.background='brown';
    discount.style.color='white';
    exYearBill = keepBill.billAmountMonth*12;
    console.log(exYearBill);
    discountApply= exYearBill*(25/100);
    keepBill.billAmountYear = exYearBill - discountApply;
    billCost.textContent=keepBill.billAmountYear;
    console.log(billCost);
    dataTime.innerHTML='Year';
  }
  else if(rangeMonthYear.checked === false) {
    discount.style.background='#f5bebe';
    discount.style.color='brown';
    billCost.textContent=keepBill.billAmountMonth;
    console.log(billCost);
    dataTime.innerHTML='month';
  }
}

myTrial.addEventListener('click', animateTrialBtn);

 function animateTrialBtn(){
 
   myTrial.style.animation= 'animeBtnTrial 800ms forwards ease-in-out';
  
 }


window.onload= function (){
  numberPageViews.textContent='100K';
  billCost.textContent= '16';
}
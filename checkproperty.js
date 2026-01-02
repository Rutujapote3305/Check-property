const mycheckbox = document.getElementById("mycheckbox");
const visabtn = document.getElementById("visabtn");
const Mastercardbtn = document.getElementById("Mastercardbtn");
const Paypalbtn = document.getElementById("Paypalbtn");
const subResult = document.getElementById("subResult");
const payResult = document.getElementById("payResult");


mysubmit.onclick = function(){

    if(mycheckbox.checked){
        subResult.textContent = `You have subscribed`;
    }

    else{
        subResult.textContent = `You have not subscribed`;
    }

    if(visabtn.checked){
        payResult.textContent = `You choose VISA as your payment method`
    }

    else if(Mastercardbtn.checked){
        payResult.textContent = `You choose MASTER CARD as your payment method`
    }

    else if(Paypalbtn.checked){
        payResult.textContent = `You choose PAYPAL as your payment method`
    }

    else{
        payResult.textContent = `Choose your payment method`
    }
}
document.getElementById('totalTip').style.display="none";
// get calculate button and add a function
document.getElementById('calculate').onclick = function(){calculateTip();};
//html needs to be lower case
function calculateTip(){
  let billAmt = document.getElementById('billamt').value;
  let serviceQual = document.getElementById('serviceQual').value;
  let peopleAmt = document.getElementById('peopleamt').value;
if (peopleAmt <= 0 || isNaN(peopleAmt)){
  alert("You must enter the number of people, must be greater than 0.");
  return;
}
if (billAmt <= 0 || isNaN(billAmt)){
  alert("You must enter the bill amount, must be greater than 0.");
  return;
}

//calculate
  let total = ((billAmt*serviceQual)/peopleAmt).toFixed(2);
  total = Math.round(total);
  document.getElementById('totalTip').style.display="block";
  document.getElementById('tip').innerHTML = total;
}

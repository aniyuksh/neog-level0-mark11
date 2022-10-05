var dob = document.querySelector("#date-of-birth");
var luckyNumber = document.querySelector("#lucky-number");
var checkButton = document.querySelector("#check-number");


checkButton.addEventListener("click", function getvalues(){
  console.log(dob.value, luckyNumber.value);
})
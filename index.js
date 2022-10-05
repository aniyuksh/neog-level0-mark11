var dateOfBirth = document.querySelector("#date-of-birth");
var luckyNumber = document.querySelector("#lucky-number");
var checkButton = document.querySelector("#check-number");

function checkBirthdayLucky(){
  var dob = dateOfBirth.value;
  var sum = calculateSum(dob);
  console.log(sum); 
}

function calculateSum(dob){
  dob = dob.replaceAll("-","");
  var sum = 0;
  for(var i = 0 ; i < dob.length;i++ ){
    sum = sum + Number(dob.charAt(i));
  }
  return sum;
}

checkButton.addEventListener("click",checkBirthdayLucky)
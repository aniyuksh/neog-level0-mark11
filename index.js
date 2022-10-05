var dateOfBirth = document.querySelector("#date-of-birth");
var luckyNumber = document.querySelector("#lucky-number");
var checkButton = document.querySelector("#check-number");
var output = document.querySelector("#output");

function compareValues(sum , luckyNumber){
 if(sum % luckyNumber === 0){
  output.value = "YAY, your bday is lucky";
 }
 else{
  output.value = "OOPS, your bday is not lucky.!";
 }
}

function checkBirthdayLucky(){
  var dob = dateOfBirth.value;
  var sum = calculateSum(dob);
  if(sum && dob){
  compareValues(sum, luckyNumber.value);
  }
  else{
    alert("Enter both the fields");
    output.value = "Enter both the fields";
  }
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
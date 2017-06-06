$(document).ready(function(){
  var age = parseInt(prompt("How old are you?"));

  if (age === 18) {
    $("#just18").show();
    $("#over18").show();
  } else if (age < 18) {
    $("#under18").show();
  } else if (age > 18) {
    $("#over18").show();
  } else {
    alert("Please enter a valid age");
  }
});

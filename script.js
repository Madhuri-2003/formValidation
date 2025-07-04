$('#myForm').on('submit', function (e) {
    e.preventDefault(); // prevent form from navigating
    // your logic here
});

var errorMessage = "";
var missing = "";
function isEmail(email) 
{
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}
$("#submitButton").click(function(){
    if($("#name").val() == "")
     {
        missing += "<p>name is required</p>";
     }
     if($("#email").val() == "")
     {
        missing += "<p>email is required</p>";
     }
     if($("#phone").val() == "")
     {
        missing += "<p>Phone number is required</p>";
     }
     if($("#password").val() == "")
     {
        missing += "<p>password is required</p>";
     }
     if(isEmail($("#email").val()) == false){
        errorMessage += "<p>provide valid email id</p>";
     }
     if(isNumeric($("#phone").val()) == false){
        errorMessage += "<p>provided phone number is not valid</p>";
     }
     if($("#password").val() != $("#confirmpassword").val()){
        errorMessage += "<p>password does not match</p>";
     }
     if(errorMessage == "")
     {
        $("#success").html("Your details are saved");
     }
     else
     {
        $("#errors").html(errorMessage + missing);
     }
});
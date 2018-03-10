
$( document ).ready(function() {
$("#subscribe-btn").click(function(e){
    e.prevenDefault;

    var emailInput = $("#subEmail"),
    insertedEmail = emailInput.val(),
    atPosition = insertedEmail.indexOf("@");
    dotPosition = insertedEmail.lastIndexOf(".");
    if (!(atPosition< 1 || dotPosition<atPosition+2 )) {
       alert("Thank you for your subscribing !");
    }

})


});
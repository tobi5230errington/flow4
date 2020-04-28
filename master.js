
document.getElementById('signUp').addEventListener("click", validate);

function validate() {

var name = document.getElementById('nameid').value;
var nametest = /^[A-Za-z]{2,100}$/;
var nameResult = nametest.test(name);
if (!nameResult) {
    var msg = document.getElementById('errormessage_name')
    msg.innerHTML ="Dette er ikke et gyldigt navn";
} else {
  var msg = document.getElementById('errormessage_name')
  msg.innerHTML ="";
}
//console.log(nameResult);

var email = document.getElementById('emailid').value;
var emailtest = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
var emailResult = emailtest.test(email);
if (!emailResult) {
    var msg = document.getElementById('errormessage_email')
    msg.innerHTML ="Dette er ikke en gyldig email";
}else {
  var msg = document.getElementById('errormessage_email')
  msg.innerHTML ="";
}
var checkid = document.getElementById('checkid').checked;
if (!checkid) {
  var msg = document.getElementById('errormessage_checkbox')
  msg.innerHTML ="Du skal godkende betingelserne";
}else{
  var msg = document.getElementById('errormessage_checkbox')
  msg.innerHTML ="";
}


}

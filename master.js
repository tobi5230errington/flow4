
document.getElementById('signUp').addEventListener("click", validate);

function validate() {

var name = document.getElementById('nameid').value;
var nametest = /^[A-Za-z .'-]{2,100}$/;
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

if (nameResult && emailResult && checkid) {
  var formV = document.getElementById('validation_form');
  formV.innerHTML= "<p>tak skal du have du hører fra os </p>";
}


}





    
	var questions; 
    var score;
    var feedback;
    var button;
    
    score = 0;
    button = document.getElementById('start');
	button.addEventListener('click', runQuiz);
	
    feedback = document.getElementById('result');
    
    
	questions = [
            ['Hvilket dyr repræsentere Tripadvisors logo?', 'ugle'], 
            ['Hvor mange forskellige sprog er Tripadvisor tilgængelig på?', 28],
            ['Kan man købe flyrejse direkte via Tripadvisor?', 'ja'],
            ['Kan man leje biler igennem Tripadvisor?', 'ja'],
            ['Hvilken storby i verden ligger nr.1 på Travelers´ Choice i 2020?', 'London'],
            ['Hvilket hotel i Danmark ligger nr.1 på Travelers´ Choice i 2019?', 'Bandholm Hotel'],
                ];
    
    // console.log(questions[0][0]); udgiver How many moons does Earth have? i konsolen.
	
	function runQuiz(){
        // loop igennem array questions
        for(var i=0; i<questions.length; i++){
            askQuestion(questions[i]); // iterationer med kald til funktionen med parameter variablen i
        };
        giveFeedback(); // kalder funktionen feedback, når quizzen er afsluttet
    }
	
	function askQuestion(array){ // funktion med argument
        //console.log(array[1]);
        //lokal variable med nøgleord let
        let answer = prompt(array[0],''); //skaber en prompt dialog med mulighed for bruger input
        //parseINT forvandler en string til et helt nummer(integer)
        if(answer == array[1]){ //i tilfælde af rigtig svar
            alert('Korrekt')
            score++;
           } else { // forkert svar
               alert('Desværre, det rigtige svar er ' + array[1])
           }
    }  
	
	function giveFeedback(){
        feedback.innerHTML = 'Du fik ' + score + ' ud ' + questions.length + ' spørgsmål rigtige!';
        button.removeEventListener('click', runQuiz); //quiz er afsluttet og kan ikke startes igen
        
    }







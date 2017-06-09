document.getElementById('myBtn').addEventListener("click", function(){
  computeGrade();
});

function computeGrade() {
  // Get the grade from the DOM and assign it to the theGrade variable.
  var theGrade = document.getElementById('grade').value;

  // Verify the number grade is between 0 and 100
  while(theGrade < 0 || theGrade > 100) {
    theGrade = prompt("Please enter a number between 0 an 100.");
  }

  // Determine the letter grade.
  if(theGrade < 60)
    letterGrade = "F";
    else if(theGrade < 70)
    letterGrade = "D";
    else if(theGrade < 80)
    letterGrade = "C";
    else if(theGrade < 90)
    letterGrade = "B";
    else  // If we got this far, letterGrade must be >= 90
    letterGrade = "A";

  // Display the leeter Grade
  document.getElementById('outGrade').innerHTML = "Your Grade: " + letterGrade;
}

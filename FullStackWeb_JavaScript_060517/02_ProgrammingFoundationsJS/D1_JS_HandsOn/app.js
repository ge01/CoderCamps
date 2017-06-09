document.getElementById('myBtn').addEventListener("click", function(){
  computeGrade();
});

function computeGrade() {

  var theGrade = document.getElementById('grade').value;

  // Display Grade
  document.getElementById('outGrade').innerHTML = "Your Grade: " + theGrade;
}

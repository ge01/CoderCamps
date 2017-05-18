function myFunction() {
  document.getElementById('demo').innerHTML = "Paragraph changed.";
}

document.getElementById("myBtn").addEventListener("click", function(){
  computeMPG();
});

function computeMPG() {
  // Get the miles driven and assign it to the miles variable.
  var miles = document.getElementById('miles').value;

  // Get the gallons used and assign it to the gallons variable.
  var gallons = document.getElementById('gallons').value;

  // Calculate MPG
  var mpg = miles / gallons;

  // Display MPG
  document.getElementById('outMPG').innerHTML = "Your car's MPG: " + mpg.toFixed(2);
}

// The user should be able to insert or enter text into a text area
document.getElementById("wordBtn").addEventListener("click", function(){
  totalWords();
});

function totalWords() {
  var words = document.getElementById('sentence').value;

  document.getElementById('outWords').innerHTML = words;
}

// The user should be able to click a button that reports on statistics about the text
// Total number of words
// Total number of sentences
// Average words per sentence
// Total number of spaces

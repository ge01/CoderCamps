// The user should be able to click a button that reports on statistics about the text
// The user should be able to insert or enter text into a text area
document.getElementById("wordBtn").addEventListener("click", function(){
  // Call the functions that will generate statistics about the text.
  totalWords();
  totalSentences();
  avgWrdPerSent(totalWords(), totalSentences());

  // Calculate the number of spaces
  var totalSpaces = totalWords() - 1;

  // Display then number of spaces.
  document.getElementById("outSpaces").innerHTML = "Total Number of Spaces " + totalSpaces;
});

// The totalWords function calculates the total number of words in the text area.
function totalWords() {
  // Get the string entered into the text area from portfolio.html.
  var words = document.getElementById('sentence').value;

  // Variable to hold the number of words counted.
  // Set to 1 because the last word has not trailing space.
  var wordCounter = 1;

  // Count the words in the words string.
  for (var i = 0; i <= words.length; i++) {
    if(words[i] === " "){
      wordCounter++;
    }
  }

  // Display the number of words counted.
  document.getElementById('outWords').innerHTML = "Total Number of Words: " + wordCounter;

  return wordCounter;
}

// The totalSentences function calculates the total number of sentences.
function totalSentences() {
  // Get the string entered into the text area from portfolio.html.
  var textAreaString = document.getElementById("sentence").value;

  // Variable to hold the number of periods counted.
  var periodCounter = 0;

  // Count the periods in textAreaString.
  for (var j = 0; j <= textAreaString.length; j++) {
    if (textAreaString[j] === ".") {
      periodCounter++;
    }
  }

  // Display the number of periods counted.
  document.getElementById("outSentences").innerHTML = "Total Number of Sentences: " + periodCounter;

  return periodCounter;
}

// The avgWrdPerSent function calculates the average words per sentence.
function avgWrdPerSent(numWords, numSentences) {
  // Calculate the average words per sentence.
  var wps = numWords / numSentences;

  // Display the average words per sentence.
  document.getElementById("wordsPerSentence").innerHTML = "Average Words Per Sentence: " + wps;
}

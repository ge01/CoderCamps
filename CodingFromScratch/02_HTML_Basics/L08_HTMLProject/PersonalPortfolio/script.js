// The user should be able to click a button that reports on statistics about the text
// The user should be able to insert or enter text into a text area
document.getElementById("wordBtn").addEventListener("click", function(){
  totalWords();
  totalSentences();
  console.log(totalWords());
  console.log(totalSentences());
  //avgWrdPerSent(totalWords(), totalSentences());
});

/*
document.getElementById("sentenceBtn").addEventListener("click", function(){
  totalSentences();
});
*/
// Total number of words
function totalWords() {
  var words = document.getElementById('sentence').value;
  var wordCounter = 1;
  console.log(words[2]);

  for (var i = 0; i <= words.length; i++) {
    if(words[i] === " "){
      wordCounter++;
    }
    console.log(words[i]);
  }

  console.log(wordCounter);
  document.getElementById('outWords').innerHTML = "Total Number of Words: " + wordCounter;
  return wordCounter;
}

// Total number of sentences
function totalSentences() {
  var textAreaString = document.getElementById("sentence").value;
  var periodCounter = 0;

  console.log(textAreaString);

  for (var j = 0; j <= textAreaString.length; j++) {
    if (textAreaString[j] === ".") {
      periodCounter++;
    }
  }
  console.log(periodCounter);
  document.getElementById("outSentences").innerHTML = "Total Number of Sentences: " + periodCounter;
  return periodCounter;
}

// Average words per sentence


// Total number of spaces

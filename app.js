$(function() {
    
 $('#user-input').submit(function(e) {
    e.preventDefault();
    var userInput = $('#user-text').val();
    var arrayOfWords = getArrayofWords(userInput);
   $("dl").removeClass("hidden");
   $(".js-word-count").empty().append(totalWordCount(arrayOfWords));
   $(".js-unique-word").empty().append(uniqueWordCount(arrayOfWords));
   $(".js-average-word").empty().append(averageWordLength(arrayOfWords));
   $(".js-average-sentence").empty().append(averageSentenceLength(userInput,arrayOfWords));
  });

 });

function getArrayofWords(string) {
  var split = string.match(/\b[^\s]+\b/g);
  return split;
}

function totalWordCount (wordArray) {
  
  /**
   * Your original var 'split'...
   * var split = string.split(" ");
   * for "Hi I am Andrea. I am a person."
   * returns ["Hi", "I", "am", "Andrea.", "I", "am", "a", "person."]
   */ 

  var count = 0;
  // console.log(split);
  /**
   * for "Hi I am Andrea. I am a person."
   * console.log(split)
   * returns ["Hi", "I", "am", "Andrea", "I", "am", "a", "person"]
   */

  wordArray.forEach(function(word) {
      count++; 
  });
  
  return count; 
}

function uniqueWordCount(wordArray) {
  var database = {};
  var uniqueCount;
  
  wordArray.forEach(function(word) {
    database[word] === undefined ? database[word] = 1 : database[word]++; 
  });
  /**
   * 
   * for "Hi I am Andrea. I am a person."
   * console.log(database);
   * returns {Andrea:1, Hi:1, I:2, a:1, am:2, person:1}
   */
  
  uniqueCount = Object.keys(database).length;
  return uniqueCount;
}


function averageWordLength(wordArray) {
  var lengthArray = [];
  var sum = 0;
  var average;
  
  wordArray.forEach(function (word) {
    sum = sum + word.length;
  });
  
  average = sum/wordArray.length;
  return Number(average.toFixed(2)); 
}

function averageSentenceLength (string, wordArray) {
	var numSentences;
	if(string.match(/[.!?]+/g)) {
		numSentences = string.match(/[.!?]+/g).length;
	}
	else {
		numSentences = 1;
	}
  var wordCount = wordArray.length;
  
  return (wordCount / numSentences).toFixed(2);
}

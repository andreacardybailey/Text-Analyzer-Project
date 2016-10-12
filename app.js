function totalWordCount (string) {
	var split = string.split(" ");
	var count = 0; 
	var letters = /[a-z]/;
	console.log(split);
	split.forEach(function(word) {
		if (word.match(letters)) {
			count++; 
		}	
	});
	
	return count; 
}

function uniqueWordCount(string) {
	var split = string.split(" "); 
	var database = {}; 
	var uniqueCount = 0; 
	
	split.forEach(function(word) {
		database[word] === undefined ? database[word] = 1 : database[word]++; 
	}); 
	
	for (var key in database) {
		if (database[key] === 1) {
			uniqueCount++; 
		}
	}
	
	return uniqueCount;
}

function averageWordLength(string) {
	var split = string.split(" ");
	var lengthArray = []; 
	var letters = /[a-z]/;
	
	split.forEach(function (word) {
		if (word.match(letters)) {
			lengthArray.push(word.length);
		}
	}); 
	
	var sum = lengthArray.reduce(function(acc, current) {
		return acc + current; 
	}); 
	
	var average = sum/lengthArray.length; 
	
	return Number(average.toFixed(2)); 
}

function averageSentenceLength (string) {
	var split = string.split(".");
	var sentenceLengths = []; 
	var temp; 
	
	split.forEach(function(sentence) {
		temp = sentence.replace(/\s/g, '').length; 
		sentenceLengths.push(temp);
	});
	
	var sum = sentenceLengths.reduce(function(acc, current) {
		return acc + current; 
	});
	
	var average = sum/sentenceLengths.length; 
	
	return Number(average.toFixed(2)); 

}


$(function() {
  	
 $('#user-input').submit(function(e) {
    e.preventDefault();
    var userInput = $('#user-text').val();
   $("dl").removeClass("hidden");
   console.log(totalWordCount(userInput));
   $(".js-word-count").append('</br>' + totalWordCount(userInput));
   $(".js-unique-word").append('</br>' + uniqueWordCount(userInput));
   $(".js-average-word").append('</br>' + averageWordLength(userInput));
   $(".js-average-sentence").append('</br>' + averageSentenceLength(userInput));

   
  });

 });
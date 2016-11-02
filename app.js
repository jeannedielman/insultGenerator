var	pickRandomWord	=	function(words) {
	return	words[Math.floor(Math.random()	*	words.length)];
};

generateRandomInsult = function() {
//create a container for randomBodyParts, randomAdjectives, randomWords
var randomBodyParts = ['face','nose','hair'];
var randomAdjectives = ['smelly','boring','stupid'];
var randomWords = ['fly','marmot','stick','monkey','rat'];


//Join all the random strings into a sentence:
var	randomString	=	' Your  '	+	pickRandomWord(randomBodyParts)	+ ' is like	a '	+ pickRandomWord(randomAdjectives)	+	
'  '	+	pickRandomWord(randomWords)	+	'!!!';

document.getElementById('getRandomString').innerHTML = randomString;

return randomString;
};
 
var Word = require("./word.js");
var prompt = require('prompt');
var words = ["germany","italy","spain","portugal","finland","greece"];
var gueses = 10;

var v = init();

promptFunc();

function promptFunc(){
	prompt.start();	
	prompt.get([{
	    name: 'letter',
	    description: 'Guess a letter',
	    type: 'string',
	    required: true
	  }], function (err, result) {
		var res = v.guess(result.letter);
		v.display();
		gueses--;
		if(res){
			console.log("You got it right!!! Next word.")
			v = init();
		} else if(gueses < 1){
			console.log("You got it wrong!!! Next word.")
			v = init();
		}
		promptFunc();
	});
}

function init(){
	var numb = Math.floor(Math.random()*6);
	var a = new Word(words[numb]);
	gueses = 10
	a.display();
	return a;
}
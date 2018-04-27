var letter = require("./letter.js");

function Word (word) {
	this.letters = [];
	
	var arr = word.split("");
	for(var i = 0; i < arr.length; i++) {
		var a = new letter(arr[i]);
		this.letters.push(a);
	}

	this.display = function () {
	 	var result = "";
	 	for (var i = 0; i < this.letters.length; i++) {
	 		result += this.letters[i].display();
	 	}
	 	console.log(result);
	 }
	 
	this.guess = function (char) {
		var res = 0;
	 	for (var i = 0; i < this.letters.length; i++) {
	 		res += this.letters[i].guess(char);
	 	}
	 	if(res > 0){
	 		console.log("CORRECT!!!");
	 	} else{
	 		console.log("INCORRECT!!!");
	 	}
	 	res = 0;
	 	for (var i = 0; i < this.letters.length; i++) {
	 		res += this.letters[i].bool;
	 	}
	 	if(res===this.letters.length){
	 		return true;
	 	} else {
	 		false;
	 	}
	}

}

/*var b = new Word ("test"); 
console.log(b.display());
b.guess("t");
console.log(b.display());*/

module.exports=Word;


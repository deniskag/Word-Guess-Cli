
function Letter (character) {
	this.character = character;
	this.bool = false;
	this.display = function () {
		if (this.bool) {
			return this.character;
		} else {
			return "_";
		}
	};
	this.guess = function (userGuess) {
		this.bool = this.bool || this.character === userGuess;
		return this.character === userGuess ? 1 : 0;
	}
}




/*var l = new Letter("a");
console.log(l.display());
l.guess("a");
console.log(l.display());
l.guess("b");
console.log(l.display());*/

module.exports = Letter;
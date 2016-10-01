//game.js  

var Game = function(){
	this.answer = ['barley', 'wheat', 'amaranth', 'buckwheat', 'rice', 'semolina', 'oat', 'rye'];
	this.chosenWord = this.answer[Math.floor(Math.random() * this.answer.length)]; 
}

module.exports = Game; 
// word.js  

function Words(word) {
    this.word = word;
    this.guessed = [];
    this.lettersAvail = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    this.checkLetters = function (input){
        
        var isVal = false;
    	for (i in this.lettersAvail){
    		if(input == this.lettersAvail[i]){
    			isVal = true;
    		}
    	}
    	console.log(isVal)
    	if (isVal == false){
    		return null;
    	}
    	isVal = false;
	    for (i in this.guessed){
	    		if(input == this.guessed[i]){
	    			isVal = true;
	    		}
	    	}
	    if (isVal == true){
	    	return null;
	    }

	    isVal = false;
	    for (i in this.word){
	    		if(input == this.word[i]){
	    			isVal = true;
	    		}
	    	}
	    return isVal;

    }

    this.printStats = function() {
        console.log("Word: " + this.word);
        console.log("\n-------------\n");
    };
 }

 module.exports = Words;
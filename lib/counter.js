function Counter() {
  this.wordArray = [];
  this.wordOccurences = {};
};

Counter.prototype.formatWordArray = function (data) {
  this.wordArray = data.replace(/[^\w\s]|_/g, "")
                        .split(/\s+/);
};

Counter.prototype.countWords = function () {
  for (var i = 0, j = this.wordArray.length; i < j; i ++) {
    var word = this.wordArray[i].toLowerCase();
    if (this.wordOccurences[word] === undefined) {
      this.wordOccurences[word] = 1;
    } else {
      this.wordOccurences[word] ++;
    }
  };
};

Counter.prototype.isPrimeNumber = function (value) {
  if (value <= 1) return false;
  var prime = true;
  var squareRootValue = parseInt(Math.sqrt(value))
  for (var i = squareRootValue; i > 1; i--) {
    if (value % i == 0) {
      prime = false;
      break;
    }
  }
  return prime
};


module.exports = Counter;

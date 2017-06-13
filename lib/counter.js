function Counter() {
  this.wordArray = [];
  this.wordOccurrences = {};
  this.wordOccurrencesWithPrime = {};
}

Counter.prototype.formatWordArray = function (data) {
  this.wordArray = data.replace(/[^\w\s]|_/g, "")
  .split(/\s+/)
  .filter(String);
};

Counter.prototype.countWords = function () {
  for (var i = 0, j = this.wordArray.length; i < j; i ++) {
    var word = this.wordArray[i].toLowerCase();
    if (this.wordOccurrences[word] === undefined) {
      this.wordOccurrences[word] = 1;
    } else {
      this.wordOccurrences[word] ++;
    }
  }
};

Counter.prototype.isPrimeNumber = function (value) {
  if (value <= 1) return false;
  var prime = true;
  var squareRootValue = parseInt(Math.sqrt(value));
  for (var i = squareRootValue; i > 1; i--) {
    if (value % i === 0) {
      prime = false;
      break;
    }
  }
  return prime;
};

Counter.prototype.addPrime = function () {
  var self = this;

  Object.keys(self.wordOccurrences).forEach(function(key){
    var value = self.wordOccurrences[key];
    var isPrimeNumber = self.isPrimeNumber(value);
    var arr = [value, isPrimeNumber];
    self.wordOccurrencesWithPrime[key] = arr;
  });
};

module.exports = Counter;

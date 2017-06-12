function Counter() {
  this.wordArray = [];
  this.wordOccurences = {};
};

Counter.prototype.addToWordArray = function (data) {
  this.wordArray = data.split(" ");
};

Counter.prototype.countWords = function () {
  for (var index = 0; index < this.wordArray.length; index ++) {
    var word = this.wordArray[index];
    if (this.wordOccurences[word] === undefined) {
      this.wordOccurences[word] = 1;
    } else {
      this.wordOccurences[word] ++;
    }
  }
};

module.exports = Counter;

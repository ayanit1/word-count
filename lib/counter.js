function Counter() {
  this.wordArray = [];
  this.wordOccurences = {};
};

Counter.prototype.addToWordArray = function (data) {
  this.wordArray = data.split(/\s+/);
};

Counter.prototype.countWords = function () {
  for (var i = 0, j = this.wordArray.length; i < j; i ++) {
    var word = this.wordArray[i];
    if (this.wordOccurences[word] === undefined) {
      this.wordOccurences[word] = 1;
    } else {
      this.wordOccurences[word] ++;
    }
  }
};

module.exports = Counter;

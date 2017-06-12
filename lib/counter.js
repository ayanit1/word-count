function Counter() {
  this.wordArray = [];
  this.wordOccurences = {};
};

Counter.prototype.addToWordArray = function (data) {
  this.wordArray = data.split(" ");
};

module.exports = Counter;

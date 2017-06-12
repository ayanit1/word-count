
function Counter() {
  this.wordArray = [];
  this.wordOccurences = {};
};

Counter.prototype.addWordArray = function (data) {
  this.wordArray = data.split(" ");
};

module.exports = Counter;

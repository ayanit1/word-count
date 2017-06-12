var fs = require('fs');
var filename = process.argv[2];
var Counter = require('../lib/counter');

function runCount(filename){
  fs.readFile(filename, 'utf8', function(err, data) {
    if (err) throw err;
    counter = new Counter();
    counter.formatWordArray(data);
    counter.countWords();
    counter.addPrime();
    console.log(counter.wordOccurrencesWithPrime);
  });
}

runCount(filename);

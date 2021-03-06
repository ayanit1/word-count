describe("Counter", function(){
  var Counter = require("../lib/counter");

  beforeEach(function(){
    counter = new Counter();
  });

  describe("when created", function(){
    it("has an empty wordArray", function(){
      expect(counter.wordArray).toEqual([]);
    });
    it("has an empty wordOccurrences hash", function(){
      expect(counter.wordOccurrences).toEqual({});
    });
    it("has an empty wordOccurrencesWithPrime hash", function(){
      expect(counter.wordOccurrencesWithPrime).toEqual({});
    });
  });

  describe("Counter.prototype", function(){
    var data = "this test";
    var data2 = "another      test";
    var data3 = "ignoring, punctuation!?";
    var data4 = "test TEST Test";
    var data5 = 'yes yes yes, no no no no no no!';

    describe(".formatWordArray", function(){

      it("ignores white space", function(){
        counter.formatWordArray(data2);
        expect(counter.wordArray).toEqual(["another", "test"]);
      });
      it("ignores punctuation", function(){
        counter.formatWordArray(data3);
        expect(counter.wordArray).toEqual(["ignoring", "punctuation"]);
      });
      it("separates a sentence and adds to wordArray", function(){
        counter.formatWordArray(data);
        expect(counter.wordArray).toEqual(["this", "test"]);
      });
    });

    describe(".countWords", function(){
      it("counts the words in wordArray and displays results in wordOccurrences", function(){
        counter.formatWordArray(data);
        counter.countWords();
        expect(counter.wordOccurrences).toEqual({"this":1, "test":1});
      });
      it("ignores capitalisation", function(){
        counter.formatWordArray(data4);
        counter.countWords();
        expect(counter.wordOccurrences).toEqual({"test":3});
      });
    });

    describe(".isPrimeNumber", function(){
      var value = 41;
      var value2 = 25;

      it("returns true", function(){
        expect(counter.isPrimeNumber(value)).toBeTruthy();
      });
      it("returns false", function(){
        expect(counter.isPrimeNumber(value2)).toBeFalsy();
      });
    });

    describe(".addPrime", function(){
      it("evaluates prime numbers and displays results in wordOccurrencesWithPrime", function(){
        counter.formatWordArray(data5);
        counter.countWords();
        counter.addPrime();
        expect(counter.wordOccurrencesWithPrime).toEqual({"yes":[3, true], "no":[6, false]});
      });
    });
  });
});

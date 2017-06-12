describe("Counter", function(){
  var Counter = require("../lib/counter")

  beforeEach(function(){
    counter = new Counter
  });

  describe("when created", function(){
    it("has an empty wordArray", function(){
      expect(counter.wordArray).toEqual([]);
    });
    it("has an empty wordOccurences hash", function(){
      expect(counter.wordOccurences).toEqual({});
    });
  });

  describe("Counter.prototype", function(){
    var data = "this test";
    var data2 = "another      test";
    var data3 = "ignoring, punctuation!?"

    describe(".formatWordArray", function(){

      it("eliminates white space", function(){
        counter.formatWordArray(data2);
        expect(counter.wordArray).toEqual(["another", "test"])
      });

      it("ignores punctuation", function(){
        counter.formatWordArray(data3);
        expect(counter.wordArray).toEqual(["ignoring", "punctuation"])
      });

      it("separates a sentence and adds to wordArray", function(){
        counter.formatWordArray(data);
        expect(counter.wordArray).toEqual(["this", "test"])
      });
    });

    describe(".countWords",function(){
      it("counts the words in wordArray and displays results in wordOccurences", function(){
        counter.formatWordArray(data);
        counter.countWords();
        expect(counter.wordOccurences).toEqual({"this":1, "test":1})
      });
    });
  });
});

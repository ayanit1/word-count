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


  describe(".addToWordArray", function(){
    var data = "this test";

    it("separates a sentence and adds to wordArray", function(){
      counter.addToWordArray(data);
      expect(counter.wordArray).toEqual(["this", "test"])
    });
  });

  describe(".countWords",function(){
    var data = "this test";

    it("counts the words in wordArray and displays results in wordOccurences", function(){
      counter.addToWordArray(data);
      counter.countWords();
      expect(counter.wordOccurences).toEqual({"this":1, "test":1})
    })
  })

});

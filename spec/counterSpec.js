describe("Counter", function(){
  var Counter = require('../lib/counter')

  beforeEach(function(){
    counter = new Counter
  });

  describe("when created", function(){

    it("has an empty wordArray", function(){
      expect(counter.wordArray).toEqual([]);
    })

    it("has an empty wordOccurences hash", function(){
      expect(counter.wordOccurences).toEqual({});
    })
  });

  describe("#addWordArray", function(){
    var data = "this test"

    it("separates a sentence and adds to wordArray", function(){
      counter.addWordArray(data);
      expect(counter.wordArray).toEqual(["this", "test"])
    })
  });
});

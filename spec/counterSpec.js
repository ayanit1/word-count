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
});

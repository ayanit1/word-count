describe("Counter", function(){
  var Counter = require('../lib/counter')

  describe("when created", function(){

    it("has an empty wordArray", function(){
      counter = new Counter();
      expect(counter.wordArray).toEqual([]);
    })
  });
});

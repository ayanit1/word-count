describe("Counter", function(){

  describe("when created", function(){

    it("has an empty wordArray", function(){
      var counter = new Counter();
      expect(counter.wordArray).toEqual([]);
    })
  });
});

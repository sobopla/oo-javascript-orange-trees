describe("an orange tree", function() {
  var tree;

  beforeEach(function() {
    tree = new OrangeTree();
  });

  it("has an age",function(){
    expect(tree.age).toEqual(0);
  });
  it("has a height",function(){
    expect(tree.height).toEqual(0);
  });
  it("has a collection of oranges",function(){
    expect(tree.oranges).toEqual([]);
  });

  describe("reporting whether it's mature", function() {
    it("is mature if it has reached fruit-bearing age", function() {
      tree.age = 6;
      expect(tree.isMature()).toEqual(true);
    });
    it("is not mature if it has not reached fruit-bearing age",function() {
      expect(tree.isMature()).toEqual(false);
    });
  });

  describe("reporting whether it's dead", function() {
    it("is dead if it's reached the maximum age for an orange tree", function() {
      tree.age = 100;
      expect(tree.isDead()).toEqual(true);
    });
    it("is not dead if it's not reached the maximum age for an orange tree",function() {
      expect(tree.isDead()).toEqual(false);
    });
  });

  describe("reporting whether it has oranges", function() {
    it("has oranges if it's collection of oranges is not empty", function() {
      tree.oranges.push(new Orange());
      expect(tree.hasOranges()).toEqual(true);
    });
    it("has no oranges if it's collection of oranges is empty", function() {
      expect(tree.hasOranges()).toEqual(false);
    });
  });

  describe("passing a growing season", function() {
    describe("when it's alive", function() {
      it("gets older", function() {
        tree.passGrowingSeason();
        expect(tree.age).toEqual(1);
      });

      describe("when the tree is shorter than the maximum height for an orange tree", function() {
        it("grows taller", function() {
          tree.passGrowingSeason();
          expect(tree.height).toEqual(2.5);
        });
      });

      describe("when the tree has reached the maximum height for an orange tree", function() {
        it("does not grow", function() {
          tree.height = 25;
          tree.passGrowingSeason();
          expect(tree.height).toEqual(25);
        });
      });

      describe("when it's mature", function() {
        it("produces oranges", function() {
          tree.age = 6;
          tree.passGrowingSeason();
          expect(tree.oranges.length).toEqual(10);
        });
      });

      describe("when it's not mature", function() {
        it("does not produce fruit", function() {
          tree.passGrowingSeason();
          expect(tree.oranges.length).toEqual(0);
        });
      });
    });

    describe("when it's dead", function() {
      it("does not get older", function() {
        tree.age = 100;
        expect(tree.isDead()).toEqual(true);
        tree.passGrowingSeason();
        expect(tree.age).toEqual(100);
      });
      it("does not grow", function() {
        tree.age = 100;
        tree.height = 25;
        expect(tree.isDead()).toEqual(true);
        tree.passGrowingSeason();
        expect(tree.height).toEqual(25);
      });
      it("does not produce fruit", function() {
        tree.age = 100;
        expect(tree.isDead()).toEqual(true);
        tree.passGrowingSeason();
        expect(tree.hasOranges()).toEqual(false);
      });
    });
  });

  describe("picking an orange", function() {
    describe("when the tree has oranges", function() {
      it("returns one of its oranges", function() {
        tree.age = 6;
        tree.passGrowingSeason();
        expect(tree.pickAnOrange()).toEqual(jasmine.any(Orange));
      });
      it("no longer has the returned orange in its collection of oranges", function() {
        tree.age = 6;
        tree.passGrowingSeason();
        var orangy = tree.pickAnOrange();
        expect(tree.oranges).not.toContain(orangy);
      });
    });

    describe("when the tree has no oranges", function() {
      it("returns undefined", function() {
        expect(tree.pickAnOrange()).toEqual(undefined);
      });
    });
  });
});









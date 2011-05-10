// Perhaps a require module that takes a long time to load
provide(function(exports) {
  exports({
    foo:"bar",
    fizz:"buzz",
    hello: function() { return "world"; }
  });
});

// Perhaps this module depends on another module.
provide(function(exports) {
  using("lib/moduleC", function() {

    // Some some cool stuff with moduleC here

    exports();
  });
});

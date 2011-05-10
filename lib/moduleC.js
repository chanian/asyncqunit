// Perhaps this module takes 200ms to finish
provide(function(exports) {
  window.setTimeout(function() {
    exports();
  }, 200);
});

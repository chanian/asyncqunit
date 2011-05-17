provide('test/test3', function(exports) {
  using("lib/moduleA", "lib/moduleB", function(a, b) {
    module("third test suite");
    test('test', function() {
      expect(1);
      ok(true);
    });
    test('test', function() {
      expect(1);
      ok(true);
    });

    exports();
  });
});

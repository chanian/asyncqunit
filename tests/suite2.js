provide('test/test2', function(exports) {
  module("second test suite");
  test('test', function() {
    expect(1);
    ok(true);
  });
  test('test', function() {
    expect(1);
    ok(true);
  });
  // loadrunner will block on delayed exports
  window.setTimeout(function() {

    exports();
  }, 500);
});

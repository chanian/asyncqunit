provide('test/test1', function(exports) {
  module("first test suite");
  asyncTest('test1', function() {
    expect(1);
    ok(true);
    start();
  });
  test('test2 - Something has gone horribly wrong!!', function() {
    expect(100);
    console.log("Yes this test run");
    ok(false);
  });
  test('test3', function() {
    expect(1);
    ok(true);
  });

  exports();
});

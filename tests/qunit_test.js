// Doesn't have to be a dependency, still works
module('fourth test suite');
test('test', function() {
  expect(1);
  ok(true);
});
asyncTest('test', function() {
  ok( 1 );
  window.setTimeout(function() {
    ok(true);
    start();
  });
});
test('test', function() {
  expect(1);
  ok(true);
});

// explicit loadrunner module names are optional
provide(function () {
  module('name of module', function () {
    setup:function () {},
    teardown: function () {}
  });

  test('should do something', function () {});
  asycTest('should do something else', function () { start(); });
  export();
});
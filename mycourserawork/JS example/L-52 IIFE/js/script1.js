(function (window) {
  var rupaliDashore = {};
  rupaliDashore.name = "Rupali";
  var greeting = "Hello ";
  rupaliDashore.sayHello = function () {
    console.log(greeting + rupaliDashore.name);
  }

  window.rupaliDashore = rupaliDashore;

})(window);

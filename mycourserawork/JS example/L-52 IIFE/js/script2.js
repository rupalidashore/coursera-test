(function (window) {
  var anandDashore = {};
  anandDashore.name = "Anand";
  var greeting = "Hi ";
  anandDashore.sayHi = function () {
    console.log(greeting + anandDashore.name);
  }

  window.anandDashore= anandDashore;

})(window);




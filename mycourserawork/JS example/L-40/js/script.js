//var x="Hello World";
var message = "in global";
console.log("globe:message=" + message);


var a = function () {
  var message = "inside a";
  console.log("a: message = " + message);

  function b () {
    console.log("b: message = " + message); 
  }

  b();
}

a();

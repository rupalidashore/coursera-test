//Closures
function makeMultiplier (multiplier) {
  // var multiplier = 2;
  function b() {
    document.write("Multiplier is: " + multiplier);
  }
  b();


  return (
      function (x) {
        return multiplier * x;
      }

    );
}

var doubleAll = makeMultiplier(2);
console.log(doubleAll(10)); // its own exec env


//Example 2

/*function show(){
    var j = "j is a Local vari of outer Function";
    document.write(j + "<br>");
    function innerFun(){
        var k = "k is a local vari of inner Function";
        document.write(k + "<br>");
        document.write(j + "<br>"); //outer function variable assess in inner function
    }
    innerFun();
    document.write(j + "<br>");
    document.write(k + "<br>"); //inner fuction variable access in outer function
        
        
}
show();*/

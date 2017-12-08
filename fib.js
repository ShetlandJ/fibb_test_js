var fibbonacci_array = [1, 2];

var getFibbonacciNumbers = function(){
  var f = 1;

  while (f < 4000000) {
    var fibNumber = fibbonacci_array[fibbonacci_array.length-2];
    var previousFibNumber = fibbonacci_array[fibbonacci_array.length-1];
    f = fibNumber
    f += previousFibNumber;
    fibbonacci_array.push(f)
  }
}

getFibbonacciNumbers();

var even_fib_array = []
var counter = 0;

for (var number of fibbonacci_array) {
  if (number % 2 === 0) {
    even_fib_array.push(number);
  }
}

for (var number of even_fib_array) {
  counter += number;
}

console.log(counter)

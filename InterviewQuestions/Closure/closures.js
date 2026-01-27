for (let i = 0; i < 3; i++) {
  setTimeout(function log() {
    console.log(i); // Now logs 0, 1, 2 as expected
  }, 1000);
}

for (var i = 0; i < 3; i++) {
  setTimeout(function log() {
    console.log(i); // What is logged?
  }, 1000);
}

function createBase(baseNumber) {
  return function (N) {
    // This inner function is a closure that remembers baseNumber
    return baseNumber + N;
  };
}

var addSix = createBase(6);
console.log(addSix(10)); // returns 16
console.log(addSix(21)); // returns 27

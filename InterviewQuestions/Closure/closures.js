for (let i = 0; i < 3; i++) {
  setTimeout(function log() {
    console.log(i);  // Now logs 0, 1, 2 as expected
  }, 1000);
}

for (var i = 0; i < 3; i++) {
  setTimeout(function log() {
    console.log(i); // What is logged?
  }, 1000);
}

// By the help of closure
for (var i = 0; i < 3; i++) {
  (function (i) {
    setTimeout(() => console.log(i), 1000);
  })(i);
}


for (var i = 0; i < 3; i++) {
  function t(iAr) {
    setTimeout(() => {
      console.log(iAr)
    }, 1000)
  }
  t(i)
}


function createBase(baseNumber) {
  return function (N) {
    // This inner function is as closure that remembers baseNumber
    return baseNumber + N;
  };
}

var addSix = createBase(6);
console.log(addSix(10)); // returns 16
console.log(addSix(21)); // returns 27
console.log(addSix(4));

var addTen = createBase(10)
console.log(addTen(3))
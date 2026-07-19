
for (let i = 0; i < 3; i++) {
    setTimeout(function log() {
        console.log(i);  // Now logs 0, 1, 2 as expected
    }, 1000);
}

for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
        console.log(i); // What is logged? 3,3,3 because it is hosted.
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


/*Implement a custom version of Promise.all called myPromiseAll.
It should take an array of promises (or values) and return a single promise that resolves when all inputs resolve, or rejects immediately if any input rejects
*/
const p1 = Promise.resolve(10);
const p2 = Promise.resolve(20);
const p3 = Promise.resolve(30);

myPromiseAll([p1, p2, p3])
    .then(results => console.log(results)) // [10, 20, 30]
    .catch(err => console.error(err));


//   Implementation
function myPromiseAll(promises) {
    return new Promise((resolve, reject) => {
        let results = [];
        let completed = 0;

        promises.forEach((p, index) => {
            Promise.resolve(p)
                .then(value => {
                    results[index] = value;
                    completed++;
                    if (completed === promises.length) {
                        resolve(results);
                    }
                })
                .catch(err => reject(err));
        });

        if (promises.length === 0) {
            resolve([]); // handle empty input
        }
    });
}

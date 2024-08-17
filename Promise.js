// how to create Promise :- we create a promise with the help of "Promise" constructor, they accept the two callback functions named resolve and reject.

const promise1 = new Promise((resolve, reject) => {
    let checkValidation = true
    if (!checkValidation) {
        return reject('ooh, I m a rejected')
    }
    return resolve('yes I m a resolved promise')
})

// create a function who return promise
function createPromise() {
    return (new Promise(function (resolve, reject) {
        let checkValidation = true
        if (!checkValidation) {
            return reject('ooh, I m a rejected 2')
        }
        return resolve('yes I m a resolved promise 2')
    }))

}



/* Handle(consume) promise with help for 2 methods.
            1. then and catch method
            2. async/await method
 */
// 1 with then catch method
promise1.then(function (res) {
    console.log(res)
}).catch(function (err) {
    console.log(err);
})

promise1.then((res) => { console.log(res).catch((err) => { console.log(err) }) }) // via arrow function

// 2nd Method with Async/await
async function handlePromise() {
    const result = await createPromise().catch((err) => err)
    console.log(result)
    const promise1_Result = await promise1.catch((err) => err)
    console.log(promise1_Result);
}

handlePromise()



// ========================================== Promise Apis ===============================================

/* We have 3 Promise Apis :-
    1. Promise.all() 
    2. Promise.allSettled()
    3. Promise.race()
    4. Promise.any()
    Note :- They all are accept the list of promise in the form of array but they give a different output as per their functionality.
    Note :- I m using arrow functions, you can also use a classic functions
*/

const pr1 = new Promise((resolve, reject) => { // Here a make a fake promise ,to being reject promise just change checkFlag =false
    let checkFlag = true;
    setTimeout(() => {
        if (!checkFlag) { return reject('Pr1 is failed') }
        return resolve('Pr1 is resolved')
    }, 3000)
})

const pr2 = new Promise((resolve, reject) => { // Here a make a fake promise, to being reject promise just change checkFlag =false
    let checkFlag = false;
    setTimeout(() => {
        if (!checkFlag) { return reject('Pr2 is failed') }
        return resolve('Pr2 is resolved')
    }, 1000)
})

const pr3 = new Promise((resolve, reject) => { // Here a make a fake promise ,to being reject promise just change checkFlag =false
    let checkFlag = true;
    setTimeout(() => {
        if (!checkFlag) { return reject('Pr3 is failed') }
        return resolve('Pr3 is resolved')
    }, 10000)
})

/*Promise.all()  :-return a list of the output of the resolved promises in the form of array[otpVal1,otpVal2,optVal3], but if any one is failed/rejected in the given promises list, its  immediately reject and give a single value(err/reason of rejection) in form of error.
*/
Promise.all([pr1, pr2, pr3])
    .then(res => {
        console.log(res)  // otp:- ['Pr1 is resolved', 'Pr2 is resolved', 'Pr3 is resolved']
    })
    .catch(err => {
        console.log(err) // opt :- Pr2 is failed
    })

/*
Promise.allsettled :- return the list of output of all promise whether its failed or succeed.
*/
Promise.allSettled([pr1, pr2, pr3])
    .then(res => {
        console.log(res)  // otp:-[ { "status": "fulfilled", "value": "Pr1 is resolved" }, { "status": "rejected", "reason": "Pr2 is failed" }, {  "status": "fulfilled", "value": "Pr3 is resolved" } ]
    })
    .catch(err => {
        console.log(err)
    })

/* Promise.race :- return the value of first's of the settled promise in the given list. weather it is fail or not */
Promise.race([pr1, pr2, pr3])
    .then((res) => {
        console.log(res) // otp :- prw is failed
    }).catch((err) => {
        console.log(err)
    })

/* Promise.any :- return only the value of first's of the succeed promise in the given list. (only first succeed promise) */
Promise.any([pr1, pr2, pr3])
    .then((res) => {
        console.log(res) // otp :- Pr1 is resolved
    }).catch((err) => {
        console.log(err)
    })
// PROMISES STARTED (states: pending, fulfilled, rejected).
const getPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("I am a promise");
        // resolve("success");
        reject("REJECTED")
    })
}
let promise = getPromise();
promise.then((res) => {
    console.log("fullfiled successfully", res);
})
promise.catch((err) => {
    console.log("NETWORK ERROR", err);
});

// promise chaining
function asyncfun1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("some data1");
            resolve("Data fetched successfully....");
        }, 4000)
    })
}
function asyncfun2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("some data2");
            resolve("Data fetched successfully....");
        }, 4000)
    })
}
console.log("fetching data1...")
asyncfun1().then((res) => {
    console.log(res)
    console.log("fetching data2...")
    asyncfun2().then((res) => {
        console.log(res)
    })
})

// PROMISES STARTED (states: pending, fulfilled, rejected).

let promise = new Promise((resolve, reject) => {
    console.log("I am a promise");
    // resolve(123);
    reject("some error occured");

});

function getData(dataId, getNextData) { // 5s
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // console.log("data", dataId);
            // resolve("success");
            reject("error occured"); // promise rejected
            if (getNextData) {
                getNextData();
            }
        }, 6000);
    });
}

// ASYNC AWAIT

// async function hello() {
//     console.log("hello");
// }

function api() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("wheather api")
            resolve(200)
        }, 4000)
    })
}

// async-await
// to run code directly use iife use (and then use down async func and then add () in last)
(async function getAlldata() {
    console.log("fetching data1....")
    await api(1);
    console.log("fetching data2....")
    await api(2);
    console.log("fetching data3....")
    await api(3);
})()
// practise question
const myPromise = new Promise((resolve, reject) => {
    const success = false;
    if (success) {
        resolve("Task completed successfully");
    } else {
        reject("Task failed");
    }
});

myPromise
    .then(result => console.log(result))
    .catch(error => console.log(error));



//problem no.2
new Promise((resolve) => {
    setTimeout(() => resolve(10), 2000);
})
    .then(num => num * 2)
    .then(num => num + 5)
    .then(num => num - 5)
    .then(result => console.log("Final Result:", result));

//3 problem 

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function runtask() {
    console.log("task starting");
    await delay(3000);
    console.log("task finished after 3 seconds");
}
runtask();


//problem no.4

async function getUser() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
        const data = await response.json();
        console.log("User:", data);
    } catch (error) {
        console.log("Error:", error);
    }
}

getUser();


// leetcode problem n0.1

function api() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("wheather api")
            resolve(200)
        }, 4000)
    })
}
(async function getAlldata() {
    console.log("fetching data1....")
    await api(1);
    console.log("fetching data2....")
    await api(2);
    console.log("fetching data3....")
    await api(3);
})();


// 2 last leet code question
function asyncfun2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched successfully....");
        }, 2000)
    })
}
console.log("fetching data1...")
asyncfun2().then((res) => {
    console.log("some data 1")
    console.log("fetching data2...")
    asyncfun2().then((res) => {
        console.log("some data 2")
        console.log("fetching data 3")
        asyncfun2().then((res) => {
            console.log("some data 3")
            reject("error")
        })
    })
})
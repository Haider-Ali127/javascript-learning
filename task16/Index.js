function getData(dataId, getNextData, getanotherData) { // 2s
    setTimeout(() => {
        console.log("data", dataId);
        if (getNextData) {
            getNextData();
        }
    }, 2000)
}

// callback for second data
// callback hell also called nested callback
getData(1, () => {
    console.log("getting data2......")
    getData(2, () => {
        console.log("getting 3......")
        getData(3, () => {
            console.log("getting data4......")
            getData(4);
        })
    });
})

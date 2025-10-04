// Task 28 job board aggregator
async function jobboard() {
    let companiesData = await (await fetch("https://jsonplaceholder.typicode.com/users")).json();
    let jobsData = await (await fetch("https://jsonplaceholder.typicode.com/todos")).json();

    let companies = [];
    for (let i = 0; i < 3; i++) {
        companies.push({ id: companiesData[i].id, name: companiesData[i].name, jobs: [] });
    }

    let jobs = [];
    for (let i = 0; i < 4; i++) jobs.push(jobsData[i]);

    for (let i = 0; i < jobs.length; i++) {
        for (let j = 0; j < companies.length; j++) {
            if (companies[j].id === jobs[i].userId) companies[j].jobs.push(jobs[i].title);
        }
    }
    console.log("--- Jobs Grouped by Company ---");
    for (let i = 0; i < companies.length; i++) {
        console.log(companies[i].name + ":");
        if (companies[i].jobs.length) {
            for (let k = 0; k < companies[i].jobs.length; k++) {
                console.log(" - " + companies[i].jobs[k]);
            }
        } else console.log(" - No jobs listed");
    }

    let maxCompany = companies[0];
    for (let i = 1; i < companies.length; i++) {
        if (companies[i].jobs.length > maxCompany.jobs.length) maxCompany = companies[i];
    }
    console.log("\nCompany with Most Open Jobs: " + maxCompany.name + " (" + maxCompany.jobs.length + " jobs)\n");
    let allJobs = [];
    for (let i = 0; i < companies.length; i++) {
        for (let j = 0; j < companies[i].jobs.length; j++) {
            allJobs.push(companies[i].jobs[j]);
        }
    }
    for (let i = 0; i < allJobs.length - 1; i++) {
        for (let j = i + 1; j < allJobs.length; j++) {
            if (allJobs[j].length > allJobs[i].length) {
                let temp = allJobs[i];
                allJobs[i] = allJobs[j]
                allJobs[j] = temp;

            }
        }
    }
    console.log("Top 4 Jobs by Title Length:");
    for (let i = 0; i < allJobs.length && i < 4; i++) {
        console.log((i + 1) + ". " + allJobs[i]);
    }
    let noJobs = [];
    for (let i = 0; i < companies.length; i++) {
        if (companies[i].jobs.length === 0) {
            noJobs.push(companies[i].name);
        }
    }
    console.log("Companies with No Jobs:There are " + noJobs.length + " companies with no jobs");
}
jobboard();

// Task 28 job board aggregator
async function jobboard() {
    try {
        let companiesresponse = await fetch("https://jsonplaceholder.typicode.com/users")
        let jobsresponse = await fetch("https://jsonplaceholder.typicode.com/todos");

        if (!companiesresponse.ok || !jobsresponse.ok) {
            console.log("failed fetch");
        }
        const companiesdata = await companiesresponse.json();
        const jobsData = await jobsresponse.json();
        const companies = companiesdata.map(c => ({
            id: c.id,
            name: c.name,
            jobs: []
        }));
        jobsData.forEach(job => {
            const company = companies.find(c => c.id === job.userId);
            if (company) company.jobs.push(job.title);
        });
        const allJobs = companies.flatMap(c => c.jobs);
        const sortedJobs = allJobs.sort((a, b) => b.length - a.length);
        const result = {
            groupedCompanies: companies,
            topJobs: sortedJobs.slice(0, 4),
            noJobCompanies: companies
                .filter(c => c.jobs.length === 0)
                .map(c => c.name)
        };
        console.log("---Jobs Grouped by Company---");
        result.groupedCompanies.forEach(c => {
            console.log(`${c.name}:`);
            if (c.jobs.length) {
                c.jobs.forEach(job => console.log(` - ${job}`));
            } else {
                console.log(" - No jobs listed");
            }
        });
        const maxCompany = companies.reduce((max, c) =>
            c.jobs.length > max.jobs.length ? c : max
        );
        console.log(`Company with Most Open Jobs: ${maxCompany.name} ${maxCompany.jobs.length} jobs`);
        console.log("Top 4 Jobs by Title Length:");
        result.topJobs.forEach((job, i) => console.log(`${i + 1}. ${job}`));
        console.log(`Companies with No Jobs: ${result.noJobCompanies.length}`);
        return result;
    } catch (error) {
        console.log("Error occured...");
    }
}
jobboard();

// Task 29 Mini Project Student Report Analyzer
let students = [
    { name: "Haider", age: 18, class: 10, score: [80, 75, 90, 60] },
    { name: "Hassan", age: 18, class: 10, score: [40, 65, 90, 50] },
    { name: "Sara", age: 18, class: 10, score: [90, 65, 60, 50] },
    { name: "Zain", age: 18, class: 10, score: [70, 85, 80, 90] },
    { name: "Ali", age: 18, class: 10, score: [80, 75, 90, 80] },
    { name: "Hadi", age: 18, class: 10, score: [80, 83, 90, 90] },
    { name: "Hussain", age: 18, class: 10, score: [60, 55, 55, 40] },
    { name: "Zubair", age: 18, class: 10, score: [65, 45, 50, 60] },
];
function studentreport() {
    console.log("---- STUDENTS AVERAGE ----");
    let totalClassScore = 0;
    students.forEach(student => {
        let total = student.score.reduce((sum, s) => sum + s, 0);
        let average = total / student.score.length;
        student.average = average; // store it
        totalClassScore += average;
        if (average >= 80) {
            console.log(`${student.name} Average score: ${average.toFixed(2)} (Excellent)`);
        } else if (average >= 60) {
            console.log(`${student.name} Average score: ${average.toFixed(2)} (Good)`);
        } else {
            console.log(`${student.name} Average score: ${average.toFixed(2)} (Need Improvement)`);
        }
    });

    let classAverage = totalClassScore / students.length;
    console.log("\nClass Average:", classAverage.toFixed(2));

    let sortedStudents = [...students].sort((a, b) => b.average - a.average);
    let topThree = sortedStudents.slice(0, 3);
    console.log("\nTop 3 Students:");
    topThree.forEach((s, index) => {
        console.log(`${index + 1}. ${s.name} - Average: ${s.average.toFixed(2)}`);
    });
    console.log("\n---- STUDENT PERFORMANCE TABLE ----");
    console.table(students.map(s => ({
        Name: s.name,
        Average: s.average.toFixed(2),
        Performance: s.average >= 80 ? "Excellent" : s.average >= 60 ? "Good" : "Needs Improvement"
    })));
}

function searchStudent() {
    let nameSearch = prompt("Enter student name to search:");
    if (!nameSearch) {
        console.log("Please enter a valid name!");
        return;
    }

    let found = false;
    for (let i = 0; i < students.length; i++) {
        if (students[i].name.toLowerCase() === nameSearch.toLowerCase()) {
            found = true;
            let s = students[i];
            if (!s.average) {
                let total = s.score.reduce((sum, val) => sum + val, 0);
                s.average = total / s.score.length;
            }
            console.log(`\n--- Student Found ---`);
            console.log(`Name: ${s.name}`);
            console.log(`Class: ${s.class}`);
            console.log(`Scores: ${s.score.join(", ")}`);
            console.log(`Average: ${s.average.toFixed(2)}`);
            if (s.average >= 80) {
                console.log("Performance: Excellent");
            } else if (s.average >= 60) {
                console.log("Performance: Good");
            } else {
                console.log("Performance: Need Improvement");
            }
            break;
        }
    }

    if (!found) {
        console.log("\nStudent not found!");
    }

    let again = prompt("Search another student? (yes/no)");
    if (again && again.toLowerCase() === "yes") searchStudent();
}
searchStudent();
studentreport();

let courses = [
    {
        id: 101,
        name: "DSA",
        capacity: 20,
        students: []
    },
    {
        id: 102,
        name: "OOP",
        capacity: 25,
        students: []
    },
    {
        id: 103,
        name: "Database Systems",
        capacity: 10,
        students: []
    },
    {
        id: 104,
        name: "Operating Systems",
        capacity: 35,
        students: []
    }
];
let student = [
    {
        id: 201,
        name: "Haider",
        enrolled: []
    },
    {
        id: 202,
        name: "ismail",
        enrolled: []
    },
    {
        id: 203,
        name: "Ali",
        enrolled: []
    },
    {
        id: 204,
        name: "Adnan",
        enrolled: []
    },
    {
        id: 205,
        name: "Hassan",
        enrolled: []
    },
    {
        id: 206,
        name: "Hussain",
        enrolled: []
    }
];
function enrolledstudent(courseid, student) {
    let found = null;
    for (let course of courses) {
        if (course.id === courseid) {
            found = course;
            break;
        }
    }
    if (found === null) {
        console.log("Course doesn't exist");
        return;
    }
    if (found.students.length >= found.capacity) {
        console.log("There is no space in this course");
        return;
    }
    for (let stu of found.students) {
        if (stu.id === student.id) {
            console.log("Student already enrolled in this course");
            return;
        }
    }
    found.students.push(student);
    console.log("Student enrolled successfully!");
}
function courseReport(courseId) {
    let found = null
    for (let course of courses) {
        if (course.id === courseId) {
            found = course;
            break;
        }
    }
    if (found === null) {
        console.log("course not found");
        return;
    }
    console.log("Course Name:", found.name);
    console.log("Enrolled Students:", found.students.length);
    console.log("Remaining Seats:", found.capacity - found.students.length);

    console.log("Students List:");
    for (let stud of found.students) {
        console.log(stud.name);
    }
}
function mostpopcourse() {
    let mostPopular = null;
    let maxStudents = 0;
    for (let course of courses) {
        let numcour = course.students.length;
        if (numcour > maxStudents) {
            maxStudents = numcour;
            mostPopular = course;
        }
    }
    if (mostPopular === null) {
        console.log("No courses found");
    } else {
        console.log(`Most Popular Course: ${mostPopular.name} with ${maxStudents} students`);
    }
}
enrolledstudent(102, student[0]);
enrolledstudent(103, student[1]);
enrolledstudent(102, student[2]);
enrolledstudent(104, student[4]);
courseReport(102);
mostpopcourse();


// Task 26 leeet code problem
function longstr(str) {
    let maximum = 0;
    for (let i = 0; i < str.length; i++) {
        let arr = []
        let length = 0
        for (let j = i; j < str.length; j++) {
            let c = str[j];
            let repeat = false;
            for (let k = 0; k < str.length; k++) {
                if (arr[k] === c) {
                    repeat = true;
                    break;
                }
            }
            if (repeat) {
                break;
            }
            arr.push(c);
            length++;

            if (length > maximum) {
                maximum = length
            }
        }
    }
    return maximum;
}
console.log(longstr("abcabcbb"));
console.log(longstr("bbbbb"));
console.log(longstr("pwwkew"));


// Time complexity: O(n³) three nested loops (i, j, k) means it gets slow for long strings.

// Space complexity: O(n).
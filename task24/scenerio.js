// SCENERION BASED QUESTION NO.2: LIBRARY MANAGEMENT SYSTEM.
let library = [
    {
        title: "HORROR PUCK",
        id: 101,
        author: "Haider Ali",
        Available: true
    },
    {
        title: "avengers",
        id: 102,
        author: "Hassan Ali",
        Available: true
    },
    {
        title: "kittens",
        id: 103,
        author: "Ismail",
        Available: false
    },
    {
        title: "car racer",
        id: 104,
        author: "Hanker",
        Available: true
    },
    {
        title: "Anger",
        id: 105,
        author: "By Hammer",
        Available: true
    },
    {
        title: "hanker",
        id: 106,
        author: "By hunain",
        Available: false
    },
    {
        title: "hard work",
        id: 107,
        author: "CLiper",
        Available: true
    },
    {
        title: " year 2026",
        id: 108,
        author: "By jully",
        Available: false
    },
];
function borrow(id) {
    for (let book of library) {
        if (book.id === id) {
            if (book.Available) {
                console.log(`You borrowed: ${book.title}`);
            }
            else {
                console.log(`Sorry, "${book.title}" is already sold out.`);
            }
            return;
        }
    }
    console.log("Book not found in library.");
}
function allbook() {
    for (let book of library) {
        if (book.Available) {
            console.log(`tittle: ${book.title}-id: ${book.id}-author: ${book.author}`)
        }
    }
}

borrow(101)
borrow(108)
allbook()
console.log("when book not exist")
borrow(1009)


// string methods = string methods aloow you to manipulate and work with text(string)

let string1 = "HaiderAli";

console.log(string1.length)// defines the length of your string
console.log(string1.charAt(2))
console.log(string1.indexOf("e"))// gives the index of the given character
console.log(string1.lastIndexOf("n"))  // gives the last index of the given character
console.log(string1.trim());
let result = string1.startswith(" ")
let result = string1.includes(" ")

if(result){
    console.log("your user name cant includes  'empty space ' ")
} 
else {
    console.log(string1)
}

let phonenumber = "0318-6344-590";
phonenumber = phonenumber.replaceAll("-", "");
console.log(phonenumber);

let name1 = "Adnan"
console.log(name1.split("").reverse().join(""));


 
// -----------task10  practise question solution-------------
// QUESTION NO.1 
let name = "Haider Ali";
let result = name.split("").reverse().join("");
console.log(result);



// QUESTION NO.2

let string = "level"
let result = string.split("").reverse().join("");
if(string === result){
    console.log(true);
} else {
    console.log(false);
}


// QUESTION NO.3
let vowel = "aeiou";
let word = "javascript"
count = 0
for(let i = 0; i < word.length; i++){
    for(let char of vowel){
        if(word[i] === char){
            count += 1;
        }
    }
}
console.log(count)

// QUESTION NO.4
const word = "haider ali"
 let output = word.split(" ").map(word=>{
    return word[0].toUpperCase() + word.slice(1)
 }).join(" ");
console.log(output);

 
 
// QUESTION NO.5

let str = "my name is haider"
let split = str.split(" ")  
let largest = split[0] 

for(let i=0; i < split.length; i++){  
    if(split[i].length > largest.length){
        largest = split[i]
    }
}
console.log(largest)


















// Exercise 1.1 - create variable called name 
const myName = "Jess";

// Exercise 1.2 - create age 
let age = 28; 
console.log(age)

// Exercise 1.3 
let futureJob = "Web Developer";
console.log(futureJob)

//Exercise 1.4 
const myInfo = "My name is " + myName + " I am " + age;
console.log(myInfo)
//Exercise 1.5 
const myInfoCat = `My name is ${myName} I am ${age}`;
console.log(myInfoCat)


let allergicToPrawns = false;
//Exercise 2.1 If we are allergic to prawns print out "Guess we're having bread sticks"
if (allergicToPrawns === true) {
    console.log("Guess we're having breadsticks");

}
// 

else if (allergicToPrawns === false){
    console.log("Bring on the shellfish!");
}

else {
    console.log("This person is not sure");
}


//CalcArea function

function calcArea(width, height) {
    let result = width * height;
    console.log(result);
}

calcArea(14,15);

// DOM Events 















var my_name = "fAizan";
var age = 22;
var degree = "CS";

console.log("---------------Biography---------------------");
console.log(my_name);
console.log(age);
console.log(degree);
console.log("----------------------------------------------");

var biographyObject = {
    name: "FAizan",
    age: 22,
    hobbies: ["Coding", "Current Affairs", "Solving puzzles"],

    address: {
        country: "Pakistan",
    },

    degreeProgram: {
        major: "Computer Science",
        institute: "AIR University isb",
        yearCompleted: 2028
    }
};

console.log("\n--- Object Biography ---");
console.log("Hello, I am " + biographyObject.name + ", and I am " + biographyObject.age + " year old.");
console.log("I am from " + biographyObject.address.country + ".");
console.log("I am from " + biographyObject.degreeProgram.institute + " will complete my degre" + biographyObject.degreeProgram.major + " in " + biographyObject.degreeProgram.yearCompleted + ".");
console.log("In my free time, I enjoy " + biographyObject.hobbies[0].toLowerCase() + " and " + biographyObject.hobbies[2].toLowerCase() + ".");
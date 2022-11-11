
// const courselist =  { code: ["ACIT 1620", "ORGB 1110", "ACIT 1515"],  name: ["Web Fundamental Technologies", "Orginizational Behaviour", "Scripting for IT"]}

let input;

do {
    input = prompt("Enter a 4 digit number:");

    if (input !== '1620' && input !== '1110' && input !== '1515'){
        console.log("Not a 4 Digit Number");
    }
} while (input !== '1620' && input !== '1110' && input !== '1515');



if (input === "1620")
{
console.log(`Yes I am taking the course: ${input} Web Fundamental Technologies`);
}
if (input === "1110")
{
console.log(`Yes I am taking the course: ${input} Orginizational Behaviour`);
}
if (input === "1515")
{
console.log(`Yes I am taking the course: ${input} Scripting for IT`);
}

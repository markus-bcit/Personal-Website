
const courselist =  [{ code: ["ACIT 1620", "ORGB 1110", "ACIT 1515"],  name: ["Web Fundamental Technologies", "Orginizational Behaviour", "Scripting for IT"]}]

let input;

do {
    input = prompt("Enter a 4 digit class number:");

    if (input !== '1620' && input !== '1110' && input !== '1515'){
        console.log("Not a class number");
        courselist.push({code: input, name})
    }
} while (input !== '1620' && input !== '1110' && input !== '1515');



if (input === "1620")
{
console.log(`Yes I am taking the course: ACIT ${input} - Web Fundamental Technologies`);
}
else if (input === "1110")
{
console.log(`Yes I am taking the course: ORGB ${input} - Orginizational Behaviour`);
}
else if (input === "1515")
{
console.log(`Yes I am taking the course: ACIT ${input} -  Scripting for IT`);
}
console.log(courselist)
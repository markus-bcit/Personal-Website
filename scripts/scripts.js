
const courselist =  [{ code: ["ACIT 1620", "ORGB 1110", "ACIT 1515"],  name: ["Web Fundamental Technologies", "Orginizational Behaviour", "Scripting for IT"]}]

let input;

do {
    input = prompt("Enter a 4 digit class number:");

    if (input !== '1620' && input !== '1110' && input !== '1515'){
        console.log("Not a class number");
        courselist.push({code: input, name})
    }
} while (input !== '1620' && input !== '1110' && input !== '1515');

for (let x = 0; x < courselist[0]['code'].length; x++) 
{
    if (courselist[0]['code'][x].includes(input)) {
        console.log(`Yes I am taking the course: ${courselist[0]['code'][x]} - ${courselist[0]['name'][x]}`)
    }
        
}
console.log(courselist)

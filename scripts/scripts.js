
const courselist = [{ code: "ACIT 1620", name: "Web Fundamental Technologies"},
                    {code: "ORGB 1110", name: "Orginizational Behaviour"},
                    {code: "ACIT 1515", name: "Scripting for IT"}]

let input;

do {
input = prompt("Enter a 4 digit class number:");

if (input !== '1620' && input !== '1110' && input !== '1515'){
console.log("Not a class number, input added to array");
courselist.push({code: input, name})
}
} while (input !== '1620' && input !== '1110' && input !== '1515');

for (let x = 0; x < courselist.length; x++) 
{
if (courselist[x]['code'].includes(input)) {
console.log(`Yes I am taking the course: ${courselist[x]['code']} - ${courselist[x]['name']}`)
}

}
console.log(courselist)
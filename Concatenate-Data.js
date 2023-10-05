

//"You are <firstName> <lastName>, a <age>-years old person from <town>."


function concatenateData(index) {

let firstName = index[0];
let lastName = index[1];
let age = Number(index[2]);
let town = index[3];
console.log(`You are ${firstName} ${lastName}, a ${age}-years old person from ${town}.`);

}
concatenateData(["Maria","Ivanova", 20 ,"Sofia"])
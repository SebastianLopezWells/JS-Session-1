console.log("Hello World");

//Declaration of variables
var userName;

//Assign a value to the variable
userName="Cory";
userName="Nana";
userName=99;
let userAge=16;
console.log(userName);

let userEmail="slopezWells@gmail.com"; //Declaration and assign at the same time

const url="www.whatever.com";

console.log(userEmail);

document.write("Sad way to display things");
document.write("<p>User Name:" + userName + "  </p><p>User Email: <p>" + userEmail+" </p> <p><User Age: "+userAge+ " </p>Web Page: "+url+" </p>");

document.write("Better way to display things");
document.write(` <p>Name: ${userName}</p>
                 <p>Email: ${userEmail}</p>
                 <p>Age: ${userAge}</p>
                 <p>Web: ${url}</p>
                 `)
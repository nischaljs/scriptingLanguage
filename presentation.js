
// creating regex using RegExp() constructor
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
const emailRegex = new RegExp(emailPattern);



const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; 
const nameRegex = /^[a-zA-Z\s]{2,50}$/; 


function validateEmail(email) {
    return emailRegex.test(email);
}


function validatePassword(password) {
    return passwordRegex.test(password);
}


function validateName(name) {
    return nameRegex.test(name);
    // return name.match(nameRegex);
}


const email = "nischal@gmail.com";
const password = "Password123!";
const name = "Nischal Bhattarai";

console.log(`Is the email valid? ${validateEmail(email)}`); 


console.log(`Is the password valid? ${validatePassword(password)}`); 


console.log(`Is the name valid? ${validateName(name)}`); 

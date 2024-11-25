const formElem = document.getElementsByTagName('form')[0];
const emailElem = document.getElementsByName('email')[0];
const usernameElem = document.getElementsByName('username')[0];
const passElem = document.getElementsByName('password')[0];
const confirmPassElem = document.getElementsByName('cofirmpass')[0];
const submitElem = document.getElementById('submit');

const usernameError = document.querySelector('.username-error');
const emailError = document.querySelector('.email-error');
const passwordError = document.querySelector('.password-error');
const confirmPasswordError = document.querySelector('.confirm-password-error');

const toggleDisplayPass = document.getElementsByTagName('i');
console.log(toggleDisplayPass);

const toggleDisplayPassfn = (inputField,icon) =>{
    icon.addEventListener('click',()=>{
        const type = inputField.type === 'password' ? 'text' : 'password';
        inputField.type = type;
        icon.classList.toggle('ri-eye-off-line');
        icon.classList.toggle('ri-eye-line');
    })
}

toggleDisplayPassfn(passElem,toggleDisplayPass[0]);
toggleDisplayPassfn(confirmPassElem,toggleDisplayPass[1]);

submitElem.addEventListener('click', (e) => {
    e.preventDefault();

    const email = emailElem.value.trim();
    const username = usernameElem.value.trim();
    const password = passElem.value.trim();
    const confirmPassword = confirmPassElem.value.trim();

    if (username.length >= 3) {
        usernameElem.classList.add("correct-input");
        usernameElem.classList.remove("incorrect-input");
        usernameError.innerHTML=''
    } else {
        usernameElem.classList.add("incorrect-input");
        usernameElem.classList.remove("correct-input");
        usernameError.classList.replace("no-error","error");
        usernameError.textContent = "Username must be at least 3 characters long";
    }

    if (email.includes("@") && email.includes(".")) {
        emailElem.classList.add("correct-input");
        emailElem.classList.remove("incorrect-input");
        emailError.innerHTML ='';
    } else {
        emailElem.classList.add("incorrect-input");
        emailElem.classList.remove("correct-input");
        emailError.classList.replace("no-error","error");
        emailError.textContent = "Enter a valid email address";
    }

    if (password.length >= 6) {
        passElem.classList.add("correct-input");
        passElem.classList.remove("incorrect-input");
        passwordError.innerHTML=''
    } else {
        passElem.classList.add("incorrect-input");
        passElem.classList.remove("correct-input");
        passwordError.classList.replace("no-error","error");
        passwordError.textContent = "Password must be at least 6 characters long";
    }

    if (confirmPassword === password && confirmPassword.length >= 6) {
        confirmPassElem.classList.add("correct-input");
        confirmPassElem.classList.remove("incorrect-input");
        confirmPasswordError.innerHTML= ''
    } else {
        confirmPassElem.classList.add("incorrect-input");
        confirmPassElem.classList.remove("correct-input");
        confirmPasswordError.classList.replace("no-error","error");
        confirmPasswordError.textContent = "Passwords do not match";
    }
});

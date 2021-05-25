const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('mail')
const password = document.getElementById('password')
const password2 = document.getElementById('cpassword')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
})

function checkInputs() {
    //get values from the inputs
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue= password.value.trim();
    const password2Value = password2.value.trim();

    if (usernameValue === '') {
        setErrorFor(username, 'username cannot be blank');
    } else {
        setSuccessFor(username);
    }

    if (emailValue === '') {
        setErrorFor(email, 'email cannot be empty');
    }
    else if (!isEmail(emailValue)) {
        setErrorFor(email, 'invalid email');
    }
    else {
        setSuccessFor(email);
    }

    if (passwordValue === '') {
        setErrorFor(password, 'password cannot be empty')
    } else {
        setSuccessFor(password);
    }

    if (password2Value === '') {
        setErrorFor(password2, 'password cannot be empty')
    } else if (passwordValue !== password2Value) {
        setErrorFor(password2,'password and confirm password must be same')
    }
    else {
        setSuccessFor(password2);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement; //form-control
    const small = formControl.querySelector('small');
    //add msg to small
    small.innerText = message;
    //add error class to form-control
    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement; //.form-control;
    //add succes class to form-control
    formControl.className = 'form-control success';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
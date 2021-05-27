function validate() { /* function to validate */
    valid = true;

    var regName = /^[a-zA-Z]+ [a-zA-Z]+$/; /* regular expression */
    var name = document.getElementById('name').value;
    if (!regName.test(name)) {
        alert('Please enter your full name (first & last name).');
        document.getElementById('name').focus(); /* give focus to text box */
        valid = false; 
    }

    var regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var email = document.getElementById('email').value;
    if (!regEmail.test(email)) {
        alert('Please enter a valid email address.');
        document.getElementById('email').focus();
        valid = false;
    }

    var regPass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    var password = document.getElementById('password').value;
    if (!regPass.test(password)) {
        alert('Please enter a password of 8 characters or more, with at least 1 letter and 1 number.');
        document.getElementById('password').focus();
        valid = false;
    }
    
    return valid; /* if valid = false, it wont redirect */
}   
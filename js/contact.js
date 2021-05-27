function validate() { /* function to validate */
    valid = true;

    var regName = /^[a-zA-Z]+ [a-zA-Z]+$/; /* full name regex */
    var name = document.getElementById('name').value;
    if (!regName.test(name)) {
        alert('Please enter your full name (first & last name).');
        document.getElementById('name').focus();
        valid = false;
    }

    var regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; /* email regex */
    var email = document.getElementById('email').value;
    if (!regEmail.test(email)) {
        alert('Please enter a valid email address.');
        document.getElementById('email').focus();
        valid = false;
    }
    
    return valid;
} 
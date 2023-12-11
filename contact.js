
function validateForm() {
    var requiredField = document.forms['contact-form']['required-field'];
    var emailField = document.forms['contact-form']['email'];


    for (var loop = 0; loop < requiredField.length; loop++) {
        if (requiredField[loop].value.trim() === "") {
            alert("Name expected");
            return false;
        }
    }

    if (emailField.value.trim() === "") {
        alert("Email required");
        return false;
    }

    
    return true;

} 


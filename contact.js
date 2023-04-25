/*
 * Handles the Form Error event of the document.
 */
function formHasErrors() {
    let name = document.getElementById("name").value.trim();
    let mobile = document.getElementById("mobile").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    
    document.getElementById("nameError").style.display = "none";
    document.getElementById("mobileError").style.display = "none";
    document.getElementById("emailError").style.display = "none";
    document.getElementById("messageError").style.display = "none";

    let requiredFields = ["name", "mobile", "email", "message"];
	for (let i = 0; i < requiredFields.length; i++) {
		let textField = document.getElementById(requiredFields[i]);
        let textValue = textField.value.trim();
        if (textValue.length == 0) {
			document.getElementById(requiredFields[i] + "Error").style.display = "block";
				textField.focus();
				textField.select();			
		}
		
	}
    let nameRegex = new RegExp(/^[a-zA-Z]{2,}$/);
    if(!nameRegex.test(name))
    {
        document.getElementById("name").focus();
        document.getElementById("nameError").style.display = "block";
        document.getElementById("name").classList.add("inputError");     
        return true;
    }
    else{
        document.getElementById("name").classList.remove("inputError");     
    }

    let regex = new RegExp(/^[0-9]{10}$/);

    if(!regex.test(mobile))
    {
        document.getElementById("mobile").focus();
        document.getElementById("mobileError").style.display = "block";
        document.getElementById("mobile").classList.add("inputError");  
        return true;
    }
    else{
        document.getElementById("mobile").classList.remove("inputError");     
    }

    let emailRegex = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);

    if(!emailRegex.test(email))
    {
        document.getElementById("email").focus();
        document.getElementById("emailError").style.display = "block";
        document.getElementById("email").classList.add("inputError");  
        return true;
    }
    else{
        document.getElementById("email").classList.remove("inputError");     
    }

    if(message == "")
    {
        document.getElementById("message").focus();
        document.getElementById("messageError").style.display = "block";
        document.getElementById("message").classList.add("inputError");  
        return true;
    }
    else{
        document.getElementById("message").classList.remove("inputError");     
    }
    return false;
}


/*
 * Hides all of the error elements.
 */
function hideErrors() {
 
	// Get an array of error elements
	let error = document.getElementsByClassName("error");
    
	// Loop through each element in the error array
	for (let i = 0; i < error.length; i++) {
		// Hide the error element by setting it's display style to "none"
		error[i].style.display = "none";
	}
}

/*
 * Handles the validate form event
 */
function validate(e) {
    if (formHasErrors()) {
		// Prevents the form from submitting
		e.preventDefault();

		// When using onSubmit="validate()" in markup, returning false would prevent
		// the form from submitting
		return false;
	}
	// Hides all error elements on the page

	// When using onSubmit="validate()" in markup, returning true would allow
	// the form to submit
	return true;

}
hideErrors();
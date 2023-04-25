
function saveContact() {
    let name = document.getElementById("name").value;
    let mobile = document.getElementById("mobile").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    
    document.getElementById("nameError").style.display = "none";
    document.getElementById("mobileError").style.display = "none";
    document.getElementById("emailError").style.display = "none";
    document.getElementById("messageError").style.display = "none";

    if(name == "")
    {
        document.getElementById("nameError").style.display = "block";
    }

    if(mobile == "")
    {
        document.getElementById("mobileError").style.display = "block";
    }

    if(email == "")
    {
        document.getElementById("emailError").style.display = "block";
    }

    if(message == "")
    {
        document.getElementById("messageError").style.display = "block";
    }

}
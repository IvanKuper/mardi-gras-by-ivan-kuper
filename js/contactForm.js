function contactClick(event) {
    event.preventDefault();
    var firstName = document.querySelector(".firstName").value;
    var lastName = document.querySelector(".lastName").value;
    var email = document.getElementById("floatingEmail").value;

    if (firstName.length < 2) {
        alert("Your first name is too short, please try again.");
    } else if (lastName.length < 2) {
        alert("Your last name is too short, please try again.");
    } else if (email.indexOf("@") == -1 || email.indexOf(".") == -1) {
        alert("Please enter a valid email.");
    } else {
        alert("Thanks! This is a demo form, so the message is not sent anywhere.");
    }
}
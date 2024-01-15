
function validateForm(event) {
    event.preventDefault();

    var email = document.forms["signupForm"]["email"].value;
    var password = document.forms["signupForm"]["password"].value;
    var confirmPassword = document.forms["signupForm"]["confirmPassword"].value;
    var termsCheckbox = document.forms["signupForm"]["termsCheckbox"].checked;

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Invalid email format. Please enter a valid email address.");
        return;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match. Please enter matching passwords.");
        return;
    }

    if (!termsCheckbox) {
        alert("Please agree to the terms of services.");
        return;
    }

    var storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    var existingUser = storedUsers.find(u => u.email === email);

    if (existingUser) {
        alert("This email is already registered. Please use a different email.");
    } else {
        var newUser = {
            email: email,
            password: password
        };

        storedUsers.push(newUser);

        localStorage.setItem("users", JSON.stringify(storedUsers));

        alert("Registration successful! You can now sign in.");

        window.location.href = "sign in.html";
    }
}

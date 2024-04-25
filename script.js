$(document).ready(function() {
    // Sign In Form Validation
    $("#signin-form").submit(function(event) {
        event.preventDefault();
        var username = $("#signin-username").val();
        var password = $("#signin-password").val();

        if (username.trim() === "") {
            alert("Username cannot be empty.");
            return;
        }

        if (password.trim() === "") {
            alert("Password cannot be empty.");
            return;
        }

        // Perform sign in process
        // Example: You can send an AJAX request to your backend
    });

    // Sign Up Form Validation
    $("#signup-form").submit(function(event) {
        event.preventDefault();
        var username = $("#signup-username").val();
        var email = $("#signup-email").val();
        var password = $("#signup-password").val();

        if (username.trim() === "") {
            alert("Username cannot be empty.");
            return;
        }

        if (email.trim() === "" || !isValidEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (password.trim() === "" || !isValidPassword(password)) {
            alert("Password must contain special and numeric characters.");
            return;
        }

        // Perform sign up process
        // Example: You can send an AJAX request to your backend
    });

    // Email Validation Function
    function isValidEmail(email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Password Validation Function
    function isValidPassword(password) {
        // Add your password validation logic here
        // Example: Password must contain special and numeric characters
        var passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
        return passwordRegex.test(password);
    }
});

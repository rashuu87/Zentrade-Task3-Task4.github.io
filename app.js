                function validatePassword() {
            var password = document.getElementById("password").value;
            var specialCharacters = /[!@#$%^&*(),.?":{}|<>]/;
            var uppercaseLetters = /[A-Z]/;
            var numbers = /[0-9]/;
            
            if (password === "SmartServTest@123") {
                window.location.href = "dashboard.html"; 
                return false;
            }
            if (password.length < 8) {
                alert("Password must be at least 8 characters long.");
                return false;
            }
            if (!uppercaseLetters.test(password)) {
                alert("Password must contain at least one uppercase letter.");
                return false;
            }
            if (!numbers.test(password)) {
                alert("Password must contain at least one number.");
                return false;
            }
            if (specialCharacters.test(password)) {
                alert("Password cannot contain special characters other than @.");
                return false;
            }
            return true;
        }
    
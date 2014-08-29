

        var wrotepass = "false"; // Flag to show if the password has changed.
        var initialpw; // Set the first time updateWrotePass is called
        $(document).ready(function (event) {
            $('#loginform').submit(function (ev) {
                ev.preventDefault(); // to stop the form from submitting

                // Check if the password has changed
                if (wrotepass == "true") {
                    // Submit the form
                    $('#loginform').attr('action', 'Login');
                    $('#loginform').append("<input type=\"hidden\" name=\"usedPassManager\" value=\"false\">");
                    this.submit();
                }
                    // Password has not changed
                else {
                    // Record a new input to submit to the server
                    $('#loginform').append("<input type=\"hidden\" name=\"warningShown\" value=\"true\">");
                    // Show the warning message
                    alert("Do not use a password manager to save your password. Type it in manually and remove it" +
                            " from your password manager.");
                }
            });
        });

        // Function that detects if the password was changed.
        // This function is called on a keypress event on the password input field.
        function updateWrotePass() {
            // Check if the initialpw has been defined, if not, define initialpw
            if ((typeof (initialpw) === "undefined")) {
                initialpw = $('#Password').val();
            }

            // If the password has not been changed, check to see if it has changed
            if (wrotepass === 'false') {
                if (!(initialpw === $('#Password').val())) {
                    // The password has changed, update the flag to true
                    wrotepass = 'true';
                }
            }
        }



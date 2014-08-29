
// Put the form in the spot
function submitForm() {

    // Obtains the values fomr the input boxes 
    var username = $("#UserName").val();
    var password = $("#Password").val();
    var requestVer = $("input[name=__RequestVerificationToken]").val();

    // This forms the post data into the correct format. Notice that it is URI encoded
    var postdata = "UserName=" + encodeURIComponent(username) + 
                    "&Password=" + encodeURIComponent(password) +
                    "&__RequestVerificationToken=" + encodeURIComponent(requestVer);

    // This is the asynchronous message being sent along with the content.
    $.ajax({
        type: "POST",
        url: "/Account/Login",
        data: postdata
    }).done(function (msg) {
        // Authentication Success, this would most likely be a redirect, here it just 
        // Fills out the response which contains the authenticated information.
        document.open();
        document.write(msg);
        document.close();
    });
}
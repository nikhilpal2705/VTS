(function () {
	'use strict'	
	// Fetch all the forms we want to apply custom Bootstrap validation styles to
	var forms = document.querySelectorAll('.needs-validation')

	// Loop over them and prevent submission
	Array.prototype.slice.call(forms)
		.forEach(function (form) {
			form.addEventListener('submit', function (event) {
				if (!form.checkValidity()) {
					event.preventDefault()
					event.stopPropagation()
				}
			form.classList.add('was-validated')
			}, false)
		})
})()

function login() {
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;

	if (email == "nikhil@gmail.com" && password == "12345678") {
    	//The user has successfully authenticated. We need to store this information for the next page.
        sessionStorage.setItem("AuthenticationState", "Authenticated");
		sessionStorage.setItem("StoreEmail", "email");
                
        //Push the user over to the next page.
		window.location.assign("dashboard.html");
    }  
	else if(email != "" && password != "") {
		alert("Invalid information");
	}

}
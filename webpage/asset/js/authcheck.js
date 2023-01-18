//Is the user authenticated?
if (sessionStorage.getItem('AuthenticationState') === null) {
    window.location.assign("index.html");
 }
 else {
   //The user is authenticated and the authentication has not expired.
 }

function logout() {
	sessionStorage.clear();
	window.location.assign("index.html");
}
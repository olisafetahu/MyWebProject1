document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var fullName = document.querySelector('input[name="fullName"]').value;
    var username = document.querySelector('input[name="username"]').value;
    var email = document.querySelector('input[name="email"]').value;
    var phoneNumber = document.querySelector('input[name="phoneNumber"]').value;
    var password = document.querySelector('input[name="password"]').value;
    var confirmPassword = document.querySelector('input[name="confirmPassword"]').value;
    var errorMessage = document.getElementById('errorMessage');

    if (!fullName || !username || !email || !phoneNumber || !password || !confirmPassword) {
        errorMessage.textContent = 'Please fill in all fields.';
        errorMessage.style.display = 'block';
    } else if (password !== confirmPassword) {
        errorMessage.textContent = 'Passwords do not match.';
        errorMessage.style.display = 'block';
    } else {
        errorMessage.style.display = 'none';
        document.getElementById('registrationForm').submit();
    }
});

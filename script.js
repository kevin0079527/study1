document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const messageDiv = document.getElementById('message');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // 阻止表单的默认提交行为

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        const userData = {
            username: username,
            password: password
        };

        fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            messageDiv.textContent = data.message;
            if (data.message === 'Login successful') {
                messageDiv.style.color = 'green';
            } else {
                messageDiv.style.color = 'red';
            }
        })
        .catch(error => {
            console.error('Error:', error);
            messageDiv.textContent = 'Login failed: ' + error.message;
            messageDiv.style.color = 'red';
        });
    });
});

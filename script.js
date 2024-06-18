document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // 这里可以添加验证逻辑，然后发送请求到后端进行登录验证
    console.log('Username:', username);
    console.log('Password:', password);
    
    // 假设登录成功，可以在这里添加跳转逻辑
    alert('Login Successful!');
});
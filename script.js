document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // 获取用户输入
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // 基本的输入验证
    if (!username || !password) {
        document.getElementById('message').textContent = 'Username and password cannot be empty!';
        return; // 阻止表单提交
    }

    // 发送异步请求到后端服务器
    fetch('/login', { // 替换为后端登录接口的实际URL
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: username, password: password })
    })
    .then(response => response.json()) // 解析JSON响应
    .then(data => {
        if (data.success) {
            // 登录成功，页面跳转
            window.location.href = '/home'; // 替换为登录成功后要跳转的页面URL
        } else {
            // 登录失败，显示错误消息
            document.getElementById('message').textContent = data.message;
        }
    })
    .catch(error => {
        // 网络或其他错误
        document.getElementById('message').textContent = 'An error occurred. Please try again.';
        console.error('Error:', error);
    });
});

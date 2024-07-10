document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // 简单的前端验证
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    if(username === '' || password === '') {
        alert("Username and password cannot be empty.");
        return;
    }
    
    // 如果验证通过，发送请求到后端
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/login', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    
    xhr.onload = function() {
        if (xhr.status === 200) {
            alert('Login successful!');
            // 通常会在这里处理登录后跳转或显示消息等
        } else {
            alert('Login failed: ' + xhr.responseText);
        }
    };
    
    xhr.send(JSON.stringify({
        username: username,
        password: password
    }));
});
document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const logoutButton = document.getElementById('logout');

    // معالجة نموذج التسجيل
    if (signupForm) {
        signupForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('signupEmail').value;
            const password = document.getElementById('signupPassword').value;

            const storedEmail = localStorage.getItem('email');
            if (email === storedEmail) {
                document.getElementById('signupError').textContent = 'This email is already registered.';
            } else {
                localStorage.setItem('name', name);
                localStorage.setItem('email', email);
                localStorage.setItem('password', password);
                alert('User registered successfully');
                window.location.href = 'login.html';
            }
        });
    }

    // معالجة نموذج تسجيل الدخول
    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const storedEmail = localStorage.getItem('email');
            const storedPassword = localStorage.getItem('password');
            const storedName = localStorage.getItem('name');

            if (email === storedEmail && password === storedPassword) {
                window.location.href = `welcome.html?name=${storedName}`;
            } else {
                document.getElementById('loginError').textContent = 'Invalid email or password';
            }
        });
    }

    // عرض رسالة الترحيب إذا كان الاسم موجوداً في URL
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');
    const welcomeMessage = document.getElementById('welcomeMessage');
    if (name && welcomeMessage) {
        welcomeMessage.textContent = `Hi, ${name}`;
    }

    // التحقق من وجود زر تسجيل الخروج
    if (logoutButton) {
        logoutButton.addEventListener('click', function () {
            window.location.href = 'index.html';
        });
    }
});

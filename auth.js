// ذخیره اطلاعات ثبت‌نام
document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;

    if (localStorage.getItem(username)) {
        alert("این نام کاربری قبلاً ثبت شده است!");
    } else {
        localStorage.setItem(username, password);
        alert("ثبت‌نام با موفقیت انجام شد!");
        document.getElementById('registerForm').reset();
    }
});

// ورود به سیستم
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    const storedPassword = localStorage.getItem(username);

    if (storedPassword && storedPassword === password) {
        alert("ورود موفقیت‌آمیز!");
        window.location.href = "game.html"; // انتقال به صفحه بازی
    } else {
        alert("نام کاربری یا رمز عبور اشتباه است!");
    }
});

$(document).ready(function() {
    const mailInput = document.getElementById('email-input')
    const passInput = document.getElementById('pass-input')
    const loginBtn = document.getElementById('login-btn')
    

    fetch("../json/users.json")
    .then(response => response.json())
    .then(loginArray => {
        let user = JSON.parse(localStorage.getItem('user')) || []

        loginArray.forEach(item => {
            loginBtn.addEventListener('click', e => {
                if (mailInput.value === item.email && passInput.value === item.password) {
                    user.push(loginArray)
                    localStorage.setItem('user', JSON.stringify(user))
                    window.location.href = "pages/admin/dashboard.html#"
                } else if (mailInput.value === '') {
                    alert('Press Email to login')
                } else if (passInput.value === '') {
                    alert('Press Password to login')
                }
            })
        });

        if(user) {
            window.location.href = "pages/admin/dashboard.html#"
        } else {
            window.location.href = "admin.html"
        }
    })
})
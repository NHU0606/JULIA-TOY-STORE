$(document).ready(function() {
    const mailInput = document.getElementById('email-input')
    const passInput = document.getElementById('pass-input')
    const loginBtn = document.getElementById('login-btn')
    

    fetch("../json/users.json")
    .then(response => response.json())
    .then(newViralArray => {
        newViralArray.forEach(item => {
            loginBtn.addEventListener('click', e => {
                if (mailInput.value === item.email && passInput.value === item.password) {
                    window.location.href = "#"
                } else if (mailInput.value === '') {
                    alert('Press Email to login')
                } else if (passInput.value === '') {
                    alert('Press Password to login')
                }
            })
        });
    })
})
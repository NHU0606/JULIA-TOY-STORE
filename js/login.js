$(document).ready(function() {
    const mailInput = document.getElementById('email-input')
    const passInput = document.getElementById('pass-input')
    const loginBtn = document.getElementById('login-btn')
    

    fetch("../json/users.json")
    .then(response => response.json())
    .then(loginArray => {

        loginArray.forEach(item => {
            loginBtn.addEventListener('click', e => {
                if (mailInput.value === item.email && passInput.value === item.password) {
                    localStorage.setItem('currentUser', JSON.stringify(storeUser(item)))
                    window.location.reload();
                } else if (mailInput.value === '') {
                    alert('Press Email to login')
                } else if (passInput.value === '') {
                    alert('Press Password to login')
                }
            })
        });        
    })

    function storeUser(user) {
        let _user = {}
        _user['email'] = user.mail;
        _user['id'] = user.id;
        _user['role'] = user.role;
        _user['name'] = user.name;
        return _user;
    }
})
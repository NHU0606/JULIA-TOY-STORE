$(document).ready(function() {
    const mailInput = document.getElementById('email-input').value
    const passInput = document.getElementById('pass-input').value
    const loginBtn = document.getElementById('login-btn')

    console.log(mailInput)

    // fetch("../json/users.json")
    // .then(respone => respone.json())
    // .then(userJson => {
    //     userJson.forEach(user => {
    //         loginBtn.addEventListener('click', e =>{
    //             if(mailInput === userJson.email && passInput === userJson.password) {
    //                 alert(1233333333)
    //             }
    //             else {
    //                 alert(4444444)
    //             }
    //         })
    //     });
    //     
    // })
})
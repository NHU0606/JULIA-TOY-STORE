$(document).ready(function () {
  const name = document.querySelector("#identify-form-name");
  const phone = document.querySelector("#identify-form-phone");
  const message = document.querySelector("#identify-form-message");
  const btnSend = document.getElementById("identify-btn-send");
  const timeLine = document.querySelector(".timeline-line")
  const circle = document.querySelector(".circle-check")
// let userInfor = 
//   let identify = JSON.parse(localStorage.getItem("identify")) || [];

  btnSend.addEventListener("click", (e) => {
    // identify.push()

    if (name.value === "" && phone.value === "" && message.value === "") {
      alert(`U have to press Name + Phone + Address u wanna send`);
    } else if (name.value === "") {
      alert(`Maybe u forget about Your Name`);
    } else if (phone.value === "") {
      alert(`Maybe u forget about Your Phone`);
    } else if (message.value === "") {
      alert(`Maybe u forget about Your Address`);
    } 
    else {
      circle.classList.add("circle-check-active")
      timeLine.classList.add("timeline-line-done")
      $(".content").load(`pages/cart/payment.html`)
    }
  });
});

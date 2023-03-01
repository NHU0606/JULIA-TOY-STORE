$(document).ready(function () {
  const name = document.querySelector("#identify-form-name");
  const phone = document.querySelector("#identify-form-phone");
  const address = document.querySelector("#identify-form-address");
  const btnSend = document.getElementById("identify-btn-send");
  const timeLine = document.querySelector(".timeline-line");
  const circle = document.getElementsByClassName("circle-check");

  circle[1].classList.add("circle-check-active");

  btnSend.addEventListener("click", (e) => {
    if (name.value === "" && phone.value === "" && address.value === "") {
      alert(`U have to press Name + Phone + Address u wanna send`);
    } else if (name.value === "") {
      alert(`Maybe u forget about Your Name`);
    } else if (phone.value === "") {
      alert(`Maybe u forget about Your Phone`);
    } else if (address.value === "") {
      alert(`Maybe u forget about Your Address`);
    } else if (address.value && name.value && phone.value) {
      const inforUser = {
        name: name.value,
        phone: phone.value,
        address: address.value,
      };

      window.localStorage.setItem("inforUser", JSON.stringify(inforUser));

      timeLine.classList.add("timeline-line-done");
      $(".content").load(`pages/cart/payment.html`);
    }
  });
});

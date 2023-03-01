$(document).ready(function () {
  const circle = document.getElementsByClassName("circle-check");
  circle[2].classList.add("circle-check-active");

  let nameUser = document.getElementById("confirm-user-name");
  let phoneUser = document.getElementById("confirm-user-phone");
  let addressUser = document.getElementById("confirm-user-address");

  let inforUser = JSON.parse(localStorage.getItem("inforUser"));
  // console.log(inforUser["name"])
  nameUser.innerHTML = "Name: " + inforUser["name"];
  phoneUser.innerHTML = "Phone number: " + inforUser["phone"];
  addressUser.innerHTML = "Address: " + inforUser["address"];

  // payment cost + product
  let inforProduct = JSON.parse(localStorage.getItem("inforProduct"));

  let totalProducts = document.getElementById("total-product-number");
  let totalCost = document.getElementById("total-total-number");

  totalProducts.innerHTML = inforProduct["totalpro"] + " Products";
  totalCost.innerHTML = inforProduct["totalcost"];
});

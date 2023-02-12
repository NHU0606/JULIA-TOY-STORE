$(document).ready(function () {
  $("#header").load(`pages/layout/header.html`);

  let pathName = window.location.search;
  let check = pathName.includes("?id=");
  let checkCart = pathName.includes("?cart");

  if (check) {
    $("#content").load(`pages/detail.html`);
  } else if (!checkCart) {
    $("#menu").load(`pages/layout/menu.html`);
    $("#content").load(`pages/newViral.html`);
  }

  if (checkCart) {
    $("#content").load(`pages/cart.html`);
  }

  $("#footer").load(`pages/layout/footer.html`);
});

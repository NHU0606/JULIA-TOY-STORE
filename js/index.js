$(document).ready(function() {
  $("#header").load(`pages/layout/header.html`);

  let pathName = window.location.search;
  let check = pathName.includes("?id=")
  let cart = pathName.includes("?cart")


  if(check) {
    $("#content").load(`pages/detail.html`);  
  }
  else if (!cart) {
    $("#menu").load(`pages/layout/menu.html`)
    $("#content").load(`pages/newViral.html`);  
  }
  
  if (cart) {
    $("#content").load(`pages/cart.html`);  
  }

  $("#footer").load(`pages/layout/footer.html`);
});
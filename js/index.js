$(document).ready(function() {
  $("#header").load(`pages/layout/header.html`);

  // this line for laptop
  $("#menu").load(`pages/layout/menu.html`)

  // this line for < ipad 
  // $('#menu').load(`pages/layout/menu_mobile.html`)
  
  $("#content").load(`pages/newViral.html`);  

  $("#footer").load(`pages/layout/footer.html`);
});
$(document).ready(function() {
  $("#header").load(`pages/layout/header.html`);

  let pathName = window.location.search;
  let check = pathName.includes("?id=")

  if(check) {
    $("#content").load(`pages/detail.html`);  
  }
  else {
    $("#menu").load(`pages/layout/menu.html`)
    $("#content").load(`pages/newViral.html`);  
  }

  $("#footer").load(`pages/layout/footer.html`);
});
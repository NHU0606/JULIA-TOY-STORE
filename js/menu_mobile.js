$(document).ready(function() {
  let pathName = window.location.search;
  let check = pathName.includes("?id=");
  
  if (!check) {
    $("#menu-mobile").load(`pages/layout/menu_mobile.html`);
  }
})
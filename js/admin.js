$(document).ready(function() {
    let currentUser = JSON.parse(localStorage.getItem('currentUser')) || undefined;
    if (currentUser) {
      $("#menu").load(`pages/admin/layout/menuDashBoard.html`)
      $("#body").load(`pages/admin/layout/dashboard.html`);  
    } else {
      $("#body").load(`pages/admin/login.html`);  
    }
  });
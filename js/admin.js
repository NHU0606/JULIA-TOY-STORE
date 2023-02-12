$(document).ready(function() {
    let currentUser = JSON.parse(localStorage.getItem('currentUser')) || undefined;
    if (currentUser) {
      $("#body").load(`pages/admin/dashboard.html`);  
    } else {
      $("#body").load(`pages/admin/login.html`);  
    }
  });
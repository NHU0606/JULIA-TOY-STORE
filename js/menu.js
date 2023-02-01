// we gonna change the content about list item for kind of product: slide of page indexedDB.html, teddy, doll, nothing 


$(document).ready(function () {
  // this line for slider appear
  $("#sub-content").load(`pages/layout/slider.html`);

  const items = document.querySelectorAll('.category-item')
  const contentEl = document.getElementById('content');

  items.forEach(item => {
    let checkSlug = '';
    item.onclick = function (e) {
      checkSlug = item.getAttribute('data-slug');
      removeActive(checkSlug)
      loadData(checkSlug);
      contentEl.style.display = 'none';
    }
  });

  function removeActive(checkSlug) {
    items.forEach(item => {
      if (item.getAttribute("data-slug") === checkSlug) {
        item.classList.add('category-item--active')
      } else {
        item.classList.remove('category-item--active')
      }
    })
  }

  function loadData(checkSlug) {
    switch (checkSlug) {
      case 'dolls': 
        $("#sub-content").load(`pages/doll.html`);
        break;
      case 'teddy': 
        $("#sub-content").load(`pages/teddy.html`);
        break;
      default: 
        $("#sub-content").load(`pages/layout/slider.html`);
    }
     
  }

})

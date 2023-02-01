// we gonna change the content about list item for kind of product: slide of page indexedDB.html, teddy, doll, nothing 


$(document).ready(function () {
  // this line for slider appear
  $("#sub-content").load(`pages/layout/slider.html`);

  // for teddy
  //   $("#sub-content").load(`pages/teddy.html`);

  // for list doll appear
  // $("#sub-content").load(`pages/doll.html`);

  //for no products
  // $("#sub-content").load(`pages/oop_noProduct.html`);


  const items = document.querySelectorAll('.category-item')

  items.forEach(item => {
    let checkSlug = '';
    item.onclick = function (e) {
      checkSlug = item.getAttribute('data-slug');
      removeActive(checkSlug)
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

})

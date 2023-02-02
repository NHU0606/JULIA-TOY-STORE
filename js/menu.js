// we gonna change the content about list item for kind of product: slide of page indexedDB.html, teddy, doll, nothing 


$(document).ready(function () {
  // this line for slider appear
  $("#sub-content").load(`pages/layout/slider.html`);
  const menuList = document.getElementById("menu-list");

  // Start Get menu list from json
  fetch("../json/menu.json").then(function (response) {
    return response.json();
  }).then(function (menuListJson) {
    let htmlMenuList = '';
    menuListJson.forEach((menu) => {
      htmlMenuList += ` 
        <li class="category-item" data-slug="${menu.slug}">
          <a  href="#" class="category-item__link">${menu.text}</a>
        </li>
      `
    })
    menuList.innerHTML = htmlMenuList;

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
      let path = `pages/${checkSlug}.html`;
      if (checkFileExists(path)) {
        $("#sub-content").load(path);
      } else {
        alert(`Please create ${checkSlug}.html in pages/${checkSlug}.html`)
      }
    }

    function checkFileExists(url) {
      let http = new XMLHttpRequest();
      http.open('HEAD', url, false);
      http.send();
      if (http.status === 200) {
        return true;
      }
      return false;
    }
  })
  // End Get menu list from json
})

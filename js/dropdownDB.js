$(document).ready(function () {
  const dropdowns = document.querySelectorAll(".dropdown");
  const menuDDown = document.querySelector(".menu");

  fetch("../json/menu.json")
    .then((respone) => respone.json())
    .then((menuJson) => {
      // innerHTML menu Dropdown
      let htmlMenuJson = "";
      menuJson.forEach((menu) => {
        htmlMenuJson += `
                <li class="product-dasboard-item" data-slug="${menu.slug}">${menu.text}</li>
            `;
      });
      menuDDown.innerHTML = htmlMenuJson;

      // click to choose and active item in menu dropdown
      dropdowns.forEach((dropdown) => {
        const selectProduct = dropdown.querySelector(
          ".dashboard-products-select"
        );
        const caret = dropdown.querySelector(".caret");

        const menu = dropdown.querySelector(".menu");

        const options = dropdown.querySelectorAll(".menu li");
        const itemProSelected = dropdown.querySelector(
          ".dashboard-products-item-selected"
        );

        selectProduct.addEventListener("click", () => {
          selectProduct.classList.toggle("select-clicked");
          caret.classList.toggle("caret-rotate");
          menu.classList.toggle("menu-open");
        });

        options.forEach((option) => {
          option.addEventListener("click", () => {
            itemProSelected.innerText = option.innerText;
            selectProduct.classList.remove("select-clicked");
            caret.classList.remove("caret-rotate");
            menu.classList.remove("menu-open");
            options.forEach((option) => {
              option.classList.remove("product-dasboard-item-active");
            });
            option.classList.add("product-dasboard-item-active");
          });
        });
      });

      // check slug to convert

      const itemsMenuDDown = document.querySelectorAll(
        ".product-dasboard-item"
      );

      itemsMenuDDown.forEach((item) => {
        let checkSlug = "";
        item.onclick = function () {
          checkSlug = item.getAttribute("data-slug");
          loadData(checkSlug);
        };
      });

      function loadData(checkSlug) {
        let path = `pages/${checkSlug}.html`;
        if (checkFileExists(path)) {
          $("#dashboard-products-list-item").load(path);
        } else {
          alert(
            `U have to create file ${checkSlug}.html in pages/${checkSlug}.html`
          );
        }
      }

      function checkFileExists(url) {
        let http = new XMLHttpRequest();
        http.open("HEAD", url, false);
        http.send();
        if (http.status === 200) {
          return true;
        }
        return false;
      }

      // inner list products
      const listProduct = document.getElementById(
        "dashboard-products-list-item"
      );

      fetch("../json/product.json")
        .then((respone) => respone.json())
        .then((listItemJson) => {
          let htmlListItem = "";
          listItemJson.forEach((listItem) => {
            htmlListItem += `
            <div id="dashboard-product-item" class="col l-3 m-6 c-6 newviral--item">
            <a class="home-product-item" href="#">
              <div
                class="home-product-item__img"
                style="
                  background-image: url('${listItem.image}');
                "
              ></div>
              <h4 class="home-product-item__name">${listItem.name}</h4>
              <div class="home-product-item__price">
                <span class="home-product-item__price-old">${listItem.old_cost}</span>
                <span class="home-product-item__price-current">${listItem.new_cost}</span>
              </div>
              <div class="home-product-item___sale-off">
                <span class="home-product-item___available-precent">${listItem.category.available}</span>
                <span class="home-product-item___available-label">AVAILABLE</span>
              </div>
              <div class="delete-form-icon">
                <i class="fa-solid fa-circle-xmark delete-form-icon"></i>
              </div>
            </a>
          </div>
            `;
          });

          listProduct.innerHTML = htmlListItem;
        });
    });
});

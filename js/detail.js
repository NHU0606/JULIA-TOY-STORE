
$(document).ready(function () {
  const image = document.getElementById("prod-image");
  const name = document.getElementById("prod-name");
  const cost = document.getElementById("prod-cost");
  let pathName = window.location.search;
  let id = pathName.replace(/^\D+/g, '');
  fetch("../json/products.json").then(function (response) {
    return response.json();
  }).then(function (viralJson) {
    let detail = viralJson.filter((e) => e.id === parseInt(id))[0]
    image.setAttribute("src", detail.image);
    name.innerHTML = detail.name;
    // name, cost. Beside add description to products.json

    let carts = JSON.parse(localStorage.getItem("carts")) || [];
    let cartBtn = document.getElementById("add-to-cart");
    let countCart = document.getElementById("count-cart");
    let listCart = document.getElementById("list-cart");

    showCartList();

    cartBtn.addEventListener("click", function (e) {
      carts.push(detail)
      localStorage.setItem("carts", JSON.stringify(carts));
      showCartList();
    })


    // -------------------------- Function -------------------
    function showCartList() {
      countCart.textContent = carts.length;
      let listCartHTML = '';
      carts.forEach(element => {
        listCartHTML += `
          <li class="header__cart-item">
            <img class="header__cart-img"
              src="${element.image}" alt="">
            <div class="header__cart-item-infor">
              <div class="header__cart-item-head">
                <h5 class="header__cart-item-head-name">${element.name}</h5>
                <div class="header__cart-item-price-wrap">
                  <span class="header__cart-item-price">${element.new_cost}</span>
                </div>
              </div>
              <div class="header__cart-item-body">
                <span class="header__cart-item-description">
                  Type of: ${element.category.text}
                </span>
                <a href="?cart&deleteId=${element.id}" class="header__cart-item-remove text-black">Delete</a>
              </div>
            </div>
          </li>
        `
      });
      listCart.innerHTML = listCartHTML;
    }
  })
})

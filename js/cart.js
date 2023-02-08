$(document).ready(function () {
    let carts = JSON.parse(localStorage.getItem("carts")) || [];
    let countCart = document.getElementById("count-cart");
    let listCart = document.getElementById("list-cart");
    let seeCart = document.getElementById("see-cart");
  
    showCartList();
  
    let pathName = window.location.search;
  
    let deleteId = pathName.replace(/^\D+/g, '');
    if (deleteId) {
      setCart();
    }
  
    seeCart.addEventListener('click', function (e) {
      window.location.href = "?cart";
    })
  
    // -------------------------- Function -------------------
    function setCart() {
      let setcarts = carts.filter((e) => e.id !== parseInt(deleteId))
      localStorage.setItem('carts', JSON.stringify(setcarts));
      showCartList();
    }
  
    function showCartList() {
      carts = JSON.parse(localStorage.getItem("carts")) || [];
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
                  <a href="?cart&deleteId=3" class="header__cart-item-remove text-black">Delete</a>
                </div>
              </div>
            </li>
          `
      });
      listCart.innerHTML = listCartHTML;
    }
  })
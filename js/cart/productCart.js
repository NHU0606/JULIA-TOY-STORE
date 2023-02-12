$(document).ready(function () {
  // get product info to show
  const seeCart = document.getElementById("see-cart_list");
  let carts = JSON.parse(localStorage.getItem("carts")) || [];

  // show all products
  let seeCartItem = "";
  carts.forEach((itemCart) => {
    seeCartItem += `
            <li class="cart_item">
                <div class="col l-4 m-6 c-12 cart-item-left" style=" display: flex;">
                    <label for="checkbox1" class="check-product-form">
                        <input id="check-product" type="checkbox" role="checkbox"/>
                    </label>
                    <div class="cart_img-pt">
                        <img class="cart_img" src="${itemCart.image}" alt="" class="cart_img">
                    </div>
                    <div class="cart_name-pt">
                        <h2 class="cart_name">${itemCart.name}</h2>
                    </div>
                </div>
                <div class="col l-8 m-6 c-12 cart-item-rigth" style=" display: flex;">
                    <div class="col l-2 cart_typeOf-pt">
                        <span class="cart_typeOf">${itemCart.category.text}</span>
                    </div>
                    <div class="col l-2 cart_cost-pt">
                        <span class="cart_costNew">${itemCart.new_cost}</span>
                    </div>
                    <div class="col l-2 cart_quanlity-number">
                        <i id="minus-quantity" class="fa-solid fa-minus"></i>      
                        <input type="text" id="product-quanlity-number" class="product-quanlity" value="1">                  
                        <i id="plus-quantity" class="fa-solid fa-plus "></i>
                    </div>
                    <div class="col l-2 cart_totalCost">
                        <span class="cart-totalCost">Total Cost</span>
                    </div>
                    <div class="col l-2 cart_del-pt">
                        <span class="cart_delete">Delete</span>                                                         
                    </div>
                </div>                        
            </li>          
            `;
  });
  seeCart.innerHTML = seeCartItem;

  //   Quantity
  const valueCount = 1;
  const plusQuantity = document.getElementById("plus-quantity");
  const numberQuantity = document.getElementById("product-quanlity-number");
  const minus = document.getElementById("minus-quantity");

  plusQuantity.addEventListener("click", () => {
    let plus = valueCount++;
    console.log("click";)

    numberQuantity.value = plus;
    // numberQuantity = numberQuantity +1;
  });
});

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
                    <label for="checkbox1" class="check-product-form form-group">
                        <input id="check-product" type="checkbox" name="checkbox-name" role="checkbox"/>
                    </label>
                    <div class="cart_img-pt">
                        <img class="cart_img" src="${
                          itemCart.image
                        }" alt="" class="cart_img">
                    </div>
                    <div class="cart_name-pt">
                        <h2 class="cart_name">${itemCart.name}</h2>
                    </div>
                </div>
                <div class="col l-8 m-6 c-12 cart-item-rigth" style=" display: flex;">
                    <div class="col l-2 cart_typeOf-pt">
                        <span class="cart_typeOf">${
                          itemCart.category.text
                        }</span>
                    </div>
                    <div class="col l-2 cart_cost-pt">
                        <span class="cart_costNew">${formatNumber(
                          itemCart.new_cost
                        )}</span>
                    </div>
                    <div class="col l-2 cart_quanlity-number" data-new-cost="${itemCart.new_cost}">    
                        <button class="btn-quantity minus" data-minus="${itemCart.id}">
                            <i id="minus-quantity" class="fa-solid fa-minus"></i>  
                        </button>            
                        <p class="product-quanlity-number">1</p>
                        <button class="btn-quantity plus" data-plus="${itemCart.id}">
                            <i id="plus-quantity" class="fa-solid fa-plus "></i>
                        </button>                 
                    </div>
                    <div class="col l-2 cart_totalCost">
                        <span class="totalCost">${formatNumber(
                          itemCart.new_cost
                        )}</span>
                    </div>
                    <div class="col l-2 cart_del-pt">
                        <span class="cart_delete">Delete</span>                                                         
                    </div>
                </div>                        
            </li>          
            `;

    seeCart.innerHTML = seeCartItem;
});

    //   Quantity

    let valueCount = 1;
    // displayNumber(itemCart);
    $(".minus").click(function(e) {
        if (valueCount === 1) {
          alert(
            `Total quantity must equal 1. Do u wanna delete this??? (Plzz click on Delete button)`
          );
          return;
        }
        valueCount--;
        $(this).siblings(".product-quanlity-number").text(valueCount);
        
        let quanlityNumber = document.querySelector(".product-quanlity-number").innerText;
        $(this).parent().siblings(".cart_quanlity-number").children(".product-quanlity-number").text(quanlityNumber)
        console.log(quanlityNumber)
        


        let cost = $(this).parent().data('new-cost');
        $(this).parent().siblings(".cart_totalCost").children(".totalCost").text(formatNumber(valueCount * cost))
    });

    $(".plus").click(function(e) {          
        // element.text() -> 1
        valueCount++;
        $(this).siblings(".product-quanlity-number").text(valueCount);

        let quanlityNumber = document.querySelector(".product-quanlity-number").innerText;
        $(this).parent().siblings(".cart_quanlity-number").children(".product-quanlity-number").text(quanlityNumber)
        console.log(quanlityNumber)

        let cost = $(this).parent().data('new-cost');
        $(this).parent().siblings(".cart_totalCost").children(".totalCost").text(formatNumber(valueCount * cost))
    });
    
    // format number
    function formatNumber(number) {
      return (
        "$" +
        number.toLocaleString(
          "en-US",
          { minimumFractionDigits: 0 },
          { style: "currency", currency: "USD" }
        )
      );
    }

    // check box choose all
    const selectAll = document.querySelector(
      ".form-group.select-all.check-product-form input"
    );
    const allCheckBox = document.querySelectorAll(
      ".check-product-form.form-group:not(.select-all) input"
    );
    let listBoolean = [];

    allCheckBox.forEach((item) => {
      item.addEventListener("change", (e) => {
        allCheckBox.forEach((i) => {
          listBoolean.push(i.checked);
        });
        if (listBoolean.includes(false)) {
          selectAll.checked = false;
        } else {
          selectAll.checked = true;
        }
        listBoolean = [];
      });
    });
    selectAll.addEventListener("change", (e) => {
      if (selectAll.checked) {
        allCheckBox.forEach((i) => {
          i.checked = true;
        });
      } else {
        allCheckBox.forEach((i) => {
          i.checked = false;
        });
      }
    });
});

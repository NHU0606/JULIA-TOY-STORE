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
                        <input data-checked="false" data-quanlity="1" data-total-cost="${
                          itemCart.new_cost
                        }" class="checkbox" id="check-product" type="checkbox" name="checkbox-name" role="checkbox">
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
                    <div class="col l-2 cart_quanlity-number" data-new-cost="${
                      itemCart.new_cost
                    }">    
                        <button class="btn-quantity minus" data-minus="${
                          itemCart.id
                        }">
                            <i id="minus-quantity" class="fa-solid fa-minus"></i>  
                        </button>            
                        <p class="product-quanlity-number">1</p>
                        <button class="btn-quantity plus" data-plus="${
                          itemCart.id
                        }">
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
  let count = 0;
  let countActive = 0;
  let countCost = 0;
  // displayNumber(itemCart);
  $(".minus").click(function (e) {
    freshQuanlityCost();

    let quanlityNumber = $(this).siblings(".product-quanlity-number").text();

    if (quanlityNumber === "1") {
      alert(
        `Total quantity must equal 1. Do u wanna delete this??? (Plzz click on Delete button)`
      );
      return;
    }
    quanlityNumber--;
    $(this).siblings(".product-quanlity-number").text(quanlityNumber);

    $(this)
      .parent()
      .siblings(".cart_quanlity-number")
      .children(".product-quanlity-number")
      .text(quanlityNumber);

    let cost = $(this).parent().data("new-cost");
    $(this)
      .parent()
      .siblings(".cart_totalCost")
      .children(".totalCost")
      .text(formatNumber(quanlityNumber * cost));
    $(this)
      .parent()
      .parent()
      .siblings(".cart-item-left")
      .children(".check-product-form")
      .children(".checkbox")
      .attr("data-quanlity", quanlityNumber);
    $(this)
      .parent()
      .parent()
      .siblings(".cart-item-left")
      .children(".check-product-form")
      .children(".checkbox")
      .attr("data-total-cost", quanlityNumber * cost);
  });

  $(".plus").click(function (e) {
    let quanlityNumber = $(this).siblings(".product-quanlity-number").text();

    quanlityNumber++;
    $(this).siblings(".product-quanlity-number").text(quanlityNumber);

    $(this)
      .parent()
      .siblings(".cart_quanlity-number")
      .children(".product-quanlity-number")
      .text(quanlityNumber);

    let cost = $(this).parent().data("new-cost");
    $(this)
      .parent()
      .siblings(".cart_totalCost")
      .children(".totalCost")
      .text(formatNumber(quanlityNumber * cost));
    $(this)
      .parent()
      .parent()
      .siblings(".cart-item-left")
      .children(".check-product-form")
      .children(".checkbox")
      .attr("data-quanlity", quanlityNumber);
    $(this)
      .parent()
      .parent()
      .siblings(".cart-item-left")
      .children(".check-product-form")
      .children(".checkbox")
      .attr("data-total-cost", quanlityNumber * cost);
    // i
    $(this)
      .parent()
      .parent()
      .siblings(".cart-item-left")
      .children(".check-product-form")
      .children(".checkbox")
      .attr("data-checked", false);
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

  allCheckBox.forEach((item) => {
    item.addEventListener("change", (e) => {
      freshQuanlityCost(item);

      let quanlityNumber = item.getAttribute("data-quanlity");
      let totalCostNumber = item.getAttribute("data-total-cost");

      if (item.checked) {
        count++;

        countActive += parseInt(quanlityNumber);
        countCost += parseInt(totalCostNumber);
      } else if (!item.checked) {
        count--;
        countActive -= parseInt(quanlityNumber);
        countCost -= parseInt(totalCostNumber);
      }

      if (count === carts.length) {
        selectAll.checked = true;
      } else {
        selectAll.checked = false;
      }
    });
  });

  const buyBtn = document.getElementById("buy-btn");
  const timeLine = document.querySelector(".timeline-line");
  const circle = document.querySelector(".circle-check");

  selectAll.addEventListener("change", (e) => {
    freshQuanlityCost();
    const dataProduct = document.getElementById("footer-total-product");
    const totalPro = dataProduct.getAttribute("data-total-product");
    const dataCost = document.getElementById("footer-total-cost");
    const totalCost = dataCost.getAttribute("data-total-cost");

    const inforProduct = {
      totalcost: totalCost,
      totalpro: totalPro,
    };
    window.localStorage.setItem("inforProduct", JSON.stringify(inforProduct));

    $("#buy-btn").removeAttr("disabled");
    buyBtn.addEventListener("click", () => {
      circle.classList.add("circle-check-active");
      timeLine.classList.add("timeline-line-half");
      $(".content").load(`pages/cart/identify.html`);
    });
  });

  //checkbox choose all

  function freshQuanlityCost() {
    let selectAllQuanlity = 0;
    let selectAllCost = 0;

    if (!selectAll.checked) {
      count = 0;
      allCheckBox.forEach((i) => {
        i.checked = false;
      });
    }
    if (selectAll.checked) {
      allCheckBox.forEach((i) => {
        i.checked = true;
        selectAllQuanlity += parseInt(i.getAttribute("data-quanlity"));
        selectAllCost += parseInt(i.getAttribute("data-total-cost"));
      });
    }

    const sumProduct = document.getElementById("footer-total-product");
    const sumCost = document.getElementById("footer-total-cost");

    sumProduct.setAttribute("data-total-product", selectAllQuanlity);
    sumProduct.innerHTML = selectAllQuanlity + " Products";

    sumCost.setAttribute("data-total-cost", formatNumber(selectAllCost));
    sumCost.innerHTML = formatNumber(selectAllCost);
  }
});

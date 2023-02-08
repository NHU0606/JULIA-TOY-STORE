$(document).ready(function() {
    const seeCart = document.getElementById('see-cart_list')
    let carts = JSON.parse(localStorage.getItem("carts")) || [];

    
        let seeCartItem = ''
        seeCartArr.forEach(itemCart => {
            seeCartItem += `
            <li class="cart_item">
                <div class="col l-6 m-12 c-12 cart-item-left">
                    <div class="cart_img-pt">
                        <img class="cart_img" src="${itemCart.image}" alt="" class="cart_img">
                    </div>
                    <div class="cart_name-pt">
                        <h2 class="cart_name">${itemCart.name}</h2>
                    </div>
                </div>
                <div class="col l-6 m-12 c-12 cart-item-rigth">
                    <div class="col l-2 cart_typeOf-pt">
                        <span class="cart_typeOf">Type of: ${itemCart.category.text}</span>
                    </div>
                    <div class="col l-2 cart_cost-pt">
                        <span class="cart_costNew">${itemCart.new_cost}</span>
                    </div>
                    <div class="col l-2 cart_del-pt">
                        <span class="cart_delete">Delete</span>                                                         
                    </div>
                </div>                        
            </li>          
            `
        });
        seeCart.innerHTML = seeCartItem
    
})
$(document).ready(function() {
    let carts = JSON.parse(localStorage.getItem('carts')) || []
    let countCart = document.getElementById('count-cart')
    let listCart = document.getElementById('list-card')

    showCartList()
        
    let pathName = window.location.search    
    let  deleteId = pathName.replace(/^\D+/g, '')

    if(deleteId) {
        setCart()
    }

    function setCart() {

        let setCarts = carts.filter(e => e.id !== parseInt(deleteId))
        localStorage.setItem('carts', JSON.stringify(setCarts))
        showCartList()
    }

    function showCartList() {
        carts = JSON.parse(localStorage.getItem('carts')) || []
        countCart.textContent = carts.length
        let listCartHtml = ''

        carts.forEach(itemCart => {
            listCartHtml += `
            <li class="header__cart-item">
            <img class="header__cart-img" src="${itemCart.image}" alt="">
            <div class="header__cart-item-infor">
                <div class="header__cart-item-head">
                    <h5 class="header__cart-item-head-name">${itemCart.name}</h5>
                    <div class="header__cart-item-price-wrap">
                        <span class="header__cart-item-price">${itemCart.new_cost}</span>
                    </div>
                </div>

                <div class="header__cart-item-body">
                    <span class="header__cart-item-description">
                        Type of: ${itemCart.category.text}
                    </span>
                        <a href="?cart&deleteId=3" class="header__cart-item-remove">Delete</a>
                 </div>
            </div>
        </li>
            `
        })
        listCart.innerHTML = listCartHtml
    }
    
   
    
})
$(document).ready(function() {
    const productName = document.getElementById('product-name')
    const productImg = document.getElementById('product-img')
    const productCost = document.getElementById('product-cost')
    const productCostOld = document.getElementById('product-costOld')
    const productDesTitle = document.getElementById('product-des-title')
    const productDesSub = document.getElementById('product-des-sub') 
    
    
    const pathName = window.location.search
    var id = pathName.replace(/^\D+/g, '')
    fetch("../json/product.json")
    .then(response =>response.json())
    .then(detailArray => {
        let detailItem = detailArray.filter(e => e.id === parseInt(id))[0]
        productImg.setAttribute("src", detailItem.image)        
        productName.innerHTML = detailItem.name
        productCostOld.innerHTML = detailItem.old_cost
        productCost.innerHTML = detailItem.new_cost
        productDesTitle.innerHTML = detailItem.desTitle 
        productDesSub.innerHTML = detailItem.desSub 
    

        let carts = JSON.parse(localStorage.getItem('carts')) || []
        let cartBtn = document.getElementById('add-to-cart')
        let countCart = document.getElementById('count-cart')
        let listCart = document.getElementById('list-card')
        let seeCart = document.getElementById('see-cart')

        showCartList()
        
        cartBtn.addEventListener('click', e => {
            carts.push(detailItem)
            localStorage.setItem('carts', JSON.stringify(carts))
            showCartList()
        })
            
        seeCart.addEventListener('click', e => {
            window.location.href = '?cart'
        })

        function showCartList() {
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
                            <span class="header__cart-item-priceOld">${itemCart.old_cost}</span>
                            <span class="header__cart-item-price">${itemCart.new_cost}</span>
                        </div>
                    </div>

                    <div class="header__cart-item-body">
                        <span class="header__cart-item-description">
                            Type of: ${itemCart.category.text}
                        </span>
                        <span class="header__cart-item-remove">Delete</span>

                    </div>
                </div>
            </li>
                `
            })
            listCart.innerHTML = listCartHtml
        }
    })
})
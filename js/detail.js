$(document).ready(function() {
    const productName = document.getElementById('product-name')
    const productImg = document.getElementById('product-img')
    const productCost = document.getElementById('product-cost')
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
        productCost.innerHTML = detailItem.new_cost
        productDesTitle.innerHTML = detailItem.desTitle 
        productDesSub.innerHTML = detailItem.desSub 
    })
})
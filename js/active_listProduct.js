const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

$$('.category-item').forEach(item => {
    item.onclick = function() {
        $('.category-item.category-item--active').classList.remove('category-item--active')
        item.classList.add('category-item--active')
    }
});
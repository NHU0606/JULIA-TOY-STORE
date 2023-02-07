$(document).ready(function() {
    let histories = []
    let saveHistory = localStorage.getItem('histories')
    let historyView = document.getElementById('history-form')
    let titleSearch = document.getElementById('title-search')

    if (saveHistory) {
        let arrHis = JSON.parse(saveHistory)
        let itemHisHtml = ''
        arrHis.forEach(e => {
            itemHisHtml += `
            <li class="header__search-history-item">
                <a href="">${e.name}</a>
            </li>
            `
        });
        historyView.innerHTML = itemHisHtml
    }

    let search = document.getElementById('search-product')
    let searchValue = search.value.trim();

    search.addEventListener('keyup', e => {

        if(e) {
            if(searchValue === '') {
                titleSearch.textContent = 'History find'
                return;
            }
            titleSearch.textContent = 'List product'
            histories.push({name: search.value})
            localStorage.setItem('histories', JSON.stringify(histories) )

// appear list product under form search when find some product

            fetch('../json/product.json')
            .then(respone => respone.json())
            .then(resultJson => {
                let resultHtml =''
                let result = resultJson.filter((e) => (e.name.toUpperCase()).includes(searchValue))
                console.log(result)
            })
        }
    })
})
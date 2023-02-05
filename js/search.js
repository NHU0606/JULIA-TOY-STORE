$(document).ready(function() {
    let histories = []
    let search = document.getElementById('search-product')
    let saveHistory = localStorage.getItem('histories')
    let historyView = document.getElementById('history-form')

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

    search.addEventListener('keypress', e => {
        if(e.keyCode === 13) {
            console.log(search.value)
            histories.push({name: search.value})
        }
        localStorage.setItem('histories', JSON.stringify(histories) )
    })
})
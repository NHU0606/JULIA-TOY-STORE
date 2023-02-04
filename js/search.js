$(document).ready(function() {
  let histories = [];
  let historyView = document.getElementById('history');
  let title = document.getElementById('title');

  let saveHistory = localStorage.getItem('histories');
  let arrHistories = JSON.parse(saveHistory);

  loadHistory();

  let search = document.getElementById("search-product")
  
  search.addEventListener("keyup", function(e) {
    let searchValue = search.value.trim();

    if (e) {
      if (searchValue === '') {
        title.textContent = "History Find"
        loadHistory();
        return;
      }
      title.textContent = "List Product"
      histories.push({name: searchValue})
      localStorage.setItem("histories", JSON.stringify(histories));

      loadSearchProducts(searchValue)
    }
  })

  function loadHistory() {
    if (saveHistory) {
      let historyHtml = '';
      arrHistories.forEach((e) => {
        historyHtml += `
          <li class="header__search-history-item history-name">
            <a href="?search=${e.name}">${e.name}</a>
          </li>
        `
      })
      historyView.innerHTML = historyHtml;
    }
  }

  function loadSearchProducts(searchValue) {
    fetch("../json/products.json").then(function (response) {
      return response.json();
    }).then(function (result) {
      let resultHtml = '';
      let _result = result.filter((e) => (e.name.toUpperCase()).includes(searchValue.toUpperCase()))
      if (_result.length > 0) {
        _result.forEach((e) => {
          resultHtml += `
            <li class="header__search-history-item">
              <a href="?id=${e.id}">${e.name}</a>
            </li>
          `;
        })
      } else {
        resultHtml += `
          <li class="header__search-history-item">
            <a href="">Not Found</a>
          </li>
        `;
      }
      historyView.innerHTML = resultHtml;
    });
  };
})
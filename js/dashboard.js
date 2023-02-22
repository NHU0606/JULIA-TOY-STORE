// $(document).ready(function(){
//     
// // 
// //     $('.sub-btn').click(function(){
// //       $(this).next('.sub-menu').slideToggle();
// //       $(this).find('.dropdown').toggleClass('rotate');
// //     });
// 
//     $('.menu-btn').click(function(){
//       $('.side-bar').addClass('active');
//       $('.menu-btn').css("visibility", "hidden");
//     });
// 
//     $('.close-btn').click(function(){
//       $('.side-bar').removeClass('active');
//       $('.menu-btn').css("visibility", "visible");
//     });
// 
//   });

// 
// $(document).ready(function() {
//     $("#container").load(`pages/`)
// })


// place can convert to some page when u click on 1 ClipboardItem, its like index.html 
$(document).ready(function() {
    const menuDB = document.getElementById('menu-list-dashboard')

    fetch("../json/menuDashBoard.json") 
    .then(respone => respone.json())
    .then(menuDBJson => {
        let htmlMenuDB =''
        menuDBJson.forEach(menuDB => {
            htmlMenuDB += `
            <div class="list-item" data-slug="${menuDB.slug}">
                <a href="#">${menuDB.text}</a>
            </div>
            `
        });
        menuDB.innerHTML = htmlMenuDB

        const itemsDB = document.querySelectorAll('.list-item')

        itemsDB.forEach(item => {
            let checkSlug ='';
            item.onclick = function() {
                checkSlug = item.getAttribute('data-slug')
                loadData(checkSlug)
                removeActive(checkSlug)
            }
        })

        function loadData(checkSlug) {
            let path = `pages/admin/layout/${checkSlug}.html`
            if (checkFileExists(path)) {
                $("#body").load(path)
            } else {
                alert (`U have to create file ${checkSlug}.html in pages/admin/layout/${checkSlug}.html`)
            }
        }

        function removeActive(checkSlug) {
            itemsDB.forEach(item => {
                if(item.getAttribute('data-slug') === checkSlug) {
                    item.classList.add('list-item-active')
                } else {
                    item.classList.remove('list-item-active')
                }
            })

        }

        function checkFileExists(url) {
            let http = new XMLHttpRequest()
            http.open("HEAD", url, false)
            http.send()
            if(http.status === 200) {
                return true
            }
            return false
        }

    })

    //LOG OUT
    const btnLogOut = document.getElementById('form-btn-logout')
    
    btnLogOut.addEventListener('click', e => {
        localStorage.clear()
        window.location.reload();
    })

    // dropdown list products
    
})
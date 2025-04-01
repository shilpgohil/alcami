document.addEventListener('DOMContentLoaded', () => {
    
    let searchButtonClicked = false;

    document.getElementById('search-btn').addEventListener('click', () => {
        const searchInput = document.getElementById('search-bar');

        const mainNav = document.querySelector('#main-nav');

        if(searchButtonClicked){
            searchInput.style.display = "none";
            mainNav.style.display = "flex";
            searchInput.value = '';
            searchButtonClicked = false;
        }else{
            mainNav.style.display = "none";
            searchInput.style.display = "flex";
            searchInput.focus();
            searchButtonClicked = true;
        }
    });

    const expandBtns = document.querySelectorAll('.expand');
    console.log(expandBtns);

    expandBtns.forEach(
        (btn) => {
            btn.addEventListener('click', () => {
                const targetElement = btn.parentElement.parentElement.childNodes[3];

                if(targetElement.style.display == 'block'){
                    targetElement.style.display = 'none';
                }else{
                    targetElement.style.display = 'block';
                }
            });
        }
    );

    let menuClicked = false;
    const menu = document.querySelector('.site-hamburger');
    menu.addEventListener('click', () => {
        console.log('menu clicked');
        if(menuClicked) {
            menuClicked = false;
            document.querySelector('.main-nav').style.display = 'none';
            document.querySelector('.nav-actions').style.display = 'none';
        }else{
            menuClicked = true;
            document.querySelector('.main-nav').style.display = 'flex';
            document.querySelector('.nav-actions').style.display = 'flex';
        }
    });

})
const searchBtn = document.querySelector('.search');
const basketBtn = document.querySelector('.basket');
const barsBtn = document.querySelector('.bars');
const searchForm = document.querySelector('.search-form');
const navbar = document.querySelector('.navbar');
const cartContainer = document.querySelector('.cart-items-container');

document.addEventListener('DOMContentLoaded', () => {

    searchBtn.addEventListener('click', () => {
        searchForm.classList.toggle('active');
        document.addEventListener('click', (e) => {

            if (!e.composedPath().includes(searchBtn) &&
                !e.composedPath().includes(searchForm)) {
                searchForm.classList.remove('active');
            }
        })
    });

    basketBtn.addEventListener('click', () => {
        cartContainer.classList.toggle('active');

        document.addEventListener('click', (e) => {

            if (!e.composedPath().includes(basketBtn) &&
                !e.composedPath().includes(cartContainer)) {
                cartContainer.classList.remove('active');
            }
        })

    });

    barsBtn.addEventListener('click', () => {
        navbar.classList.toggle('active');

        document.addEventListener('click', (e) => {

            if (!e.composedPath().includes(barsBtn) &&
                !e.composedPath().includes(navbar)) {
                    navbar.classList.remove('active');
            }
        })
    });

});

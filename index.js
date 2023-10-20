// Side Bar Code 
function openmenu() {
    document.getElementById('mySidebar').style.marginRight = '0px';
    document.body.style.backgroundColor = 'rgba(0,0,0,0.4)';
}
function closemenu() {
    document.getElementById('mySidebar').style.marginRight = '-390px';
    document.body.style.backgroundColor = '#fff';
}
function openmenus() {
    document.getElementById('mySidebars').style.marginRight = '0';
    document.body.style.backgroundColor = 'rgba(0,0,0,0.4)';
}
function closemenus() {
    document.getElementById('mySidebars').style.marginRight = '-400px';
    document.body.style.backgroundColor = '#fff';
}
// side bar end 

// Ollu Carosel 
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true,
            loop: true,
        },
        600: {
            items: 1,
            nav: false,
            loop: true,
        },
        1000: {
            items: 1,
            nav: true,
            loop: true,
        }
    }
});
// owl carosel end 

// logout start 
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('logout-button').addEventListener('click', function () {
        localStorage.removeItem('userToken');
        window.location.href = 'index.html';
    });
});
// Logout End 

// Fetch and display data from json file
function fetchData() {
    fetch('products_data.json')
        .then(response => response.json())
        .then(data => {
            addProductsToPage(data.products);
        })
}
window.onload = fetchData;
// Function to add products to the page
function addProductsToPage(data) {
    const productContainer = document.getElementById('product-container');

    data.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = `col-sm-6 col-md-4 col-lg-3 ${product.price} p-b-35 ${product.color} isotope-item ${product.category_of}`;
        productDiv.innerHTML = `
        <div class="block2">
        <div class="block2-pic hov-img0">
        <a href="#"><img src="${product.image}" alt="IMG-PRODUCT"></a>
        <a href="#" class="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
        Quick View
        </a>
        </div>
        <div class="block2-txt flex-w flex-t p-t-14">
        <div class="block2-txt-child1 flex-col-l">
        <a href="product-detail.html" class="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
        ${product.name}
        </a>
        <a href="#" class="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">${product.color}</a>
        <span class="stext-105 cl3">
        $${product.price}
        </span>
        </div>
        <div class="block2-txt-child2 flex-r p-t-3">
        <a href="#" class="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
        <img class="icon-heart1 dis-block trans-04" src="images/icon-heart-01.png" alt="ICON">
        <img class="icon-heart2 dis-block trans-04 ab-t-l" src="images/icon-heart-02.png" alt="ICON">
        </a>
        </div>
        </div>
        </div>
        `;

        productDiv.addEventListener('click', function () {
            window.location.href = `product-detail.html?id=${product.id}`;
        });
        productContainer.appendChild(productDiv);
    });
}
document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.filter-tope-group button');
    filterButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            const category = event.target.getAttribute('data-filter');
            filterProducts(category);
        });
    });
});
function filterProducts(category) {
    const products = document.querySelectorAll('.isotope-item');

    products.forEach(product => {
        const productCategory = product.classList.contains(category) ? category : 'all';
        if (productCategory === category) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}
// special 

document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.filter-tope-groupa button');
    filterButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            const color = event.target.getAttribute('data-filter');
            filterProducts(color);
        });
    });
});
function filterProducts(color) {
    const products = document.querySelectorAll('.isotope-item');

    products.forEach(product => {
        const productCategory = product.classList.contains(color) ? color : 'all';
        if (productCategory === color) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}
// special 

// special 2
// Fetch the product data from the JSON file
fetch('products_data.json')
    .then(response => response.json())
    .then(data => {
        const products = data.products;

        const filterButtons = document.querySelectorAll('.taba');
        filterButtons.forEach(button => {
            button.addEventListener('click', function () {
                const buttonId = button.getAttribute('id');

                let minPrice = 0;
                let maxPrice = Number.MAX_VALUE;

                if (buttonId === 'alproda') {
                } else if (buttonId === 'blacka') {
                    minPrice = 0;
                    maxPrice = 20;
                } else if (buttonId === 'whitea') {
                    minPrice = 20;
                    maxPrice = 50;
                } else if (buttonId === 'pinka') {
                    minPrice = 50;
                    maxPrice = 60;
                } else if (buttonId === 'greya') {
                    minPrice = 60;
                    maxPrice = 100;
                }

                const filteredProducts = products.filter(product => {
                    const productPrice = parseFloat(product.price);
                    return productPrice >= minPrice && productPrice <= maxPrice;
                });

                $(".isotope-item").each(function (index, element) {
                    $(element).remove();
                });
                addProductsToPage(filteredProducts)

                console.log(filteredProducts);

            });
        });
    })
    .catch(error => console.error('Error loading product data:', error));

// special 2 end 


// Change Color Of Active bUTTON by jquerry
$(document).ready(function () {
    $(".coni").click(function () {
        $(".coni").removeClass("how-active1");
        $(this).toggleClass("how-active1");
    });
});
// 2 
$(document).ready(function () {
    $(".tabbb").click(function () {
        $(".tabbb").removeClass("filter-link-active");
        $(this).toggleClass("filter-link-active");
    });
});
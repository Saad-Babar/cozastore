// Fetch and display data from json file
function fetchData() {
    fetch('products_data.json')
        .then(response => response.json())
        .then(data => {
            addProductsToPage(data);
        })
}

// fetch Data when the page loads
window.onload = fetchData;

// Function to add products to the page
function addProductsToPage(data) {
    const productContainer = document.getElementById('product-container');

    data.products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = `col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item ${product.category_of}`;
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
                        <span class="stext-105 cl3">
                            ${product.price}
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

        // Add an event listener to each product for the click event
        productDiv.addEventListener('click', function () {
            // Redirect to the product detail page with the product ID in the URL
            window.location.href = `product-detail.html?id=${product.id}`;
        });

        productContainer.appendChild(productDiv);
    });
}

// Add event listeners to the buttons for filter the datA
document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.filter-tope-group button');

    filterButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            const category = event.target.getAttribute('data-filter');
            filterProducts(category);
        });
    });
});

// Function to filter products based on the selected category
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

// product details 




// Change Color Of Active bUTTON by jquerry

$(document).ready(function () {
    $(".tab").click(function () {
        $(".tab").removeClass("how-active1");
        $(this).toggleClass("how-active1");
    });
});

// Owl Carosel 
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 5000,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 1,
            nav: false
        },
        1000: {
            items: 1,
            nav: true,
            loop: false
        }
    }
});

// Side Bar Code 
function openmenu() {
    document.getElementById('mySidebar').style.marginRight = '0px';
    document.body.style.backgroundColor = 'rgba(0,0,0,0.4)';
}

function closemenu() {
    document.getElementById('mySidebar').style.marginRight = '-390px';
    // document.getElementById('main').style.marginRight = '0';
    document.body.style.backgroundColor = '#fff';
}

function openmenus() {
    document.getElementById('mySidebars').style.marginRight = '0';
    // document.getElementById('sideMenu').style.marginRight = '-250px';
    // document.getElementById('main').style.marginRight = '250px';
    document.body.style.backgroundColor = 'rgba(0,0,0,0.4)';
}

function closemenus() {
    document.getElementById('mySidebars').style.marginRight = '-400px';
    // document.getElementById('main').style.marginRight = '0';
    document.body.style.backgroundColor = '#fff';
}


// $(document).ready(function() {

//     $("#alprod").click(function() {
//         $(this).toogle("how-active1");
//     });

//     $("#womn").click(function() {
//         $(this).toogle("how-active1");
//     });

//     $("#mn").click(function() {
//         $(this).toogle("how-active1");
//     });

//     $("#blt").click(function() {
//         $(this).toogle("how-active1");
//     });

//     $("#shos").click(function() {
//         $(this).toogle("how-active1");
//     });

//     $("#watch").click(function() {
//         $(this).toogle("how-active1");
//     });
// });


// const btns = document.querySelectorAll(".stext-106");
// const storeProducts = document.querySelectorAll(".isotope-item");

// for (i = 0; i < btns.length; i++) {
//     btns[i].addEventListener("click", (e) => {
//         e.preventDefault();

//         const filter = e.target.dataset.filter;
//         storeProducts.forEach((products) => {
//             if (filter == "all") {
//                 products.style.display = "block";
//             }
//             else {
//                 if (products.classList.contains(filter)) {
//                     products.style.display = "block";
//                 } else {
//                     products.style.display = "none";
//                 }
//             }
//         })
//     });

// };



// function alprodct() {
//     const deco = document.getElementById("alprod");
//     deco.classList.add('how-active1');
//     const deco2 = document.getElementById("womn");
//     deco2.classList.remove('how-active1');
//     const deco3 = document.getElementById("mn");
//     deco3.classList.remove('how-active1');
//     const deco4 = document.getElementById("blt");
//     deco4.classList.remove('how-active1');
//     const deco5 = document.getElementById("shos");
//     deco5.classList.remove('how-active1');
//     const deco6 = document.getElementById("watch");
//     deco6.classList.remove('how-active1');
// };
// function womn() {
//     const deco = document.getElementById("alprod");
//     deco.classList.remove('how-active1');
//     const deco3 = document.getElementById("mn");
//     deco3.classList.remove('how-active1');
//     const deco4 = document.getElementById("blt");
//     deco4.classList.remove('how-active1');
//     const deco5 = document.getElementById("shos");
//     deco5.classList.remove('how-active1');
//     const deco6 = document.getElementById("watch");
//     deco6.classList.remove('how-active1');
//     const deco2 = document.getElementById("womn");
//     deco2.classList.add('how-active1');
// };
// function mn() {
//     const deco = document.getElementById("alprod");
//     deco.classList.remove('how-active1');
//     const deco2 = document.getElementById("womn");
//     deco2.classList.remove('how-active1');
//     const deco4 = document.getElementById("blt");
//     deco4.classList.remove('how-active1');
//     const deco5 = document.getElementById("shos");
//     deco5.classList.remove('how-active1');
//     const deco6 = document.getElementById("watch");
//     deco6.classList.remove('how-active1');
//     const deco3 = document.getElementById("mn");
//     deco3.classList.add('how-active1');
// };
// function blt() {
//     const deco = document.getElementById("alprod");
//     deco.classList.remove('how-active1');
//     const deco2 = document.getElementById("womn");
//     deco2.classList.remove('how-active1');
//     const deco3 = document.getElementById("mn");
//     deco3.classList.remove('how-active1');
//     const deco5 = document.getElementById("shos");
//     deco5.classList.remove('how-active1');
//     const deco6 = document.getElementById("watch");
//     deco6.classList.remove('how-active1');
//     const deco4 = document.getElementById("blt");
//     deco4.classList.add('how-active1');

// };
// function shos() {
//     const deco = document.getElementById("alprod");
//     deco.classList.remove('how-active1');
//     const deco2 = document.getElementById("womn");
//     deco2.classList.remove('how-active1');
//     const deco3 = document.getElementById("mn");
//     deco3.classList.remove('how-active1');
//     const deco4 = document.getElementById("blt");
//     deco4.classList.remove('how-active1');
//     const deco6 = document.getElementById("watch");
//     deco6.classList.remove('how-active1');
//     const deco5 = document.getElementById("shos");
//     deco5.classList.add('how-active1');

// };
// function watch() {
//     const deco = document.getElementById("alprod");
//     deco.classList.remove('how-active1');
//     const deco2 = document.getElementById("womn");
//     deco2.classList.remove('how-active1');
//     const deco3 = document.getElementById("mn");
//     deco3.classList.remove('how-active1');
//     const deco4 = document.getElementById("blt");
//     deco4.classList.remove('how-active1');
//     const deco5 = document.getElementById("shos");
//     deco5.classList.remove('how-active1');
//     const deco6 = document.getElementById("watch");
//     deco6.classList.add('how-active1');
// };
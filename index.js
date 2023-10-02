const btns = document.querySelectorAll(".stext-106");
const storeProducts = document.querySelectorAll(".isotope-item");
 
for (i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", (e) => {
        e.preventDefault();

        const filter = e.target.dataset.filter;
        storeProducts.forEach((products) => {
            if (filter == "all") {
                products.style.display = "block";
            }
            else {
                if (products.classList.contains(filter)) {
                    products.style.display = "block";
                } else {
                    products.style.display = "none";
                }
            }
        })
    });

}





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



function openmenu() 
{
    document.getElementById('mySidebar').style.marginRight = '0px';
    document.body.style.backgroundColor = 'rgba(0,0,0,0.4)';
}

function closemenu() 
{
    document.getElementById('mySidebar').style.marginRight = '-390px';
    // document.getElementById('main').style.marginRight = '0';
    document.body.style.backgroundColor = '#fff';
}

function openmenus() 
{
    document.getElementById('mySidebars').style.marginRight = '0';
    // document.getElementById('sideMenu').style.marginRight = '-250px';
    // document.getElementById('main').style.marginRight = '250px';
    document.body.style.backgroundColor = 'rgba(0,0,0,0.4)';
}

function closemenus() 
{
    document.getElementById('mySidebars').style.marginRight = '-400px';
    // document.getElementById('main').style.marginRight = '0';
    document.body.style.backgroundColor = '#fff';
}
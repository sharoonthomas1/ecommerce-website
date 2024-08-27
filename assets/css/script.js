

let search = document.getElementById('myDIV');
let icons = document.getElementById('icons');
let setInput = document.getElementById('setInput');
let close_btn = document.getElementById('close-btn');

search.addEventListener('click' , ()=>{
    icons.setAttribute('class' , 'd-none')
    setInput.setAttribute('class' , 'd-block',)
})

close_btn.addEventListener('click' , ()=>{
    setInput.setAttribute('class' , 'd-none',)
    icons.setAttribute('class' , 'd-block')
    icons.setAttribute('class' , 'd-flex')
})


let dropdown_btn = document.getElementById('dropdown_btn');
let header_nav = document.getElementById('header-nav');

dropdown_btn.addEventListener('click', () => {
    header_nav.classList.toggle('bg-black');
});
// 
$(document).ready(function() {
    var owl = $("#owl-demo");
   
    owl.owlCarousel({
        items: 4,
        itemsDesktop: [1000, 3],
        itemsDesktopSmall: [900, 3],
        itemsTablet: [600, 2],
        itemsMobile: false,
        dots: false
    });
   
    $(".next").click(function(){
        owl.trigger('next.owl.carousel');
    });
    $(".prev").click(function(){
        owl.trigger('prev.owl.carousel');
    });
});
//   

// cart_show
// show-cart
let cart_show = document.getElementById('cart_show');
let cartTab = document.getElementById('cartTab');
let slideout_close = document.getElementById('basket-slideout-close');

cart_show.addEventListener('click', () => {
    cartTab.classList.toggle('d-block');
    cartTab.classList.toggle('d-grid');
});

slideout_close.addEventListener('click', () => {
    cartTab.classList.remove('d-block');
    cartTab.classList.remove('d-grid');
});

// 
const product = [
    { id: 0, image: '/Images/basins_image.jpg', crouseltxt: "Marnie – Yellow basin", price: 400 },
    { id: 1, image: '/Images/basins_image2.jpg', crouseltxt: "Coralie basin", price: 400 },
    { id: 2, image: '/Images/basins_image3.jpg', crouseltxt: "Adriana basin", price: 350 },
    { id: 3, image: '/Images/basins_image4.jpg', crouseltxt: "Sadie basin", price: 200 }
];

const categories = [...product];

document.getElementById('item1').innerHTML = categories.map((item, index) => {
    const { image, crouseltxt, price } = item;
    return `
        <div class="image_border">
            <img src="${image}" alt="basins_image" class="image"></img>
            <div class="d-flex justify-content-between mt-3">
                <a href="" class="text-decoration-none">
                    <h4 class="crousel-txt">${crouseltxt}</h4>
                </a>
                <span style="color: #e29079;">$${price}</span>
            </div>
            <button onclick="addtocart(categories, ${index})"class="p-0 text-danger">Add to Cart</button>
        </div>
    `;
}).join('');

const product2 = [
    { id: 0, image: '/Images/taps1.jpg', crouseltxt: "Mini Theo Tap – Brushed Brass", price: 499 },
    { id: 1, image: '/Images/taps2.jpg', crouseltxt: "Arlo Tap – Brushed Gold", price: 400 },
    { id: 2, image:  '/Images/taps1.jpg', crouseltxt: "Mini Theo Tap – Brushed Brass", price: 700 },
    { id: 3, image:'/Images/taps2.jpg', crouseltxt: "Arlo Tap – Brushed Gold", price: 700 }
];

const categories2 = [...product2];

document.getElementById('item2').innerHTML = categories2.map((item, index) => {
    const { image, crouseltxt, price } = item;
    return `
        <div class="image_border">
            <img src="${image}" alt="basins_image" class="image"></img>
            <div class="d-flex justify-content-between mt-3">
                <a href="" class="text-decoration-none">
                    <h4 class="crousel-txt">${crouseltxt}</h4>
                </a>
                <span style="color: #e29079;">$${price}</span>
            </div>
            <button onclick="addtocart(categories2, ${index})"class="p-0 text-danger">Add to Cart</button>
        </div>
    `;
}).join('');

const product3 = [
    { id: 0, image: '/Images/vanity1.jpg', crouseltxt: "Felix – Double Vanity Unit", price: 400 },
    { id: 1, image: '/Images/vanity2.jpeg', crouseltxt: "Felix – Single Vanity Unit", price: 700 },
    { id: 2, image: '/Images/vanity3.jpeg', crouseltxt: "Felix – Double Vanity Unit", price: 350 },
    { id: 3, image: '/Images/vanity4.jpg', crouseltxt: "Felix – Single Vanity Unit", price: 290 }
];

const categories3 = [...product3];

document.getElementById('item3').innerHTML = categories3.map((item, index) => {
    const { image, crouseltxt, price } = item;
    return `
        <div class="image_border">
            <img src="${image}" alt="basins_image" class="image"></img>
            <div class="d-flex justify-content-between mt-3">
                <a href="" class="text-decoration-none">
                    <h4 class="crousel-txt">${crouseltxt}</h4>
                </a>
                <span style="color: #e29079;">$${price}</span>
            </div>
            <button onclick="addtocart(categories3, ${index})"class="p-0 text-danger">Add to Cart</button>
        </div>
    `;
}).join('');

const product4 = [
    { id: 0, image: '/Images/mirror1.jpg', crouseltxt: "Otto mirror – Gold", price: 470 },
    { id: 1, image: '/Images/mirror2.jpg', crouseltxt: "Austin mirror – Industrial Steel", price: 600 },
    { id: 2, image: '/Images/mirror3.jpg', crouseltxt: "Austin Oval mirror- Copper", price: 350 },
    { id: 3, image: '/Images/mirror4.jpg', crouseltxt: "Gabriel mirror – Gold", price: 980 }
];

const categories4 = [...product4];

document.getElementById('item4').innerHTML = categories4.map((item, index) => {
    const { image, crouseltxt, price } = item;
    return `
        <div class="image_border">
            <img src="${image}" alt="basins_image" class="image"></img>
            <div class="d-flex justify-content-between mt-3">
                <a href="" class="text-decoration-none">
                    <h4 class="crousel-txt">${crouseltxt}</h4>
                </a>
                <span style="color: #e29079;">$${price}</span>
            </div>
            <button onclick="addtocart(categories4, ${index})" class="p-0 text-danger">Add to Cart</button>
        </div>
    `;
}).join('');

let cart = [];

function addtocart(category, index) {
    let item = { ...category[index], quantity: 1 };
    cart.push(item);
    displaycart();
}

function displaycart() {
    if (cart.length === 0) {
        document.getElementById('cartdata').innerHTML = "There are no items currently in your basket.";
    } else {
        document.getElementById('cartdata').innerHTML = cart.map((item, index) => {
            const { image, crouseltxt, price, quantity } = item;
            return `
                <div class="item_cart ">
                    <div class="image">
                        <img src="${image}" alt=""></img>
                    </div>
                    <div>
                        <div class="name">
                            ${crouseltxt}
                        </div>
                        <div class="quantity mt-5">
                            <button class="minus " onclick="updateQuantity(${index}, -1)">-</button>
                            <span class="count ms-3 text-dark">${quantity}</span>
                           <button class="plus ms-3" onclick="updateQuantity(${index}, 1)">+</button>
                        </div>
                    </div>
                    <div>
                        <div class="totalprice">$${(price * quantity).toFixed(2)}</div>
                        <button class="remove mt-3" onclick="removeFromCart(${index})" aria-label="Remove this item">
                            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.167 5.5h4.166v1.667h-1.666V18a.833.833 0 01-.834.833H4.167A.833.833 0 013.333 18V7.167H1.667V5.5h4.166V3a.833.833 0 01.834-.833h6.666a.833.833 0 01.834.833v2.5zM15 7.167H5v10h10v-10zm-7.5 2.5h1.667v5H7.5v-5zm3.333 0H12.5v5h-1.667v-5zM7.5 3.833V5.5h5V3.833h-5z" fill="#000"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            `;
        }).join('');
    }
}

function removeFromCart(index) {
    cart.splice(index, 1);
    displaycart();
}

function updateQuantity(index, delta) {
    let item = cart[index];
    item.quantity = Math.max(1, item.quantity + delta); 
    displaycart();
}

let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = ()=>{

    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}



window.onscroll = () => {

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    // if(window.scrollY > 60){
    //     document.querySelector('#scroll-top').classList.add('active');
    // }
    // else{
    //     document.querySelector('#scroll-top').classList.remove('active');

    // }

}

// script.js

document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("login-form");
    const signupForm = document.getElementById("signup-form");

    // Add event listeners for form submissions
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        // Perform login form validation and logic
    });

    signupForm.addEventListener("submit", function(event) {
        event.preventDefault();
        // Perform signup form validation and logic
    });

    // Add login/signup form validation functions
    function validateLoginForm() {
        // Validate login form inputs
    }

    function validateSignupForm() {
        // Validate signup form inputs
    }
});



function orderPlaced(e){
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var quantity = document.getElementById("quantity").value;
    var food = document.getElementById("food").value;
    var address = document.getElementById("address").value;

    document.getElementById("congrats").innerHTML = "Wohoo! " + name + ".Your order has been placed";
    document.getElementById("confirm").innerHTML = "Our delivery partner will reach you at "+ address+ " shortly with "+quantity+ " units of "+food+ " !";
    // location.reload();

    document.getElementById("blank").innerHTML="";
    document.getElementById("blank1").innerHTML="";
    // document.getElementById("explore").innerHTML="Continue Exploring";
    $('button').click(function() {
        $('html, body').animate({
            scrollTop: $('#home').offset().top
        }, 2000);
    });

    e.preventDefault();
}


function addToCart(itemName, imageUrl, itemPrice) {
    let cart = JSON.parse(localStorage.getItem('cartItems')) || [];

    let existingItem = cart.find(item => item.name === itemName);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ name: itemName, image: imageUrl, price: itemPrice, quantity: 1 });
    }

    localStorage.setItem('cartItems', JSON.stringify(cart));
}

// function loader(){
//     document.querySelector('.loader-container').classList.add('fade-out');
// }

// function fadeOut(){
//     setInterval(loader, 2000);
// }

// window.onload = fadeOut();



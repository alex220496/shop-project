// add to cart
let productsCountEl= document.getElementById("producrts-count");
let addToCart = document.querySelectorAll(".add-too-cart");
// console.log(addToCart);

for (let i=0; addToCart.length; i++) {
    addToCart[i].addEventListener("click",function() {
        productsCountEl.textContent = +productsCountEl.textContent + 1;
    });
}
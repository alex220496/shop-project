// // add to cart
 let productsCountEl= document.getElementById("producrts-count");
 let addToCart = document.querySelectorAll(".add-too-cart");


 for (let i=0; i < addToCart.length; i++) {
     addToCart[i].addEventListener ("click",function() {
         productsCountEl.textContent = +productsCountEl.textContent + 1;
     });
 };



// like button

  let BtnLike = document.querySelectorAll(".my-like");
  console.log(BtnLike);

 
  BtnLike.forEach(btn => {
    btn.addEventListener("click", function() {
        // if (btn.classList.contains("liked")) {
        //     btn.classList.remove("liked");
        // } else {
        //     btn.classList.add("liked");
            
        // }
        btn.classList.toggle("liked");
    })
  });          

  
 let moreDetBtn = document.querySelectorAll(".more-det");
 let modal = document.querySelector(".modal");
 let btnClose =document.querySelector(".btn-close")
 console.log(btnClose);

 moreDetBtn.forEach(btn => {
    btn.addEventListener("click",openModal)
 });

btnClose.addEventListener("click",hideModal)

function openModal() {
    modal.classList.add("show");
    modal.classList.remove("hide");
}

function hideModal() {
    modal.classList.add("hide");
    modal.classList.remove("show");
}

modal.addEventListener("click",function(e) {
    if(e.target === modal) {
        hideModal()
    }
});

function showModalByScroll () {
    if (window.pageYOffset > document.body.scrollHeight/2){
        openModal ();
        window.removeEventListener("scroll", showModalByScroll)
    }
}
window.addEventListener("scroll", showModalByScroll)





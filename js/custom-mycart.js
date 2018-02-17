/**
 * Created by Sharmo on 1/9/2018.
 */

function getCartData(){
    var cartBtn = document.getElementById("add-to-cart");
    var prodName = document.getElementById("prod-name").innerText;
    var codeName = document.getElementById("code").innerText;
    var prodQuantity = document.getElementById("quantity").value;
    prodName = prodName+"<br/>"+prodQuantity+" grams<br/> ("+codeName+")";
    cartBtn.setAttribute("data-name",prodName);
    var prodPrice = document.getElementById("package-price").innerText.replace("Rs. ","");
    cartBtn.setAttribute("data-price",prodPrice);
    cartBtn.setAttribute("data-quantity","1");
    var prodImage = document.getElementById("single-image-1").getAttribute("data-thumb");
    cartBtn.setAttribute("data-image",prodImage);
    var prodId = document.getElementById("code").innerText;
    console.log("prodId from custom-mycart :   "+prodId);
    cartBtn.setAttribute("data-id",prodId);
    // reloadAddToCartButton();
    // alert(prodQuantity);
}

function reloadAddToCartButton(){
    var elem = document.getElementById('add-to-cart');
    elem.parentNode.removeChild(elem);
    var btn = document.createElement("button");
    btn.classList.add("btn");
    btn.classList.add("my-cart-btn");
    btn.classList.add("snipcart-details");
    btn.classList.add("hvr-outline-out");
    var parent = document.getElementById("add-to-cart-holder");
    parent.appendChild(btn);
    btn.setAttribute("id", "add-to-cart");
    btn.onclick=getCartData();
}

$(function () {

    var goToCartIcon = function($addTocartBtn){
        var $cartIcon = $(".my-cart-icon");
        var $image = $('<img width="30px" height="30px" src="' + $addTocartBtn.data("image") + '"/>').css({"position": "fixed", "z-index": "999"});
        $addTocartBtn.prepend($image);
        var position = $cartIcon.position();
        console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
        console.log(position);
        $image.animate({
            top: -300, //position.top,
            left: position.left
        }, 500 , "linear", function() {
            $image.remove();
        });
    };

    $('.my-cart-btn').myCart({
        currencySymbol: '&#x20B9;',
        classCartIcon: 'my-cart-icon',
        classCartBadge: 'my-cart-badge',
        classProductQuantity: 'my-product-quantity',
        classProductRemove: 'my-product-remove',
        classCheckoutCart: 'my-cart-checkout',
        affixCartIcon: true,
        showCheckoutModal: true,
        numberOfDecimals: 2,
        cartItems: [
            // {id: 1, name: 'product 1', summary: 'summary 1', price: 10, quantity: 1, image: 'images/img_1.png'},
            // {id: 2, name: 'product 2', summary: 'summary 2', price: 20, quantity: 2, image: 'images/img_2.png'},
            // {id: 3, name: 'product 3', summary: 'summary 3', price: 30, quantity: 1, image: 'images/img_3.png'}
        ],
        clickOnAddToCart: function($addTocart){
            goToCartIcon($addTocart);
        },
        afterAddOnCart: function(products, totalPrice, totalQuantity) {
            console.log("afterAddOnCart", products, totalPrice, totalQuantity);
        },
        clickOnCartIcon: function($cartIcon, products, totalPrice, totalQuantity) {
            console.log("cart icon clicked", $cartIcon, products, totalPrice, totalQuantity);
        },
        checkoutCart: function(products, totalPrice, totalQuantity) {
            var checkoutString = "Total Price: " + totalPrice + "\nTotal Quantity: " + totalQuantity;
            checkoutString += "\n\n id \t name \t summary \t price \t quantity \t image path";
            $.each(products, function(){
                checkoutString += ("\n " + this.id + " \t " + this.name + " \t " + this.summary + " \t " + this.price + " \t " + this.quantity + " \t " + this.image);
            });
            alert(checkoutString);
            console.log("checking out", products, totalPrice, totalQuantity);
        },
        getDiscountPrice: function(products, totalPrice, totalQuantity) {
            console.log("calculating discount", products, totalPrice, totalQuantity);
            return totalPrice;
        }
    });

    $("#addNewProduct").click(function(event) {
        var currentElementNo = $(".row").children().length + 1;
        $(".row").append('<div class="col-md-3 text-center"><img src="images/img_empty.png" width="150px" height="150px"><br>product ' + currentElementNo + ' - <strong>$' + currentElementNo + '</strong><br><button class="btn btn-danger my-cart-btn" data-id="' + currentElementNo + '" data-name="product ' + currentElementNo + '" data-summary="summary ' + currentElementNo + '" data-price="' + currentElementNo + '" data-quantity="1" data-image="images/img_empty.png">Add to Cart</button><a href="#" class="btn btn-info">Details</a></div>')
    });
});
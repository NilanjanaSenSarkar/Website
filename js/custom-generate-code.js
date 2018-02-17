/**
 * Created by Sharmo on 2/10/2018.
 */


// also check custom-slider.js function for code-generation codes
function generateCode(){
    var location = document.getElementById("location").value;
    var slider_1 = curr_val_1; // the curr_var variables are from custom-slider.js
    var slider_2 = curr_val_2;
    var slider_3 = curr_val_3;
    var quantity = document.getElementById("quantity").value.replace(" grams","");
    console.log(quantity);
    var code = location.substr(0,3).toUpperCase()+slider_1+slider_2+slider_3+quantity;
    console.log(code);
    document.getElementById("code").innerHTML = code;
}
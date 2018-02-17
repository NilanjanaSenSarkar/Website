/**
 * Created by Sharmo on 2/11/2018.
 */

function goSinglesPage( prodId){
    var prodName = document.getElementById(prodId+"-name").innerText;
    var prodPrice = document.getElementById(prodId+"-price").innerText;
    var prodDescription = "xx";
    console.log(prodName);console.log(prodId);console.log(prodDescription);console.log(prodPrice);
    localStorage.setItem("prodName", prodName);
    localStorage.setItem("prodId", prodId);
    localStorage.setItem("prodDescription", prodDescription);
    localStorage.setItem("prodPrice", prodPrice);
    window.location.href = 'single.html';
}


function teaTypeFilter(teaType) {
    if (teaType === 'CTC'){
        window.location.href = 'CTC.html';
    }
}

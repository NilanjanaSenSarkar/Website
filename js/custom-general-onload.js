/**
 * Created by Sharmo on 2/14/2018.
 */


// current_tab_pos : is the position of the page on the header menu (eg: Home is 1 ... etc)
function generalOnLoad(current_tab_pos){
    highlightHeaderMenuTab(current_tab_pos);
    // specific for portfolio page
    if (current_tab_pos === 3){
        checkSource(); // this function checks from where the portfolio page was opened and takes appropiate action
    }
}


// current_tab_pos : is the position of the page on the header menu (eg: Home is 1 ... etc)
function highlightHeaderMenuTab(current_tab_pos) {
    // alert( "Size: " + $( "#custom_nav_menu" ).size() );
    var ul = document.getElementById("custom_nav_menu");

    for (var i = 0; i < ul.childNodes.length; i++) {
        if (ul.childNodes[i].nodeName == "LI") {
            ul.childNodes[i].classList.remove("menu__item--current");
        }
    }

    document.getElementById("custom_menu_item_"+current_tab_pos).classList.add("menu__item--current");
}

// this function checks from where the portfolio page was opened and takes appropiate action
function checkSource() {
    var target_project_id = localStorage.getItem("target_project_id");
    console.log(target_project_id);
    if (target_project_id !== null && target_project_id !== ''){
        $("#modal-"+target_project_id).modal();
    }
    localStorage.setItem('target_project_id', '');
}

// redirect to portfolio page with a specific project
function openSpecificProject_PortfolioPage(project_id){
    localStorage.setItem('target_project_id', project_id);
    window.location.href = 'portfolio.html';
}
// ------------INDEX PAGE------------
 
var menu = document.getElementById("menu");

menu.style.maxHeight = "0px";
menu.style.background = "brown";


function menutoogle (){
    if (menu.style.maxHeight == "0px"){
        menu.style.maxHeight = "200px";                
    }
    else{
        menu.style.maxHeight = "0px";
    }
}


// -------------------ACCOUNT PAGE---------------
 
var logIn = document.getElementById("login");
var signUp = document.getElementById("signup");
var indicator = document.getElementById("indicator");

function login(){
    logIn.style.transform = "translateX(-300px)";
    signUp.style.transform = "translateX(300px)";
    signUp.style.display = "none";
    indicator.style.transform = "translateX(-10px)";
    logIn.style.transitionDuration = "2s";
    logIn.style.display = "flex";
}
function signup(){
    signUp.style.transform = "translateX(0px)";
    logIn.style.display = "none";
    logIn.style.transform = "translateX(0px)";
    indicator.style.transform = "translateX(100px)";
    signUp.style.transitionDuration = "2s";
    signUp.style.display = "flex";
}

// ------------PRODUCT DETAILS-------------

var productImg = document.getElementById('productImg');
var smallImg = document.getElementsByClassName('smallImg');
//var smallImg = document.querySelectorAll('smallImg');

smallImg[0].onclick = ()=>{
     productImg.src=smallImg[0].src;
 };

smallImg[1].onclick = ()=>{
     productImg.src=smallImg[1].src;
 };

smallImg[2].onclick = ()=>{
     productImg.src=smallImg[2].src;
};

smallImg[3].onclick = ()=>{
     productImg.src=smallImg[3].src;
 };







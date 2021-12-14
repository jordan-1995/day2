let toggle = document.getElementById("nav-list");
let toggleImage = document.getElementsByTagName("img")[1];
let subMenu = document.getElementsByClassName("sub-dropdown");
let arrow = document.getElementById("arrow");
let scrollLock = document.getElementById("body");

function toggleLogo(){
    
    if(toggleImage.src.match("/images/icon-hamburger.svg")){
        console.log("clicked");
        toggle.style.display = "flex";
        toggleImage.src = "/images/icon-close.svg";
        scrollLock.style.position = "fixed";
    }
    else if(toggleImage.src.match("/images/icon-close.svg")){
        console.log("unclicked");
        toggle.style.display = "none";
        toggleImage.src = "/images/icon-hamburger.svg";
        scrollLock.style.position = "relative";
    }
    
};

function subClick(){
    if(arrow.src.match("icon-arrow-dark.svg")){
        arrow.src = "/images/icon-arrow-light.svg";
        arrow.style.transform = "rotate(180deg)";
    }
    else if(arrow.src.match("icon-arrow-light.svg")){
        arrow.src = "/images/icon-arrow-dark.svg";
        arrow.style.transform = "rotate(0deg)"
    }
}


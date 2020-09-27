// 登录框设置

// 点击登录按钮
function loginPop() {
    let loginPop = document.getElementById("login-user");
    let loginLayer = document.getElementById("login-layer");
    loginPop.style.display = "block";
    loginLayer.style.display = "block";
    closeChange();
}
// 点击关闭按钮
function closePop() {
    let loginPop = document.getElementById("login-user");
    let loginLayer = document.getElementById("login-layer");
    loginPop.style.display = "none";
    loginLayer.style.display = "none";
}

document.getElementById("login-button").addEventListener("click",loginPop);
document.getElementById("login-close").addEventListener("click",closePop);

// 搜索框设置
// 点击搜索按钮
function searchPop() {
    let searchPop = document.getElementById("search-logo");
    let closeChange = document.getElementById("close-change");
    let searchUser = document.getElementById("search-user");
    let searchLayer = document.getElementById("search-layer");
    searchPop.style.display = "none"
    closeChange.style.display = "block";
    searchUser.style.display = "block";
    searchLayer.style.display = "block";
}
// 点击关闭按钮
function closeChange() {
    let searchPop = document.getElementById("search-logo");
    let closeChange = document.getElementById("close-change");
    let searchUser = document.getElementById("search-user");
    let searchLayer = document.getElementById("search-layer");
    searchPop.style.display = "block"
    closeChange.style.display = "none";
    searchUser.style.display = "none";
    searchLayer.style.display = "none";
}

document.getElementById("search-logo").addEventListener("click",searchPop);
document.getElementById("close-change").addEventListener("click",closeChange);

// 轮播图实现
function slideLeft() {
    let slideContainer = document.getElementById("slide");
    let imgWidth = document.body.clientWidth;
    let imgWidthStr = "-" + imgWidth + "px";
    let slideMaginLeft = getComputedStyle(slideContainer,null).marginLeft;
    let picButton = document.getElementsByClassName("carousel-button");
    if (slideMaginLeft === "0px") {
        imgWidthStr = "-" + imgWidth*3 + "px";
        slideContainer.style.marginLeft = imgWidthStr;
        for (let i = 0 , len = picButton.length; i < len; i++) {
            picButton[i].className = "carousel-button";
        }
        picButton[3].className = "carousel-button is-active";
    } else if (slideMaginLeft === ("-" + imgWidth + "px")) {
        slideContainer.style.marginLeft = "0px";
        for (let i = 0 , len = picButton.length; i < len; i++) {
            picButton[i].className = "carousel-button";
        }
        picButton[0].className = "carousel-button is-active";
    } else if (slideMaginLeft === ("-" + imgWidth*2 + "px")) {
        slideContainer.style.marginLeft = imgWidthStr;
        for (let i = 0 , len = picButton.length; i < len; i++) {
            picButton[i].className = "carousel-button";
        }
        picButton[1].className = "carousel-button is-active";
    } else if (slideMaginLeft === ("-" + imgWidth*3 + "px")) {
        imgWidthStr = "-" + imgWidth*2 + "px";
        slideContainer.style.marginLeft = imgWidthStr;
        for (let i = 0 , len = picButton.length; i < len; i++) {
            picButton[i].className = "carousel-button";
        }
        picButton[2].className = "carousel-button is-active";
    } else {
        alert("error!");
    }
}
function slideRight() {
    let slideContainer = document.getElementById("slide");
    let imgWidth = document.body.clientWidth;
    let imgWidthStr = "-" + imgWidth + "px";
    let slideMaginLeft = getComputedStyle(slideContainer,null).marginLeft;
    let picButton = document.getElementsByClassName("carousel-button");
    if (slideMaginLeft === "0px") {
        slideContainer.style.marginLeft = imgWidthStr;
        for (let i = 0 , len = picButton.length; i < len; i++) {
            picButton[i].className = "carousel-button";
        }
        picButton[1].className = "carousel-button is-active";
    } else if (slideMaginLeft === ("-" + imgWidth + "px")) {
        imgWidthStr = "-" + imgWidth*2 + "px";
        slideContainer.style.marginLeft = imgWidthStr;
        for (let i = 0 , len = picButton.length; i < len; i++) {
            picButton[i].className = "carousel-button";
        }
        picButton[2].className = "carousel-button is-active";
    } else if (slideMaginLeft === ("-" + imgWidth*2 + "px")) {
        imgWidthStr = "-" + imgWidth*3 + "px";
        slideContainer.style.marginLeft = imgWidthStr;
        for (let i = 0 , len = picButton.length; i < len; i++) {
            picButton[i].className = "carousel-button";
        }
        picButton[3].className = "carousel-button is-active";
    } else if (slideMaginLeft === ("-" + imgWidth*3 + "px")) {
        slideContainer.style.marginLeft = "0px";
        for (let i = 0 , len = picButton.length; i < len; i++) {
            picButton[i].className = "carousel-button";
        }
        picButton[0].className = "carousel-button is-active";
    } else {
        alert("error!");
    }
}

document.getElementById("slide-right").addEventListener("click",slideRight);
document.getElementById("slide-left").addEventListener("click",slideLeft);
// setInterval(slideRight,7000);
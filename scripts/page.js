"use strict"
let root = document.documentElement;
let navBar = document.getElementById("scroll_name");
let scrollName = document.getElementById("name");
let hamburger = document.getElementById("menuToggle");
let burg = document.getElementsByClassName("burg");

let nav = document.getElementById("nav");
let nav0 = document.getElementById("nav0");
let nav1 = document.getElementById("nav1");
let nav2 = document.getElementById("nav2");
let nav3 = document.getElementById("nav3");

let drawer = document.getElementById("drawer");
let drawer0 = document.getElementById("drawer0");
let drawer1 = document.getElementById("drawer1");
let drawer2 = document.getElementById("drawer2");
let drawer3 = document.getElementById("drawer3");

let portfolio = document.getElementById("portfolio");
let about = document.getElementById("about");
let experience = document.getElementById("experience");
let contact = document.getElementById("contact");
let resume = document.getElementById("resume");

let clicked = false;
let scrollTop = window.pageYOffset;
const style = document.documentElement.style;

/*-------------------initialize page----------------------*/

let colorPallets = [
    ["#202124","whitesmoke","#9f0000","whitesmoke","black","#bf0000","#b71c1ccc"],
    ["#000051","whitesmoke","#00c853","whitesmoke","black","#00e676","#00e676cc"]
]

const colors = colorPallets[0];
const PRIMARY = colors[0];
const PRIMARYTEXT = colors[1];
const ACCENT = colors[2];
const SECONDARY = colors[3];
const SECONDARYTEXT = colors[4];
const ACCENTLIGHT = colors[5];
const HIGHLIGHT = colors[6];

root.style.setProperty('--PRIMARY', PRIMARY);
root.style.setProperty('--PRIMARYTEXT', PRIMARYTEXT);
root.style.setProperty('--ACCENT', ACCENT);
root.style.setProperty('--SECONDARY', SECONDARY);
root.style.setProperty('--SECONDARYTEXT', SECONDARYTEXT);
root.style.setProperty('--ACCENTLIGHT', ACCENTLIGHT);
root.style.setProperty('--HIGHLIGHT', HIGHLIGHT);

//Fix some page resize bugs
window.addEventListener("resize", function(){
    if(scrollTop > navBar.offsetTop){
        header.style.top = "-"+(navBar.offsetTop);
        resume.style.display="block";
        if(window.matchMedia("(max-width: 768px)").matches){
            nav.style.display = "none";
        } else {
            nav.style.display = "block";
        }
    } else {
        nav.style.display = "block";
        if(window.matchMedia("(max-width: 768px)").matches){
            resume.style.display ="none"
        } else {
            resume.style.display="block";
        }
    }
});

scrollTop = window.pageYOffset;
if(scrollTop < navBar.offsetTop){
    header.style.boxShadow = "0px 0px 0px rgba(0,0,0,.25)";
    header.style.position = "absolute";
    header.style.top = "0px";

    scrollName.style.opacity = "0";
    hamburger.style.opacity = "0";

    if(drawer.offsetWidth > 0){
        collapse();
    }
    nav.style.display = "block";
    if(window.matchMedia("(max-width: 768px)").matches){
        resume.style.display ="none"
    } else {
        resume.style.display="block";
    }
}
else if (scrollTop > navBar.offsetTop){
    header.style.boxShadow = "0px 1px 5px rgba(0,0,0,.25)";
    header.style.position = "fixed";

    scrollName.style.opacity = "1"; 
    hamburger.style.opacity = "1";
    
    header.style.top = "-"+(navBar.offsetTop);

    resume.style.display = "block"
    if(window.matchMedia("(max-width: 768px)").matches){
        nav.style.display = "none";
    } else {
        nav.style.display = "block";
    }
}
updateYPos();

/*-------------------listen for events----------------------*/
hamburger.addEventListener("click", function(){
    drawer.style.top = (navBar.offsetTop + navBar.offsetHeight)+'px';
    if(clicked){
        collapse();
    } else {
        open();  
    }
});

window.addEventListener("scroll", function(){
    scrollTop = window.pageYOffset;
    if(scrollTop < navBar.offsetTop){
        header.style.boxShadow = "0px 0px 0px rgba(0,0,0,.25)";
        header.style.position = "absolute";
        header.style.top = "0px";

        scrollName.style.opacity = "0";
        hamburger.style.opacity = "0";

        if(drawer.offsetWidth > 0){
            collapse();
        }
        nav.style.display = "block";
        if(window.matchMedia("(max-width: 768px)").matches){
            resume.style.display ="none"
        } else {
            resume.style.display="block";
        }

    }
    else if (scrollTop > navBar.offsetTop){
        header.style.boxShadow = "0px 1px 5px rgba(0,0,0,.25)";
        header.style.position = "fixed";

        scrollName.style.opacity = "1"; 
        hamburger.style.opacity = "1";
        
        header.style.top = "-"+(navBar.offsetTop);
        resume.style.display = "block"
        if(window.matchMedia("(max-width: 768px)").matches){
            nav.style.display = "none";
        } else {
            nav.style.display = "block";
        }
    }
    updateYPos();
});

// JQuery allows for cross browser support of animated scroll
$(function() {
    var headerHeight = $('#scroll_name').height(); 
    $('.mover').click(function (e) {
        e.preventDefault();
        var targetDiv =  $(this.hash);
        $('html, body').animate({
            scrollTop: targetDiv.offset().top - headerHeight
        }, 750, 'swing');

        if(clicked){
            collapse();
        } else {
            open();  
        }

        return false;
    });
})

function open() {
    clicked = true;
    burg[0].style.opacity = "1";
    burg[0].style.transform = "rotate(45deg) translate(0px, 0px)";
    burg[0].style.backgroundColor = "#7f0000";

    burg[1].style.opacity = "1";
    burg[1].style.transform = "rotate(0deg) scale(0, 0)";

    burg[2].style.opacity = "1";
    burg[2].style.transform = "translate(-2px, 5px) rotate(-45deg)";
    burg[2].style.backgroundColor = ACCENT;

    drawer.style.width = "40%";
    drawer0.style.opacity = "1";
    drawer1.style.opacity = "1";
    drawer2.style.opacity = "1";
    drawer3.style.opacity = "1";
}

function collapse () {
    clicked = false;
    burg[0].style.opacity = "1";
    burg[0].style.transform = "rotate(0deg) translate(0px, 0px)";
    burg[0].style.backgroundColor = SECONDARY;

    burg[1].style.opacity = "1";
    burg[1].style.transform = "rotate(0deg) scale(1, 1)";

    burg[2].style.opacity = "1";
    burg[2].style.transform = "rotate(0deg) translate(0px, 0px)";
    burg[2].style.backgroundColor = SECONDARY;

    drawer.style.width = "0%";
    drawer0.style.opacity = "0";
    drawer1.style.opacity = "0";
    drawer2.style.opacity = "0";
    drawer3.style.opacity = "0";

    updateYPos();
}

function updateYPos(){
    if(scrollTop < about.offsetTop-navBar.offsetHeight){
        nav0.style.color = PRIMARYTEXT;
        nav0.style.borderBottomColor = "rgba(0,0,0,0)";

        nav1.style.color = PRIMARYTEXT;
        nav1.style.borderBottomColor = "rgba(0,0,0,0)";

        nav2.style.color = PRIMARYTEXT;
        nav2.style.borderBottomColor = "rgba(0,0,0,0)";

        nav3.style.color = PRIMARYTEXT;
        nav3.style.borderBottomColor = "rgba(0,0,0,0)";

        drawer0.style.color = PRIMARYTEXT;
        drawer1.style.color = PRIMARYTEXT;
        drawer2.style.color = PRIMARYTEXT;
        drawer3.style.color = PRIMARYTEXT;

    } else if(scrollTop >= about.offsetTop-navBar.offsetHeight && scrollTop < portfolio.offsetTop-250){
        nav0.style.color = ACCENT;
        nav0.style.borderBottomColor = ACCENT;

        nav1.style.color = PRIMARYTEXT;
        nav1.style.borderBottomColor = "rgba(0,0,0,0)";

        nav2.style.color = PRIMARYTEXT;
        nav2.style.borderBottomColor = "rgba(0,0,0,0)";

        nav3.style.color = PRIMARYTEXT;
        nav3.style.borderBottomColor = "rgba(0,0,0,0)";

        drawer0.style.color = ACCENT;
        drawer1.style.color = PRIMARYTEXT;
        drawer2.style.color = PRIMARYTEXT;
        drawer3.style.color = PRIMARYTEXT;

    }  else if(scrollTop >= portfolio.offsetTop-250 && scrollTop < experience.offsetTop-250){
        nav0.style.color = PRIMARYTEXT;
        nav0.style.borderBottomColor = "rgba(0,0,0,0)";

        nav1.style.color = ACCENT;
        nav1.style.borderBottomColor = ACCENT;

        nav2.style.color = PRIMARYTEXT;
        nav2.style.borderBottomColor = "rgba(0,0,0,0)";

        nav3.style.color = PRIMARYTEXT;
        nav3.style.borderBottomColor = "rgba(0,0,0,0)";

        drawer0.style.color = PRIMARYTEXT;
        drawer1.style.color = ACCENT;
        drawer2.style.color = PRIMARYTEXT;
        drawer3.style.color = PRIMARYTEXT;

    } else if(scrollTop >= experience.offsetTop-250 && scrollTop < contact.offsetTop-525){
        nav0.style.color = PRIMARYTEXT;
        nav0.style.borderBottomColor = "rgba(0,0,0,0)";

        nav1.style.color = PRIMARYTEXT;
        nav1.style.borderBottomColor = "rgba(0,0,0,0)";

        nav2.style.color = ACCENT;
        nav2.style.borderBottomColor = ACCENT;

        nav3.style.color = PRIMARYTEXT;
        nav3.style.borderBottomColor = "rgba(0,0,0,0)";

        drawer0.style.color = PRIMARYTEXT;
        drawer1.style.color = PRIMARYTEXT;
        drawer2.style.color = ACCENT;
        drawer3.style.color = PRIMARYTEXT;
    } else {
        nav0.style.color = PRIMARYTEXT;
        nav0.style.borderBottomColor = "rgba(0,0,0,0)";

        nav1.style.color = PRIMARYTEXT;
        nav1.style.borderBottomColor = "rgba(0,0,0,0)";

        nav2.style.color = PRIMARYTEXT;
        nav2.style.borderBottomColor = "rgba(0,0,0,0)";

        nav3.style.color = ACCENT;
        nav3.style.borderBottomColor = ACCENT;

        drawer0.style.color = PRIMARYTEXT;
        drawer1.style.color = PRIMARYTEXT;
        drawer2.style.color = PRIMARYTEXT;
        drawer3.style.color = ACCENT;
    }
}
//Javascript
// when someone clicks the hamburger button
// if the menu is closed, open it
// if the menu is open, close it

const nav = document.querySelector(".primary-navigation")
const navToggle = document.querySelector(".mobile-nav-toggle")
navToggle.addEventListener("click",() => {
    const visibility = nav.getAttribute("data-visible");
    if(visibility === "false"){
        nav.setAttribute("data-visible",true)
        navToggle.setAttribute("aria-expanded",true)
    }

    else{
            nav.setAttribute("data-visible",false)
            navToggle.setAttribute("aria-expanded",false)
        }
    }
)
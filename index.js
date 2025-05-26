/* =================== toggle icon navbar =====================*/
let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('nav ul')
    //   navbar.style.display = "none"
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')

     if(navbar.classList.toggle('navbar')){
        navbar.style.display = "block"
} else {
        navbar.style.display = "none"
    
}


}


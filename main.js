const navOpen = document.getElementById("navopen")
const navClose = document.getElementById("navclose")
const sidebar = document.getElementById("sidebar")
const overlay = document.getElementById("overlay")
const navHome = document.getElementById("navHome")
const navAbout = document.getElementById("navAbout")
const navProj = document.getElementById("navProj")
const navCont = document.getElementById("navCont")

function openMenu() {
  
  sidebar.classList.remove("translate-x-full")
  overlay.classList.remove("hidden")
}

function closeMenu () {
  sidebar.classList.add("translate-x-full")
  overlay.classList.add("hidden")
}

navOpen.addEventListener("click", openMenu)
navClose.addEventListener("click", closeMenu)
overlay.addEventListener("click", closeMenu)
navHome.addEventListener("click", closeMenu)
navAbout.addEventListener("click", closeMenu)
navProj.addEventListener("click", closeMenu)
navCont.addEventListener("click", closeMenu)
// switch element aus DOM speichern
var themeSwitch = document.querySelector(".swicht")
// body element aus DOM speichern
var bodyTag = document.querySelector("body")
//für switch element ein Event registieren
themeSwitch.addEventListener("click" , switchTheme)
// Funktion, die bei click ausgeführt werden soll
function switchTheme(){
    bodyTag.classList.toggle("light")
    bodyTag.classList.toggle("dark")
}
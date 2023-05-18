const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let buffBtnEl = document.getElementById("buffbtn")
let xBuffBtnEl = document.getElementById("xbuffbtn")

let passOneEl = document.getElementById("pass1")
let passTwoEl = document.getElementById("pass2")




function genBuffPass() {
    passOneEl.textContent = ""
    passTwoEl.textContent = ""
    for (i = 0; i <= 15; i++) {
        let randomPassOne = Math.floor(Math.random() * characters.length)
        let randomPassTwo = Math.floor(Math.random() * characters.length)
        
        passOneEl.textContent += characters[randomPassOne]
        passTwoEl.textContent += characters[randomPassTwo]
        
        passOneEl.style.fontSize = "90%"
        passTwoEl.style.fontSize = "90%"
    }
}


function genXBuffPass() {
    passOneEl.textContent = ""
    passTwoEl.textContent = ""
    for (i = 0; i <= 25; i++) {
        let randomPassXB1 = Math.floor(Math.random() * characters.length)
        let randomPassXB2 = Math.floor(Math.random() * characters.length)
        passOneEl.textContent += characters[randomPassXB1]
        passTwoEl.textContent += characters[randomPassXB2]
        
        passOneEl.style.fontSize = "82%"
        passTwoEl.style.fontSize = "82%"
        
        passOneEl.style.maxheight = "fit-content"
        passTwoEl.style.maxheight = "fit-content"
    }
}

function copyPass() {
    passOneEl.select
    passTwoEl.select
    navigator.clipboard.writeText(passOneEl.value)
    navigator.clipboard.writeText(passTwoEl.value)
    alert("Password copied!")
}



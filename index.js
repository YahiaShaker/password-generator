const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let pass1El = document.getElementById("pass1-el")
let pass2El = document.getElementById("pass2-el")
let lenEl = document.getElementById("length")

function randomPass() {
    let password = ""
    if (parseInt(lenEl.value) > 20) {
        console.log("Please choose a length between 1-20 characters")
        return
    }
    for (let i = 0; i < parseInt(lenEl.value); i++) {
        let randind = Math.floor( Math.random() * characters.length)
        password += characters[randind]
    }
    return password
}

function generatePass() {
    pass1El.textContent = randomPass()
    pass2El.textContent = randomPass()
}

function copy(p) {
    let text = null
    
    if (p === 1) {
        text = pass1El.textContent
        if (text === "") {return}
        pass1El.textContent = "Copied!"
        
    } else {
        text = pass2El.textContent
        if (text === "") {return}
        pass2El.textContent = "Copied!"
    }
    var input = document.createElement('textarea');
    input.innerHTML = text;
    document.body.appendChild(input);
    input.select();
    var result = document.execCommand('copy');
    document.body.removeChild(input);
}
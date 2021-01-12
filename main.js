const keyBox = document.getElementById("keyBox");
const keyCodeBox = document.getElementById("keyCodeBox");
const keyLocBox = document.getElementById("keyLocBox");
const codeBox = document.getElementById("codeBox");
const pageTitle = document.getElementById("pageTitle");

document.onkeydown = function(e) {
    console.log(e.keyCode + " = event.keyCode, " + e.key + " = event.key, " + e.location + " = event.location, "+ e.code + " = event.code");
    
    keyCodeBox.innerHTML = e.keyCode;
    keyBox.innerHTML = e.key;
    keyLocBox.innerHTML = e.location;
    codeBox.innerHTML = e.code;
    
    pageTitle.innerHTML = e.key + ' | ' + e.keyCode + ' | ' + e.code;
}
